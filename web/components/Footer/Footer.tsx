import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons'

export default function Footer() {
    const menus = [
        { label: "About", href: "/about" },
        { label: "Blogs", href: "/blogs" },
        { label: "Contact", href: "/contact" },
        { label: "Gallery", href: "/gallery" },
        { label: "Projects", href: "/projects" },
        { label: "Waitlist", href: "/waitlist" },
      ];
  return (
    <div className='border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8'>
        <div className='flex flex-col justify-center items-center py-10 '>
        <Link
            href={"/"}
            className="font-bold text-sm flex items-center justify-center text-white space-x-2"
          >
            <Image
              src={"/sk.png"}
              alt="Shakib Khan"
              width={30}
              height={30}
              className="transition duration-500  blur-0 scale-100 rounded-full "
            />
            <span className="font-inter font-bold">MD Shakib Khan</span>
          </Link>
          <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4'>
          {menus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.label}
              className="text-white text-sm relative"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {menu.label}
              </span>
            </Link>
          ))}
          </div>
          <SocialMediaIcons />
        </div>
    </div>
  )
}
