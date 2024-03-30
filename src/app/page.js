import BottomBanner from "@/components/Bottom-Banner";
import Card from "@/components/Card";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="p-3 md:p-0">
      <Hero />
      <Feature />
      <Card />
      <BottomBanner />
      <Footer />
    </main>
  );
}
