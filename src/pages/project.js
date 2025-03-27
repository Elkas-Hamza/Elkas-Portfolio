import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full felx items-center justify-between rounded-3xl border border-dark bg-light shadow-2xl p-15">
      Featured project
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        Visit Project
      </div>
    </article>
  );
};

const project = () => {
  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="description" content="Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Innovation Drives Creation!" />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">{/* <FeaturedProject /> */}</div>
            <div className="col-span-6">Project 1</div>
            <div className="col-span-6">Project 2</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
