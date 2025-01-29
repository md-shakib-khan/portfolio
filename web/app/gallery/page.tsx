import Layout from "@/components/Layout/Layout";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { ParallaxScrollDemo } from "@/components/ParallaxScrollDemo";

export default function Gallery() {
  return (
    <Layout>
      <LayoutGridDemo />
      <ParallaxScrollDemo />
    </Layout>
  );
}
