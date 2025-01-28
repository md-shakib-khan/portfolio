import { Fragment } from "react";
import Header from "../Header/Header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Fragment>
      <main className="max-w-5xl m-auto h-auto">
        <Header />
        {props.children}
      </main>
    </Fragment>
  );
}
