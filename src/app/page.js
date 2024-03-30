import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="p-3 md:p-0">
      <Hero />
      <Card />
      <Footer />
    </main>
  );
}
