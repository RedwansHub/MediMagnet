'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { use, useRef } from 'react'

type Props = {
    children: React.ReactNode,
    delay?: any | 0.3
}

export const Appear = ({ children }: Props) => {

    const target = useRef(null)
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ['start 0.8', 'start 0.3']
    })

  return (
    <motion.div ref={target}>
        <motion.div 
            style={{ opacity: scrollYProgress }} >
            {children}
        </motion.div>
    </motion.div>
  )
}
export const AppearQuick = ({ children , delay}: Props) => {

    const end = delay == 0.5 ? 'start 0.7' : 'start 0.5'

    const target = useRef(null)
    {/* Start here */}
    const { scrollYProgress } = useScroll({
      target: target,
      offset: ['start 0.9', end]
    })
    {/* Start End */}

  return (
    <motion.div ref={target}>
        <motion.div 
            style={{ opacity: scrollYProgress }} >
            {children}
        </motion.div>
    </motion.div>
  )
}