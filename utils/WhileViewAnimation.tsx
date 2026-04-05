'use client'

import { motion } from "motion/react"
import { ReactNode } from "react"

type Props = {
    children:ReactNode;
}

export default function WhileViewAnimation({children}:Props) {
  return (
    <>
        <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.25,delay:0.1}}} >
            {children}
        </motion.div>
    </>
  )
}
