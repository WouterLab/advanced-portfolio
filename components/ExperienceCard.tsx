/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='h-screen flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[700x] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#eda200]/80'>
      <p className='text-gray-500 uppercase tracking-[3px]'>Slide to see more</p>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='rounded-full h-32 w-32 object-center xl:w-[200px] xl:h-[200px] object-cover'
        src={urlFor(experience?.companyImage).url()}
        alt='fl'
      />
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.company}</p>
        <div className='flex flex-wrap sm:space-x-2 space-y-2 sm:space-y-0 my-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(technology.image).url()}
              alt='technology'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg h-80'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
