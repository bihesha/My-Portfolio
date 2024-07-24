import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {

    return(
        <motion.div className='absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark'
            whileHover={{scale:1.05}} initial={{x:0,y:0}} whileInView={{x:x, y:y}} transition={{duration: 1.5}} viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='w-full mt-64 font-bold text-center text-8xl'>Skills</h2>
        <div className='relative flex items-center justify-center w-full h-screen rounded-full bg-CircularLight'>

            <motion.div className='flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark'
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