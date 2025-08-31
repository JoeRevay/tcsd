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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      if (import.meta.env.DEV) {
        console.log("Development mode - Form data:", formData);
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        // HOTFIX: Post to the already-registered Netlify form "contact-form"
        const payload: Record<string, string> = {
          "form-name": "contact-form",   // ← hotfix (was "volunteer-signup")
          "bot-field": "",
          "*redirect": "/",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        };

        const res = await fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString()
        });

        if (!res.ok) throw new Error(`Netlify returned ${res.status}`);
      }

      toast({
        title: "Thank you for joining!",
        description: "We'll be in touch soon with volunteer opportunities."
      });

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
      title: "Joe Revay for Twinsburg School Board",
      text: "Support Joe Revay for Twinsburg City School District Board. Every Student. Every Family. Every Future.",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Campaign link copied!",
          description: "Share it with your friends and family."
        });
      }
    } catch {
      toast({
        title: "Share this campaign",
        description: window.location.href
      });
    }
  };

  const handleJoinTeam = () => {
    const form = document.getElementById("volunteer-form");
    if (form) {
      const headerOffset = 100;
      const elementPosition = form.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      toast({
        title: "Ready to join the team?",
        description: "Fill out the form below to get started."
      });

      setTimeout(() => {
        const firstInput = form.querySelector('input[name="firstName"]') as HTMLInputElement;
        if (firstInput) firstInput.focus();
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
          <






