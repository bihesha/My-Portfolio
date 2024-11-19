import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 left-0 right-0 z-30 w-screen h-screen bg-secondary dark:bg-secondaryDark'
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 0 0, 100% 100%, 100% 100%)' }}
            exit={{ clipPath: ['polygon(0 0, 0 0, 100% 100%, 100% 100%)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'] }}
            transition={{ duration: 0.8, ease: 'easeInOut' }} />

        <motion.div className='fixed top-0 bottom-0 left-0 right-0 z-20 w-screen h-screen bg-nextsecondary dark:bg-nextsecondaryDark'
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 0 0, 100% 100%, 100% 100%)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }} />

        <motion.div className='fixed top-0 bottom-0 left-0 right-0 z-10 w-screen h-screen bg-lastsecondary dark:bg-lastsecondaryDark'
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 0 0, 100% 100%, 100% 100%)' }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }} />
    </>
  )
}

export default TransitionEffect