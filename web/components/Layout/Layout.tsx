"use client";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout(props: { children: React.ReactNode }) {
  const { theme } = useGlobalContext();
  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <Fragment>
        {/* <BackgroundBeams /> */}
        <main className="max-w-5xl m-auto h-auto select-none ">
          <Header />
          {props.children}
          <Footer />
        </main>
      </Fragment>
    </div>
  );
}
