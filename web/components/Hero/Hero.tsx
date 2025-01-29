import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Hero() {
  return (
    <div className="block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-20 px-8">
      <div className="mr-4 flex flex-col items-center">
        <h1 className="text-xl font-bold text-transparent bg-clip-text text-cyan-600 shadow-lg hover:scale-110 transform transition duration-500 ease-in-out">
          ~ Hello
        </h1>

        <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
          I am a<span className="text-cyan-500"> Web Developer</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
          Meet MD Shakib Khan, a dedicated and passionate student with a strong
          focus on Web Development and Machine Learning. With a solid foundation
          in science and a keen curiosity for technology, Shakib is constantly
          learning and evolving to explore innovative solutions and create
          meaningful digital experiences. His journey combines the creative
          aspects of web development with the analytical depth of AI, aiming to
          bridge the gap between functionality and intelligence in his projects.
          {/* Always eager to grow and share knowledge, Shakib is focused on contributing to the tech world through continuous exploration and learning. */}
        </p>
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
        <div className="flex  md:justify-center space-x-2 mt-2">
          <a
            target="_blank"
            className="text-zinc-500 text-sm relative"
            href="https://www.facebook.com/mdshakibkhan.dev"
          >
            <FaFacebook className=" hover:text-[#4267B2] mx-2 my-2" size={20} />
          </a>
          <a
            target="_blank"
            className="text-zinc-500 text-sm relative"
            href="https://www.instagram.com/mdshakibkhan.dev/"
          >
            <FaInstagram
              className=" hover:text-[#fa7e1e] mx-2 my-2"
              size={20}
            />
          </a>
          <a
            target="_blank"
            className="text-zinc-500 text-sm relative"
            href="https://www.linkedin.com/in/md-shakib-khan/"
          >
            <FaLinkedin className=" hover:text-[#0e76a8] mx-2 my-2" size={20} />
          </a>
          <a
            target="_blank"
            className="text-zinc-500 text-sm relative"
            href="https://www.x.com/mdshakibkhan69/"
          >
            <FaSquareXTwitter
              className=" hover:text-white mx-2 my-2"
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
