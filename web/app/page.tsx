"use client";
import { FocusCardsDemo } from "@/components/FocusCardsDemo";
import Hero from "@/components/Hero/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Layout from "@/components/Layout/Layout";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import testimonials from "@/data/testimonials";

export default function Home() {
  const { theme } = useGlobalContext();
  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <Layout>
        <Hero />
        <FocusCardsDemo />
        <AnimatedTestimonials testimonials={testimonials} />
        <InfiniteMovingCardsDemo />
      </Layout>
    </div>
  );
}
