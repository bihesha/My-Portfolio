import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {

    return(
        <motion.div className='absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05}} initial={{x:0,y:0}} whileInView={{x:x, y:y, transition: {duration: 1.5}}} viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32'>Skills</h2>
        <div className='relative flex items-center justify-center w-full h-screen rounded-full bg-CircularLight dark:bg-CircularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-CircularLightLg dark:lg:bg-CircularDarkLg md:bg-circularLightMd dark:md:bg-circularDarkMd sm:bg-circularLightSm dark:sm:bg-circularDarkSm'>

            <motion.div className='flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                whileHover={{scale:1.05}}>
                Web
            </motion.div>

            <Skill name='HTML' x='-17vw' y='5vw'/>
            <Skill name='CSS' x='-1vw' y='-11vw'/>
            <Skill name='Javascript' x='0vw' y='7vw'/>
            <Skill name='ReactJS' x='17vw' y='5vw'/>
            <Skill name='NextJS' x='-15vw' y='-12vw'/>
            <Skill name='MongoDB' x='-13vw' y='12vw'/>
            <Skill name='Tailwind CSS' x='11vw' y='-4vw'/>
            <Skill name='Figma' x='25vw' y='0vw'/>
            <Skill name='Firebase' x='-25vw' y='0vw'/>
            <Skill name='ExpressJS' x='-10vw' y='-4vw'/>
            <Skill name='Java' x='13vw' y='12vw'/>
            <Skill name='Kotlin' x='0vw' y='18vw'/>
            <Skill name='NodeJS' x='15vw' y='-12vw'/>
            <Skill name='MySQL' x='-31vw' y='-13vw'/>
            <Skill name='Bootstrap' x='-31vw' y='13vw'/>
            <Skill name='Git' x='0vw' y='-18vw'/>
            <Skill name='Python' x='31vw' y='-13vw'/>
            <Skill name='Postman' x='31vw' y='13vw'/>
        </div>
    </>
  )
}

export default Skills