import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function GetInvolved() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    try {
      // In development, just simulate the submission
      if (import.meta.env.DEV) {
        console.log('Development mode - Form data:', formData);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        // Create form data for Netlify (production)
        const formData2 = new FormData();
        formData2.append('form-name', 'volunteer-signup');
        formData2.append('firstName', formData.firstName);
        formData2.append('lastName', formData.lastName);
        formData2.append('email', formData.email);
        formData2.append('phone', formData.phone);
        formData2.append('message', formData.message);

        // Submit to Netlify
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData2 as any).toString()
        });
      }

      // Show success message
      toast({
        title: "Thank you for joining!",
        description: "We'll be in touch soon with volunteer opportunities.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleShareCampaign = async () => {
    const shareData = {
      title: 'Joe Revay for Twinsburg School Board',
      text: 'Support Joe Revay for Twinsburg City School District Board. Every Student. Every Family. Every Future.',
      url: window.location.href
    };

    try {
      // Try to use the Web Share API if available (mobile devices)
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Campaign link copied!",
          description: "Share it with your friends and family.",
        });
      }
    } catch (error) {
      // If all else fails, show the URL for manual sharing
      toast({
        title: "Share this campaign",
        description: window.location.href,
      });
    }
  };

  const handleJoinTeam = () => {
    const form = document.getElementById('volunteer-form');
    if (form) {
      // Scroll to form with offset for header
      const headerOffset = 100;
      const elementPosition = form.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Show a helpful message and focus on first input
      toast({
        title: "Ready to join the team?",
        description: "Fill out the form below to get started.",
      });

      // Focus on the first input field after a short delay
      setTimeout(() => {
        const firstInput = form.querySelector('input[name="firstName"]') as HTMLInputElement;
        if (firstInput) {
          firstInput.focus();
        }
      }, 800);
    }
  };

  return (
    <section id="volunteer" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="get-involved-title">
            Get Involved
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="get-involved-subtitle">
            Want to support Joe's campaign? Whether you're interested in volunteering, displaying a yard sign, or sharing with friends — your help matters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Spread the Word</h3>
            <p className="text-muted-foreground mb-6">
              Share Joe's message with friends, family, and neighbors. Word of mouth is our most powerful tool.
            </p>
            <button 
              onClick={handleShareCampaign}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
              data-testid="share-campaign-button"
            >
              Share Campaign
            </button>
          </div>
          
          <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border">
            <div className="text-4xl mb-4">🪧</div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Yard Signs</h3>
            <p className="text-muted-foreground mb-6">
              Display a yard sign to show your support and increase visibility in the community.
            </p>
            <button 
              onClick={() => window.location.href = "mailto:JoeRevay4TCSD@gmail.com?subject=Yard Sign Request"}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold"
            >
              Request a Sign
            </button>
          </div>
          
          <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Volunteer</h3>
            <p className="text-muted-foreground mb-6">
              Join our team of volunteers for placing yard signs, door-to-door canvassing, and event support.
            </p>
            <button 
              onClick={handleJoinTeam}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold"
              data-testid="join-team-button"
            >
              Join the Team
            </button>
          </div>
        </div>
        
        {/* Volunteer Registration Form */}
        <div id="volunteer-form" className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center" data-testid="volunteer-form-title">
            Join Our Campaign
          </h3>
          <div className="space-y-6">
            {/* Hidden form for Netlify detection */}
            {!import.meta.env.DEV && (
              <form 
                name="volunteer-signup" 
                method="POST" 
                data-netlify="true"
                style={{ display: 'none' }}
              >
                <input type="hidden" name="form-name" value="volunteer-signup" />
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
                <textarea name="message"></textarea>
              </form>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200" 
                  placeholder="Enter your first name"
                  data-testid="input-firstName"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200" 
                  placeholder="Enter your last name"
                  data-testid="input-lastName"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200" 
                  placeholder="Enter your email"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200" 
                  placeholder="Enter your phone number"
                  data-testid="input-phone"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Message (Optional)</label>
              <textarea 
                rows={3} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200" 
                placeholder="Tell us why you support Joe's campaign"
                data-testid="textarea-message"
              />
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleSubmit}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors duration-200 font-semibold text-lg shadow-lg"
                data-testid="button-submit-volunteer"
              >
                Join the Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


