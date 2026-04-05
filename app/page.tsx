// app/page.tsx

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Works from "@/components/Works";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Works />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}