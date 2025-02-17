"use client";
import Header from "@/components/Header/Header";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Projects | MD Shakib Khan - Web Developer",
//   description: "Projects of MD Shakib Khan - Web Developer",
// };

export default function Projects() {
  const { theme } = useGlobalContext();
  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <Header />
      <HeroParallaxDemo />
      {/* <BackgroundBeams /> */}
      {/* <h1>Hello</h1> */}
    </div>
  );
}
