import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import About from "@/components/About";
import Platform from "@/components/Platform";
import Endorsements from "@/components/Endorsements";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <WaveDivider />
      <About />
      <Platform />
      <Endorsements />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
}
