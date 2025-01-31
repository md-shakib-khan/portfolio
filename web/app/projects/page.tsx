import Header from "@/components/Header/Header";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | MD Shakib Khan - Web Developer",
  description:
    "Projects of MD Shakib Khan - Web Developer",
};


export default function Projects() {
  return (
    <div>
      <Header />
      <HeroParallaxDemo />
      {/* <BackgroundBeams /> */}
      {/* <h1>Hello</h1> */}
    </div>
  );
}
