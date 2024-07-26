import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({ type, time, place, info }) => {

    const ref = useRef(null);
    
    return (
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Lilcon reference = {ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
                <h3 className='text-2xl font-bold capitalize'>{type}</h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75' >
                    {time} | {place}
                </span>
                <p className='w-full font-medium'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
    return (
        <div className='my-64'>
            <h2 className='w-full mb-32 font-bold text-center text-8xl'>Education</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
                <ul className='flex flex-col items-start justify-between w-full ml-4'>
                    <Details    
                        type='Bsc (Hons) In Information Technology Specializing In Software Engineering'
                        time='2021 Present' place='SLIIT - Malabe'
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence.'
                    />
                    <Details    
                        type='Advanced Level in Physical Science - CCS'
                        time='2015' place='Dharmapala Maha Vidyalaya - Kottawa'
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence.'
                    />
                    <Details    
                        type='Ordinary Level in Sinhala Medium - A6S, 3CS'
                        time='2019' place='Dharmapala Maha Vidyalaya - Kottawa'
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education