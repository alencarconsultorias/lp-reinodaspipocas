import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Flavors from "@/components/Flavors";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Flavors />
        <Features />
        <Testimonials />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
