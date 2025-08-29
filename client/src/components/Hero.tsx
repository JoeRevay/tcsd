export default function Hero() {
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
    <header className="relative min-h-screen flex items-center justify-center gradient-bg-secondary pt-16 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full float-animation" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/15 rounded-full float-animation" style={{animationDelay: '4s'}}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 leading-tight" data-testid="hero-title">
              Joe Revay
            </h1>
            <div className="h-1 w-24 gradient-bg-accent mx-auto mb-6 section-divider"></div>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8" data-testid="hero-tagline">
              Every Student. Every Family. Every Future.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('platform')} 
              className="gradient-bg-accent text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 font-semibold text-lg button-modern pulse-glow"
              data-testid="hero-platform-button"
            >
              View My Platform
            </button>
            <button 
              onClick={() => scrollToSection('volunteer')} 
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 font-semibold text-lg button-modern"
              data-testid="hero-volunteer-button"
            >
              Get Involved
            </button>
          </div>
          

        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-foreground hover:text-accent transition-colors duration-200"
          data-testid="hero-scroll-down"
        >
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </header>
  );
}