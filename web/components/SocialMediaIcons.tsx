import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

export default function SocialMediaIcons() {
    const socialMedias = [
        {
          icon: <FaSquareFacebook className=" hover:text-[#4267B2] mx-2 my-2" size={20} />,
          href: "https://www.facebook.com/mdshakibkhan/",
        },
        {
          icon: <FaSquareInstagram className="hover:text-[#fa7e1e] mx-2 my-2" size={20} />,
          href: "https://www.instagram.com/mdshakibkhan/",
        },
        {
          icon: <FaLinkedin className="hover:text-[#0077B5] mx-2 my-2" size={20} />,
          href: "https://www.linkedin.com/in/mdshakibkhan/",
        },
        {
          icon: <FaSquareGithub className="hover:text-[#fff] mx-2 my-2" size={20} />,
          href: "https://github.com/md-shakib-khan",
        },
        {
          icon: <FaSquareXTwitter className="hover:text-[#fff] mx-2 my-2" size={20} />,
          href: "https://twitter.com/mdshakibkhan",
        }
      ]
    
  return (
    <div className="flex  md:justify-center space-x-2 mt-2">
    {
      socialMedias.map((socialMedia, index) => (
        <a
          key={index}
          target="_blank"
          className="text-zinc-500 text-sm relative"
          href={socialMedia.href}
        >
          {socialMedia.icon}
        </a>
      ))
    }
    {/* <a
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
    <a
      target="_blank"
      className="text-zinc-500 text-sm relative"
      href="https://github.com/md-shakib-khan"
    >
      <FaSquareGithub
        className=" hover:text-white mx-2 my-2"
        size={20}
      />
    </a> */}
  </div>
  )
}
