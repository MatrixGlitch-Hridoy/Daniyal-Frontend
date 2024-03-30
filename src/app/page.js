import BottomBanner from "@/components/Bottom-Banner";
import Card from "@/components/Card";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="p-3 md:p-0 container mx-auto space-y-20">
      <Hero />
      <Feature />
      <Card />
      <BottomBanner />
    </main>
  );
}
