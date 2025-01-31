import Layout from "@/components/Layout/Layout";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { ParallaxScrollDemo } from "@/components/ParallaxScrollDemo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | MD Shakib Khan - Web Developer",
  description:
    "This is Gallery Of MD Shakib Khan",
};
export default function Gallery() {
  return (
    <Layout>
      <LayoutGridDemo />
      <ParallaxScrollDemo />
    </Layout>
  );
}
