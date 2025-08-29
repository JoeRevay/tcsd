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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    console.log('Volunteer signup:', formData);
    
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon with volunteer opportunities.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
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
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
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
              onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold"
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
                type="submit" 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors duration-200 font-semibold text-lg shadow-lg"
                data-testid="button-submit-volunteer"
              >
                Join the Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}