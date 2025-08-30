import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface JoinFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  availability?: string;
  interests?: string;
  message?: string;
}

export default function GetInvolved() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<JoinFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    availability: "",
    interests: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Netlify Forms submit (same pattern as contact)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "First name, last name, and email are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      const formEl = e.currentTarget;
      const payload = new FormData(formEl);
      payload.append("form-name", "join"); // required by Netlify

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload as any).toString(),
      });

      toast({
        title: "Thanks for joining!",
        description: "We’ll be in touch soon with ways to help.",
      });

      formEl.reset();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        availability: "",
        interests: "",
        message: "",
      });
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="get-involved" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Volunteer, host an event, knock on doors, or help spread the word.
          </p>
        </div>

        {/* CTA cards with links (not submit buttons) */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="bg-background rounded-xl p-6 shadow-lg border border-border relative">
            <h3 className="text-xl font-semibold mb-2">Door Knocking</h3>
            <p className="text-muted-foreground mb-4">Help us reach voters across the district.</p>
            <a
              href="#join"
              className="relative z-10 inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition"
            >
              I’m Interested
            </a>
          </div>
          <div className="bg-background rounded-xl p-6 shadow-lg border border-border relative">
            <h3 className="text-xl font-semibold mb-2">Phone Banking</h3>
            <p className="text-muted-foreground mb-4">Make calls to inform and mobilize supporters.</p>
            <a
              href="#join"
              className="relative z-10 inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition"
            >
              I’m Interested
            </a>
          </div>
          <div className="bg-background rounded-xl p-6 shadow-lg border border-border relative">
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p className="text-muted-foreground mb-4">Host a meet-and-greet or help at campaign events.</p>
            <a
              href="#join"
              className="relative z-10 inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition"
            >
              I’m Interested
            </a>
          </div>
        </div>

        {/* Join form (Netlify Forms) */}
        <div id="join" className="bg-background rounded-xl p-8 shadow-lg border border-border max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6">Join Our Campaign</h3>

          <form
            onSubmit={handleSubmit}
            name="join"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* Required by Netlify */}
            <input type="hidden" name="form-name" value="join" />
            <input type="hidden" name="bot-field" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select availability</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Evenings">Evenings</option>
                  <option value="Weekends">Weekends</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Interests</label>
                <select
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Choose an area</option>
                  <option value="Door Knocking">Door Knocking</option>
                  <option value="Phone Banking">Phone Banking</option>
                  <option value="Events">Events</option>
                  <option value="Fundraising">Fundraising</option>
                  <option value="Signs & Materials">Signs & Materials</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message (optional)</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="Anything else you'd like us to know?"
              />
            </div>

            {/* Only this button submits the form */}
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-4 rounded-lg hover:bg-accent/90 transition-colors duration-200 font-semibold text-lg shadow-lg"
            >
              Join the Campaign
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



