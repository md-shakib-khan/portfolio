import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-20 px-8">
      <div className="mr-4">
        <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
          Trust me, I am a
          <span className="text-cyan-500"> software engineer.</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
          Meet Shakib Khan, content creator, educator, and entrepreneur known
          for his expertise in the tech industry. He has successfully launched
          numerous technical courses on various platforms. Founder of Teachyst,
          white-labeled Learning Management System (LMS) to help educators
          monetize their content globally.
        </p>
        <p className="text-zinc-600 text-sm my-4">~ ChatGPT</p>

        <button className="text-white bg-blue-500 hover:bg-blue-600 px-10 py-3 rounded-md">
          Join To WhatsApp
        </button>
      </div>
      <div className="mt-4 lg:mt-0">
        <Image
          src={"/sk.png"}
          width={500}
          height={500}
          alt="Shakib Khan"
          className="transition duration-500  blur-0 scale-100 rounded-2xl"
        />
        <div className="flex flex-row justify-start md:justify-center space-x-2 mt-2">
          <a
            className="text-zinc-500 text-sm relative"
            href="https://www.facebook.com/mdshakibkhan.dev"
          >
            <FaFacebook className=" hover:text-cyan-500 mx-2 my-2" size={20} />
          </a>
          <a
            className="text-zinc-500 text-sm relative"
            href="https://www.facebook.com/mdshakibkhan.dev"
          >
            <FaInstagram className=" hover:text-cyan-500 mx-2 my-2" size={20} />
          </a>
          <a
            className="text-zinc-500 text-sm relative"
            href="https://www.facebook.com/mdshakibkhan.dev"
          >
            <FaLinkedin className=" hover:text-cyan-500 mx-2 my-2" size={20} />
          </a>
          <a
            className="text-zinc-500 text-sm relative"
            href="https://www.facebook.com/mdshakibkhan.dev"
          >
            <FaSquareXTwitter
              className=" hover:text-cyan-500 mx-2 my-2"
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
