"use client"

import React from 'react'
import {motion} from 'framer-motion';
import { TypewriterEffectSmooth } from './typewriter-effect';

type Props = {}

const PlanHeader = (props: Props) => {

    
  const words = [
    {
      text: "A",
    },
    {
      text: "Plan",
    },
    {
      text: "For",
    },
    {
      text: "Everybody.",
      className: "text-amber-300 dark:text-amber-300",
    },
  ];

  return (
    <div>
          <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt- mt-24 md:mt-0  md:ml-56 mb-20 bg-gradient-to-br  from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
             <TypewriterEffectSmooth words={words} />
         
        </motion.h1>
    </div>
  )
}

export default PlanHeader