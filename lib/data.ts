import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nike from "@/public/nike.png";
import astralis from "@/public/Astralis.png";
import todo from "@/public/ss.png";
import iot from "@/public/IOT.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pursuing engineering in CS",
    location: "Kolkata, WB",
    description:
      "Started my under grad in 2021, learnt a lot of core cs topics that helped me translate the theoritical knowledge I gained into impactful solutions",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Cloud Development and Solutions Architecting",
    location: "Kolkata, WB",
    description:
      "I have deep-dived into cloud computing and solutions architecture, particularly within AWS, where I’ve gained hands-on experience. Additionally, I have explored DevOps concepts, utilizing scripting in Terraform to manage infrastructure. I’ve applied these skills through personal projects to solidify my understanding and improve my technical proficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Kolkata, WB",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Express.js, JavaScript, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Web Store",
    description:
      "The Shoe Web Store is a sleek, responsive e-commerce platform built with React and Tailwind CSS and hosted on netlify, offering seamless navigation, modern UI design",
    tags: ["JavaScript", "React", "Tailwind"],
    imageUrl: nike,
  },
  {
    title: "Smart Mirror",
    description:
      "The Typify Smart Mirror is a voice-controlled device . I led the project, winning the Technothon IoT Exposition.",
    tags: ["Node.js", "Raspberry Pi", "Google Assistant API", "Youtube API"],
    imageUrl: iot,
  },
  {
    title: "TO-DO app",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Express.js", "MongoDB", "CSS", "JWT"],
    imageUrl: todo,
  },
  {
    title: "Astralis",
    description:
      "Astralis is a React app that showcases NASA’s Astronomy Picture of the Day (APOD) with daily updates and detailed insights.",
    tags: ["React", "JavaScript", "CSS", "Tailwind", "NASA APOD API"],
    imageUrl: astralis,
  
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "AWS",
  "MongoDB",
  "Terraform",
  "Express",
  "Bash",
] as const;
