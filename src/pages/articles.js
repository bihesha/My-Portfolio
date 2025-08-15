import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/article1.PNG'
import article2 from '../../public/images/articles/article2.PNG'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/images/articles/article3.jpg'
import article4 from '../../public/images/articles/r1.png'
import article5 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article6 from '../../public/images/articles/smooth scrolling in reactjs.png'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }
    
    return (
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='text-xl font-semibold capitalize hover:underline'>{title}</h2>
            <FramerImage ref={imgRef} style={{ x:x, y:y }} initial={{opacity:0}} whileInView={{opacity:1, transition:{duration: 0.2}}} src={img} alt={title} className='absolute z-10 hidden h-auto rounded-lg w-96 md:!hidden'/>
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li initial={{y:200}} whileInView={{y:0, transition: {duration:0.5, ease:'easeInOut'}}} viewport={{once:true}} className='relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid rounded-xl bg-light text-dark first:mt-0 border-dark dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <MovingImg title={title} img={img} link={link}/>
            <span className='pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link}) => {
    return(
        <li className='relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
            <Link href={link} target='_blank' className='inline-block w-full overflow-hidden rounded-lg cursor-pointer'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}} transition={{duration:0.2}} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </Link>

            <Link href={link} target='_blank'>
                <h2 className='my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='mb-2 text-sm'>{summary}</p>
            <span className='font-semibold text-primary dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Bihesha | Article Page</title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full mb-16 overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Words Can Change The World!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle
                        title='Sri Lanka Qualification Framework (SLQF) Level 1'
                        summary='This course includes Introduction to Computers and Information Technology, Hardware and Software,
                        Database Application etc.'
                        time='13th Octomber 2018 - 02nd February 2019'
                        link='/'    
                        img={article1}
                    />
                    <FeaturedArticle
                        title='Oracle SQL by Great Learning Academy'
                        summary='This certificate course will provide basic knowledge about Oracle SQL and clearly cover
                         how to use it.'  
                        time='August 2023'
                        link='https://www.mygreatlearning.com/certificate/KWGCUYZG'    
                        img={article2}
                    />
                </ul>
                <h2 className='w-full my-16 mt-32 text-4xl font-bold text-center'>Other Projects and Research Publications</h2>
                <ul>
                    <Article
                        title='Thulawa: Key-Aware Intra-Partition Parallelism extending Kafka Streams'
                        date='Jun 20, 2025 | Final Research'
                        link='https://drive.google.com/drive/folders/1L-z3dA0SgPVrFn0jjdyHocqXzW1Cw04D'
                        img={article3}
                    />
                    <Article
                        title='OptiVision: Glaucoma and Eye Diseases Detecting System'
                        date='Nov 29, 2023 | Research'
                        link='https://propulsiontechjournal.com/index.php/journal/article/view/2520'
                        img={article4}
                    />
                    <Article
                        title='CashInPawn: Build A Mobile Application for economic crisis of Sri Lanka.'
                        date='Kotlin | Firebase'
                        link='https://github.com/bihesha/CashInPawn'
                        img={article5}
                    />
                    <Article
                        title='Online Apartment System: Built an apartment platform with user-friendly design.'
                        date='HTML | CSS | PHP'
                        link='https://github.com/bihesha/OnlineApartmentSystem'
                        img={article6}
                    />
                    <Article
                        title='BRIT Games: BRIT Games is an online platform for purchasing, playing games, and receiving support.'
                        date='Java | CSS'
                        link='https://github.com/bihesha/BRIT-Games'
                        img={article6}
                    />
                    <Article
                        title='CleanCircle: This app was built to collect garbage as a garbage collector using Google Maps.'
                        date='Kotlin | Firebase'
                        link='https://github.com/bihesha/CleanCircle'
                        img={article6}
                    />
                    <Article
                        title='Cart.io: This Mobile application is made for inventory management.'
                        date='Kotlin | Firebase'
                        link='https://github.com/bihesha/EAD_Mobile_New'
                        img={article6}
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles