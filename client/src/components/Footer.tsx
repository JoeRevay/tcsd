export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="footer-title">
              Joe Revay for School Board
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="footer-description">
              Committed to educational excellence, community engagement, and transparent leadership for Twinsburg City School District.
            </p>
            <p className="text-sm text-muted-foreground" data-testid="footer-tagline">
              Every Student. Every Family. Every Future.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-muted-foreground hover:text-accent transition-colors duration-200 text-left"
                data-testid="footer-link-about"
              >
                About Joe
              </button>
              <button 
                onClick={() => scrollToSection('platform')} 
                className="block text-muted-foreground hover:text-accent transition-colors duration-200 text-left"
                data-testid="footer-link-platform"
              >
                Platform
              </button>
              <button 
                onClick={() => scrollToSection('volunteer')} 
                className="block text-muted-foreground hover:text-accent transition-colors duration-200 text-left"
                data-testid="footer-link-volunteer"
              >
                Get Involved
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground" data-testid="footer-contact-email">JoeRevay4TCSD@gmail.com</p>
              <p className="text-muted-foreground" data-testid="footer-contact-location">Twinsburg, Ohio</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2025 Friends of Joe Revay. All rights reserved.
           
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground" data-testid="footer-paid-for">
              Paid for by Friends of Joe Revay.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}