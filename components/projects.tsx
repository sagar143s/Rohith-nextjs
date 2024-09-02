"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-5 mb-28 max-w-[65rem]">
      <SectionHeading>My projects (Last 6 months)</SectionHeading>
      <div>
        {projectsData.map((project:any, index) => (
          <React.Fragment key={index}>
            <Project {...project}
            index={index}
            />
          </React.Fragment>
        ))}
      </div>
    </section>   
  );
}
