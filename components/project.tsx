"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Define the type for the project props
type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  linkUrl: string;  // <-- Add linkUrl to the type
};

// Project component definition
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkUrl,  // <-- Include linkUrl in the props
}: ProjectProps) {
  // Create a reference for the scroll animation
  const ref = useRef<HTMLDivElement>(null);

  // Use Framer Motion's useScroll to track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // Transform scroll progress into scale and opacity values
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.a
      href={linkUrl}  // <-- Add linkUrl to href
      target="_blank"  // <-- Open the link in a new tab
      rel="noopener noreferrer"  // <-- Security for external links
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 block"  // <-- Use block to make the whole card clickable
    >
      <section className="relative bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col sm:flex-row">
        <div className="flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-10 sm:pt-10 sm:w-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag: any, index: any) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`Project: ${title}`}
          quality={95}
          className="hidden sm:block sm:w-[50%] sm:object-cover"
        />
      </section>
    </motion.a>
  );
}
