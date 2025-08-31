import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      if (import.meta.env.DEV) {
        // Development: simulate the submission
        console.log("Development mode - Form data:", formData);
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        // Production: submit to Netlify with explicit payload (ensures form-name is present)
        const payload: Record<string, string> = {
          "form-name": "contact-form",
          "bot-field": "",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        };

        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString()
        });

        if (!res.ok) {
          throw new Error(`Netlify returned ${res.status}`);
        }
      }

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. Joe will get back to you soon."
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "General Inquiry",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="contact-title">
            Contact Joe
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Have questions about my platform or want to discuss education issues? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-info-title">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:JoeRevay4TCSD@gmail.com"
                      className="text-accent hover:text-accent/80 transition-colors duration-200"
                      data-testid="contact-email"
                    >
                      JoeRevay4TCSD@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground" data-testid="contact-location">Twinsburg, Ohio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-form-title">Send a Message</h3>

            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                    placeholder="First name"
                    data-testid="contact-input-firstName"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                    placeholder="Last name"
                    data-testid="contact-input-lastName"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="your.email@example.com"
                  data-testid="contact-input-email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  data-testid="contact-select-subject"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Education Policy Question">Education Policy Question</option>
                  <option value="Meeting Request">Meeting Request</option>
                  <option value="Media Inquiry">Media Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="Your message here..."
                  data-testid="contact-textarea-message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg hover:bg-accent/90 transition-colors duration-200 font-semibold text-lg shadow-lg"
                data-testid="contact-button-submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


