/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-full md:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#eda200]/80'>
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-full sm:h-screen'>
            <motion.img
              className='mx-auto object-cover xl:w-[600px] md:w-96 sm:w-56'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt='project'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#eda200]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className='grid justify-items-center grid-cols-2 sm:flex items-center sm:space-x-2 sm:justify-center'>
                {project?.technologies.map((technology) => (
                  <a
                    key={technology._id}
                    href={project.linkToBuild}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      className='h-10 w-10'
                      src={urlFor(technology.image).url()}
                      alt='tech'
                    />
                  </a>
                ))}
              </div>

              <p className='text-lg text-center md:text-left'>
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#eda200]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}
