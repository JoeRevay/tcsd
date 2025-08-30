export default function Hero() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="hero"
      className="relative overflow-hidden"
      role="banner"
    >
      {/* Background / art layers should not block clicks */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-muted/60" />

      <section className="relative z-10 text-center py-28 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Building a Better Future for Twinsburg Schools
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Together, we can strengthen our schools and our community.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* View Platform */}
            <a
              href="#platform"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("platform");
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-foreground text-background hover:opacity-90 transition relative z-20"
            >
              View My Platform
            </a>

            {/* Get Involved (green) */}
            <button
              type="button"
              onClick={() => scrollToId("get-involved")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition relative z-20"
            >
              Get Involved
            </button>
          </div>
        </div>

        {/* Scroll-down hint (optional) */}
        <div className="mt-12">
          <button
            type="button"
            onClick={() => scrollToId("about")}
            className="text-foreground hover:text-accent transition-colors p-2"
            aria-label="Scroll to About"
          >
            <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>
    </header>
  );
}

