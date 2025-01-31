
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { CompareDemo } from "./CompareDemo";
import Image from "next/image";
import SocialMediaIcons from "../SocialMediaIcons";

export default function Hero() {




  return (
    <div className="block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-10 px-8">
      <div className="mr-4 flex flex-col items-center">
        <div>
          <h1 className="text-xl font-bold bg-clip-text text-cyan-100 shadow-lg">
            ~ Hello
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
            I am a<span className="text-cyan-500"> Web Developer</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
            Meet MD Shakib Khan, a dedicated and passionate student with a
            strong focus on Web Development and Machine Learning. With a solid
            foundation in science and a keen curiosity for technology, Shakib is
            constantly learning and evolving to explore innovative solutions and
            create meaningful digital experiences. His journey combines the
            creative aspects of web development with the analytical depth of AI,
            aiming to bridge the gap between functionality and intelligence in
            his projects.
            {/* Always eager to grow and share knowledge, Shakib is focused on contributing to the tech world through continuous exploration and learning. */}
          </p>
        </div>
        <p className="text-zinc-600 text-sm my-4">~ ChatGPT</p>
        <a target="_blank" href="https://wa.me/+8801736906597">
          <HoverBorderGradient
            containerClassName="rounded-xl"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            Contact To WhatsApp
          </HoverBorderGradient>
        </a>
        {/* <button className="text-white bg-blue-500 hover:bg-blue-600 px-10 py-3 rounded-md">
          
        </button> */}
      </div>
      <div className="mt-4 lg:mt-0 flex flex-col items-center">
        <Image
          src={"/sk.png"}
          width={500}
          height={500}
          alt="Shakib Khan"
          className="transition duration-500  blur-0 scale-100 rounded-2xl"
        />
        {/* <CompareDemo /> */}



    <SocialMediaIcons />
      </div>
    </div>
  );
}
