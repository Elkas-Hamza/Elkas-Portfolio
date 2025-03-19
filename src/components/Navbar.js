import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark 
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mr-4" />
          <CustomLink href="/project" title={"Project"} className="mr-4" />
          <CustomLink href="/articles" title={"Articles"} className="ml-4" />
        </nav>
        <div className="adsolute left-[50%] top-2  translate-x-[-50%]">
          <Logo />
        </div>
        <nav className="flex items-center">
          <motion.a
            href="https://linkedin.com/in/hamza-el-kasmi"
            target={"_blank"}
            whileHover={{
              scale: 1.2,
              y: -5,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="w-6 mx-2"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://x.com/Elkas_hamza"
            target={"_blank"}
            whileHover={{
              scale: 1.2,
              y: -5,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="w-6 mx-2"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Elkas-Hamza"
            target={"_blank"}
            whileHover={{
              scale: 1.2,
              y: -5,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="w-6 ml-2"
          >
            <GithubIcon />
          </motion.a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
