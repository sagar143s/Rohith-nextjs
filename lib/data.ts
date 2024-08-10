import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaHtml5, FaReact, FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Bb from "../public/bb.png"
import Shopcin from '../public/shopcin.png'
import Bossini from '../public/bossini.png'
import Taseesrrealestate from "../public/taseesrealestate.png"


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
    title: "Web Developer",
    location: "Hashgate IT Technologies LLC",
    description:
      "HASHGATE IT Technologies LLC is an IT company based in Dubai. My role at HASHGATE involves working as a Shopify Developer, WordPress Developer, and specializing in React.js and Next.js. ",
    icon: React.createElement(FaWordpress),
    date: "01/2023 - Present",
  },
  {
    title: "Web developer",
    location: "Lux-Sar Properties",
    description:
      "At Luxsar Properties, a real estate company in Dubai, I developed their website, managed SEO, handled digital marketing on Facebook, Instagram, and Twitter, and performed basic server maintenance.",
    icon: React.createElement(FaWordpress),
    date: "03/2022 - 12/2022",
  },
  {
    title: "Front-End Developer",
    location: "Cream And Fudge",
    description:
      "At Cream And Fudge, an ice cream company, I worked as a web developer, creating their WordPress website and handling SEO.",
    icon: React.createElement(FaWordpress),
    date: "11/2019 - 02/2022",
  },
  {
    title: "Front-End Developer ",
    location: "Datacube Software Solutions",
    description:
      "I worked for a year at an IT company, where I built static websites using HTML, CSS, and JavaScript as a front-end developer.",
    icon: React.createElement(FaHtml5),
    date: "1/2019 - 11/2019",
  }
 
] as const;

export const projectsData = [
  {
    title: "Bull And Bearz",
    description:
      "In a three-month project, I developed a trading platform using React, Next.js, and Material UI, integrated Zoom API and Stripe, and managed data with MongoDB, Firebase, and Cloudinary. I handled version control with Git, deployed on Vercel, and used Courier for notifications.",
    tags: ["React", "Next.js", "Material UI", "Git","Zoom api’s", "MongoDB", "Firebase","Vercel","Courier", "Stripe","Cloudinary", ],
    imageUrl: Bb,
  },
  {
    title: "Taseesrealestate",
    description:
      "This is a real estate website for a Dubai-based company, built using WordPress.",
    tags: ["Wordpress", "PHP", "HTML", "CSS", "Javascript"],
    imageUrl: Taseesrrealestate,
  },
  {
    title: "Bossini",
    description:
    "This website is created using Shopify, employing the Liquid language . It serves as an e-commerce platform.",
    tags: ["Shopify", "HTML Liquid", "HTML", "CSS", "Javascript"],
    imageUrl: Bossini,
  },
  {
    title: "Shopcin",
    description:
      "This website is created using Shopify, employing the Liquid language and React Hydrogen. It serves as an e-commerce platform.",
    tags: ["Shopify","HTML Liquid", "React Hydrogen", "HTML", "CSS", "JavaScript"],
    imageUrl: Shopcin,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "php",
  "React",
  "Wordpress",
  "Shopify",
  "Next.js",
  "Node.js",
  "Git",
  "BitBucket",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
