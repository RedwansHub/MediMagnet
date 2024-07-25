'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { use, useRef } from 'react'

type Props = {
    children: React.ReactNode
}

export const Expand = ({ children }: Props) => {

    const target = useRef(null)
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ['start 0.6', 'start 0.4']
    })
    const scale = useTransform(scrollYProgress, [0,1] , [0.5 , 1])

  return (
    <motion.div ref={target}>
        <motion.div style={{ scale: scale }} >
            {children}
        </motion.div>
    </motion.div>
  )
}