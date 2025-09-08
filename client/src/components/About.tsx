import headshot from "@/assets/joe-headshot.png";

export default function About() {
  return (
    <section id="about" className="py-20 gradient-bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-bg-accent rounded-xl blur opacity-20 float-animation"></div>
            <img
              src={headshot}
              alt="Joe Revay headshot"
              loading="lazy"
              decoding="async"
              className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              data-testid="about-image"
            />
          </div>

          {/* …rest of your component unchanged… */}
