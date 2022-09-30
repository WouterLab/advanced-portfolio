import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo
};

export default function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-full sm:h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='mb-4 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src={urlFor(pageInfo?.profilePic).url()}
        alt='about-picture'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#eda200]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
