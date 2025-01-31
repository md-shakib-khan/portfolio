import { ContactFormDemo } from "@/components/ContactFormDemo";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MD Shakib Khan - Web Developer",
  description:
    "Hey There, If you want to get in touch with me, Please feel free fill this form .",
};
export default function Contact() {
  return (
    <Layout>
      <ContactFormDemo />
    </Layout>
  );
}
