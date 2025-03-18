import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="flex justify-between items-center py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built by &nbsp;
          <Link className="underline underline-offset-2" href="/">
            EL KASMI hamza
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
