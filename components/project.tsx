"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  linkUrl: string;
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkUrl,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const isOdd = index % 2 !== 0;

  return (
    <motion.a
    href={linkUrl}
    target="_blank"
    rel="noopener noreferrer"
    ref={ref} // Use the ref with the correct type
    style={{
      scale: scaleProgress,
      opacity: opacityProgress,
    }}
    className="group block mb-8"
  >

      <section
        className={`relative flex flex-col ${
          isOdd ? "md:flex-row" : "md:flex-row-reverse"
        } items-center bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out min-h-[300px] sm:h-[400px]`}
      >
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] overflow-hidden">
          <div className="relative h-full overflow-hidden group">
            <Image
              src={imageUrl}
              alt={`Project: ${title}`}
              quality={95}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="transition-transform duration-[3000ms] ease-in-out"
            />
          </div>
        </div>
        <div className="flex flex-col p-6 md:w-1/2">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-4 text-sm text-gray-300">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, tagIndex) => (
              <li
                className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full"
                key={tagIndex}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.a>
  );
}
