import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link}) => {
    return(
        <li className='relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
            <Link href={link} target='_blank' className='inline-block w-full overflow-hidden rounded-lg cursor-pointer'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}} transition={{duration:0.2}}/>
            </Link>

            <Link href={link} target='_blank'>
                <h2 className='my-2 text-2xl font-bold capitalize hover:underline'>{title}</h2>
            </Link>
            <p className='mb-2 text-sm'>{summary}</p>
            <span className='font-semibold text-primary'>{time}</span>
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
        <main className='flex flex-col items-center justify-center w-full mb-16 overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text='Words Can Change The World!' className='mb-16'/>
                <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'  
                        time='9 min read'
                        link='/'    
                        img={article1}
                    />
                    <FeaturedArticle
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'  
                        time='9 min read'
                        link='/'    
                        img={article2}
                    />
                </ul>
                <h2 className='w-full my-16 text-4xl font-bold text-center'>All Articles</h2>
            </Layout>
        </main>
    </>
  )
}

export default articles