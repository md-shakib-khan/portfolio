import Layout from "@/components/Layout/Layout";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | MD Shakib Khan - Web Developer",
  description:
    "Hey! I'm Shakib Khan and I'm a full stack web developer.",
};

export default function About() {
  return (
    <Layout>
      <div className="px-8 md:mt-20 relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
            Hey! I&apos;m <span className="text-cyan-500">Shakib Khan</span> and I&apos;m
            a full stack web developer.
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            I&apos;m Shakib Khan, and I&apos;ve always been passionate about technology
            and education. My journey has taken me through various roles—content
            creator, developer, entrepreneur, and innovator—all driven by a deep
            love for sharing knowledge and making complex concepts more
            understandable.
          </p>
        </div>
        <div className="order-first md:order-last flex flex-col items-center">
          <Image
            src={"/sk.png"}
            width={300}
            // placeholder="blur"
            height={300}
            alt="Me"
            className="rounded-xl"
          />
          <SocialMediaIcons />
        </div>
      </div>
      <div className="px-8 mt-10 relative">
      As a YouTuber, I&apos;ve built my channel around my passion for technology and education. My goal is to make the world of programming and software development more accessible to everyone, regardless of their background or experience level. I remember how challenging it was when I first started learning to code, and that&apos;s why I&apos;m committed to breaking down complex concepts into simple, easy-to-understand tutorials.
      </div>
    </Layout>
  );
}
