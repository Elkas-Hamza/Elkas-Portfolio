import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        whileHover={{
          scale: 1.1,
          rotate: 360,
          backgroundColor: "#43124a",
          transition: { duration: 0.5 },
        }}
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
      >
        EH
      </MotionLink>
    </div>
  );
};

export default Logo;
