import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Waitlist | MD Shakib Khan - Web Developer",
  description:
    "Subscribe My Newsletter",
};

export default function WaitList() {
  return (
    <Layout>
      <BackgroundBeamsDemo />
    </Layout>
  );
}
