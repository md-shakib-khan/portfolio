"use client";
import Image from "next/image";
import Link from "next/link";

import { useGlobalContext } from "@/context/GlobalContextProvider";
import { Switch } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import DropDownMenu from "./DropDownMenu";
export default function Header() {
  const { theme, setTheme } = useGlobalContext();
  const menus = [
    { label: "About", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    // { label: "Gallery", href: "/gallery" },
    { label: "Projects", href: "/projects" },
    { label: "Waitlist", href: "/waitlist" },
  ];

  const toggleTheme = (e: any) => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme-2025", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme-2025", "light");
    }
  };
  return (
    <header className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8">
      <div className="hidden lg:flex w-full justify-between">
        <div
          className={`flex flex-row space-x-4 items-center antialiased border px-4 py-2 rounded-2xl  ${
            theme === "dark"
              ? "bg-zinc-800  border-zinc-700/60"
              : "bg-white shadow-xl"
          }`}
        >
          <Link
            href={"/"}
            className={`font-bold text-sm flex items-center justify-center  space-x-2 ${
              theme === "dark" ? "text-white" : "text-zinc-900"
            }`}
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
              className={`text-sm relative rounded-lg px-3 ${
                theme === "dark"
                  ? "text-white hover:bg-zinc-700 "
                  : "text-black hover:bg-zinc-100 "
              }`}
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {menu.label}
              </span>
            </Link>
          ))}
          <Switch
            size="md"
            color="dark.4"
            onChange={(e) => toggleTheme(e)}
            onLabel={
              theme === "light" ? (
                <IconSun
                  size={16}
                  stroke={2.5}
                  color="var(--mantine-color-yellow-4)"
                />
              ) : (
                <IconMoonStars
                  size={16}
                  stroke={2.5}
                  color="var(--mantine-color-blue-6)"
                />
              )
            }
            offLabel={
              theme != "dark" ? (
                <IconSun
                  size={16}
                  stroke={2.5}
                  color="var(--mantine-color-yellow-4)"
                />
              ) : (
                <IconMoonStars
                  size={16}
                  stroke={2.5}
                  color="var(--mantine-color-blue-6)"
                />
              )
            }
          />
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
            className={`"font-bold text-sm flex items-center justify-center " ${
              theme === "dark" ? "text-white space-x-2" : "text-black space-x-2"
            }`}
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
