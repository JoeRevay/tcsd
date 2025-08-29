import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="text-xl font-bold text-white hover:text-blue-200 transition-colors duration-200 cursor-pointer" 
              data-testid="nav-logo"
            >
              Joe Revay
            </button>
            <span className="ml-2 text-sm text-blue-300 hidden sm:inline">for Twinsburg School Board</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-blue-100 hover:text-white transition-colors duration-200 font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('platform')} 
                className="text-blue-100 hover:text-white transition-colors duration-200 font-medium"
                data-testid="nav-platform"
              >
                Platform
              </button>
              <button 
                onClick={() => scrollToSection('volunteer')} 
                className="text-blue-100 hover:text-white transition-colors duration-200 font-medium"
                data-testid="nav-volunteer"
              >
                Get Involved
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-white text-primary px-4 py-2 rounded-md hover:bg-blue-100 transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-white hover:text-blue-200 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary border-b border-primary/20">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-3 py-2 text-blue-100 hover:text-white transition-colors duration-200"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('platform')} 
              className="block w-full text-left px-3 py-2 text-blue-100 hover:text-white transition-colors duration-200"
              data-testid="mobile-nav-platform"
            >
              Platform
            </button>
            <button 
              onClick={() => scrollToSection('volunteer')} 
              className="block w-full text-left px-3 py-2 text-blue-100 hover:text-white transition-colors duration-200"
              data-testid="mobile-nav-volunteer"
            >
              Get Involved
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-3 py-2 text-blue-100 hover:text-white transition-colors duration-200"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}