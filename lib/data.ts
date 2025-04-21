import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nike from "@/public/nike.png";
import astralis from "@/public/Astralis.png";
import iot from "@/public/IOT.png"
import huddlex from "@/public/huddlex.png"
import pay from "@/public/pay.png"
import soundroom from "@/public/soundroom.png"
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
      "Full-stack developer working as a freelancer. My stack includes AWS, React, Express.js, JavaScript, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HuddleX",
    description:
      "A real-time collaboration platform with video conferencing, screen sharing, and team interaction.",
    tags: ["NextJs", "Clerk", "Shadcn"],
    imageUrl: huddlex,
    url: "https://huddlex.vercel.app/",
  },
  {
    title: "Smart Mirror",
    description:
      "The Typify Smart Mirror is a voice-controlled device . I led the project, winning the Technothon IoT Exposition.",
    tags: ["Node.js", "Raspberry Pi", "Google Assistant API", "Youtube API"],
    imageUrl: iot,
    url:"#projects",
  },
  {
    title: "SoundRoom",
    description:
      "Collaborative music streaming platform where users can add music videos, vote on them, and watch them together in a dynamic queue based on community upvotes",
    tags: ["NextJs", "NextAuth", "Shadcn"],
    imageUrl: soundroom,
    url: "https://soundroom-1.vercel.app/",
  },
  {
    title: "Web Store",
    description:
      "The Shoe Web Store is a sleek, responsive e-commerce platform built with React and Tailwind CSS and hosted on netlify, offering seamless navigation, modern UI design",
    tags: ["JavaScript", "React", "Tailwind"],
    imageUrl: nike,
    url: "https://shoewebstore.netlify.app/",
  },
  {
    title: "Astralis",
    description:
      "Astralis is a React app that showcases NASA’s Astronomy Picture of the Day (APOD) with daily updates and detailed insights.",
    tags: ["React", "JavaScript", "CSS", "Tailwind", "NASA APOD API"],
    imageUrl: astralis,
    url:"https://cosmosastralis.netlify.app/",
  },
  {
    title: "SwiftPay",
    description:
      "A digital payment platform that enables users to check balance, transfer money.",
    tags: ["Node.js", "React.js", "Render"],
    imageUrl: pay,
    url:"https://swiftpayv2.netlify.app/",
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Prisma",
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
