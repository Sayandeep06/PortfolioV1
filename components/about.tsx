"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Highly motivated Software engineer with a versatile array of skills, currently pursuing a B.Tech degree in{" "}
        <span className="font-medium">Computer Science</span>. I dabbled across various domains but found my passion in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">Solving problems and finding innovative software solutions </span> is what motivates me. I love the
        thrill of a complex solution be it LeetCode or learning a new language/framework to implement something new. 
        Among all the programming languages I know, <span className="font-medium">Java</span> is where my expertise truly lies, especially when it comes to complex problem-solving in DSA.
        However for development, I focus on
        {" "} 
        <span className="font-medium">
          Nextjs with Postgres and some other frameworks/libraries like React, Express.js, Node.js.
        </span>
        . I am familiar with TypeScript, Tailwind and Terraform. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football, supporting my football club. I enjoy{" "}
        <span className="font-medium">exploring new things</span>. I am also
        quite interested in {" "}
        <span className="font-medium">history and philosophy.</span>
      </p>
    </motion.section>
  );
}
