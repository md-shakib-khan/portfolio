import { Fragment } from "react";
import Header from "../Header/Header";
import { BackgroundBeams } from "../ui/background-beams";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Fragment>
      <main className="max-w-5xl m-auto h-auto select-none">
        <Header />
        {props.children}
      </main>
      <BackgroundBeams />
    </Fragment>
  );
}
