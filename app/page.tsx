import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage(): JSX.Element {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
    </main>
  );
}
