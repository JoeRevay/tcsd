import { useEffect, useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        isScrolled ? "bg-background/95 backdrop-blur shadow" : "bg-background/70 backdrop-blur"
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollToId("hero")}
            className="text-xl font-bold text-accent"
            aria-label="Go to top"
          >
            Joe Revay
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#platform"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("platform");
              }}
              className="text-foreground hover:text-accent transition"
            >
              Platform
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
              className="text-foreground hover:text-accent transition"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => scrollToId("get-involved")}
              className="bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition font-semibold"
            >
              Get Involved
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded hover:bg-muted"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
          <a
            href="#platform"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("platform");
            }}
            className="block px-4 py-3 hover:bg-muted"
          >
            Platform
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
            className="block px-4 py-3 hover:bg-muted"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => scrollToId("get-involved")}
            className="block w-full text-left px-4 py-3 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Get Involved
          </button>
        </div>
      )}
    </nav>
  );
}

