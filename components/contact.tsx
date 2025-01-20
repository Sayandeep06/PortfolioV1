"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HiDownload } from "react-icons/hi";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 mb-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:deysayandeepdev@gmail.com">
          deysayandeepdev@gmail.com
        </a>{" "} or through ⬇️
      </p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <a
          className="bg-white p-5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/sayandeep-dey-2a0aba227/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Sayandeep06"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="bg-white p-5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://x.com/gitpushsayan"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </motion.section>
  );
}