import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000});       
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Bihesha | About Page</title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Dedication Propels Objectives' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='font-medium text-justify'> Hi, I'm Bihesha Dilshan, I am currently studying software engineering at 
                            Sri Lanka Institute of Information Technology and would like to pursue further studies in that field. I always 
                            seek new and innovative ways to bring my clients' visions to life.
                        </p>
                        <p className='my-4 font-medium text-justify'> I believe that design is about more than just making things look pretty – it's about solving problems and 
                            creating intuitive, enjoyable experiences for users. 
                        </p>
                        <p className='font-medium text-justify'> Whether I'm working on a website, mobile app, I bring my commitment to design excellence and user-centered thinking to 
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>

                    <div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt='Codebucks' className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
                    </div>

                    <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={9}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={2}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>On-going projects</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={2}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                        </div>
                    </div>
                </div>

            <Skills/>
            <Experience/>
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about