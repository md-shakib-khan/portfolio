"use client";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  const { theme } = useGlobalContext();
  const [email, setEmail] = useState("");
  return (
    <div
      className={`"" ${
        theme === "dark"
          ? "bg-neutral-950 h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased"
          : "bg-neutral-50 h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased"
      }`}
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className={`"" ${
            theme === "dark"
              ? " rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-12 px-4 text-white"
              : "rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-50 placeholder:text-neutral-700 h-12 px-4"
          }`}
          onKeyDown={(e) => {
            if (email && e.key === "Enter") {
              e.preventDefault();
              alert(email);
            }
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
