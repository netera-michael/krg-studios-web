import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Showcase from "@/components/home/Showcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Showcase />
      <About />
    </main>
  );
}
