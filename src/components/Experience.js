import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({position, company, companyLink, time, address, work}) => {

    const ref = useRef(null);
    
    return (
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Lilcon reference = {ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
                <h3 className='text-2xl font-bold capitalize'>{position}</h3>
                <h4 className='font-bold'><a href={companyLink} target='_blank' className='capitalize text-primary'>@{company}</a></h4>
                <span className='font-medium capitalize text-dark/75'>
                    {time} | {address}
                </span>
                <p className='w-full font-medium'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
    return (
        <div className='my-64'>
            <h2 className='w-full mb-32 font-bold text-center text-8xl'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
                <ul className='flex flex-col items-start justify-between w-full ml-4'>
                    <Details    
                        position='Intern Software Engineer' company='Insurance Regulatory Commission of Sri Lanka'
                        time='2024' address='World Trade Center, Colombo'
                        work='Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience