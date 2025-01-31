import { BentoGridDemo } from '@/components/BentoGridDemo'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Blogs | MD Shakib Khan - Web Developer",
  description:
    "This is a Blog Page By MD Shakib Khan",
};
export default function Blogs() {
  return (
    <Layout>
      <BentoGridDemo />
    </Layout>
  )
}
