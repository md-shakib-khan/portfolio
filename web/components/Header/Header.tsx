import Image from "next/image";
import Link from "next/link";

import DropDownMenu from "./DropDownMenu";
export default function Header() {
  const menus = [
    { label: "About", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
    { label: "Projects", href: "/projects" },
    { label: "Waitlist", href: "/waitlist" },
  ];
  return (
    <header className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8">
      <div className="hidden lg:flex w-full justify-between">
        <div className="flex flex-row space-x-4 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
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
          {menus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.label}
              className="text-white text-sm relative hover:bg-zinc-700 rounded-lg px-3"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {menu.label}
              </span>
            </Link>
          ))}
          {/* <Link href={"/about"} className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">About</span>
          </Link>
          <Link href={"/blogs"} className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">Blogs</span>
          </Link>
          <Link href={"/"} className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">
              Guest Book
            </span>
          </Link>
          <Link href={"/"} className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">
              Discord
            </span>
          </Link>
          <Link href={"/"} className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">Cohort</span>
          </Link> */}
        </div>
      </div>
      <div className="flex lg:hidden w-full">
        <div className="w-full flex justify-between">
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
          <div className="cursor-pointer">
            <DropDownMenu menus={menus} />
          </div>
        </div>
      </div>
    </header>
  );
}
