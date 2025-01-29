import Hero from "@/components/Hero/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Layout from "@/components/Layout/Layout";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import testimonials from "@/data/testimonials";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AnimatedTestimonials testimonials={testimonials} />
      <InfiniteMovingCardsDemo />
    </Layout>
  );
}
