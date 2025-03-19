import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" cursor-pointer flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute "
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skils = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circles">
        <motion.div
          className=" cursor-pointer flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Laravel" x="15vw" y="-12vw" />
        <Skill name="PHP" x="0vw" y="-20vw" />
        <Skill name="MySQL" x="-15vw" y="20vw" />
        <Skill name="MongoDB" x="15vw" y="15vw" />
        <Skill name="Python" x="2vw" y="25vw" />
      </div>
    </>
  );
};

export default Skils;
