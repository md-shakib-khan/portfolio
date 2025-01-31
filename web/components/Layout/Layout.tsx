import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Fragment>
      {/* <BackgroundBeams /> */}
      <main className="max-w-5xl m-auto h-auto select-none">
        <Header />
        {props.children}
        <Footer />
      </main>
    </Fragment>
  );
}
