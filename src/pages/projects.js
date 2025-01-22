import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Edu1 from '../../public/images/projects/edu1.png'
import Edu2 from '../../public/images/projects/edu2.png'
import Edu3 from '../../public/images/projects/edu3.png'
import Edu4 from '../../public/images/projects/edu4.png'
import Edu5 from '../../public/images/projects/edu5.PNG'
import fr1 from '../../public/images/projects/fr1.png'
import fr2 from '../../public/images/projects/fr2.png'
import fr3 from '../../public/images/projects/fr3.png'
import mr1 from '../../public/images/projects/mr1.png'
import mr2 from '../../public/images/projects/mr2.png'
import mr3 from '../../public/images/projects/mr3.png'
import ov1 from '../../public/images/projects/ov1.png'
import ov2 from '../../public/images/projects/ov2.png'
import ov3 from '../../public/images/projects/ov3.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

// Carousel Popup Component
const CarouselPopup = ({ isOpen, onClose, images, currentIndex }) => {
  const [index, setIndex] = useState(currentIndex || 0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return isOpen ? (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative p-10 bg-white rounded-lg dark:bg-dark">
        <button
          onClick={onClose}
          className="absolute text-4xl font-bold text-black top-2 right-2 dark:text-white"
        >
          &times;
        </button>
        <div className="relative flex items-center justify-center">
          <button
            className="absolute left-0 p-2 text-white bg-black rounded-full"
            onClick={prevImage}
          >
            &#8592;
          </button>
          <motion.div className="overflow-hidden rounded-lg">
            <Image src={images[index]} alt={`Carousel Image ${index + 1}`} width={600} height={400} />
          </motion.div>
          <button
            className="absolute right-0 p-2 text-white bg-black rounded-full"
            onClick={nextImage}
          >
            &#8594;
          </button>
        </div>
      </div>
    </motion.div>
  ) : null;
};

// FeaturedProject Component
const FeaturedProject = ({ type, title, summary, img, link, github, images, onImageClick }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <button onClick={() => onImageClick(images)} className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </button>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-justify text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="flex items-center mt-12">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold border rounded-lg bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
          <button
            onClick={() => onImageClick(images)}
            className="ml-4 text-lg font-semibold underline text-primary dark:text-primaryDark sm:text-base"
          >
            See More
          </button>
        </div>
      </div>
    </article>
  );
};

// Project Component
const Project = ({ title, type, img, link, github, images, onImageClick }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <button onClick={() => onImageClick(images)} className="w-full overflow-hidden rounded-lg cursor-pointer">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
      </button>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl">{title}</h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <button
            onClick={() => onImageClick(images)}
            className="text-lg font-semibold underline mr-80 text-primary dark:text-primaryDark md:text-base"
          >
            See More
          </button>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupImages, setPopupImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (images, index = 0) => {
    setPopupImages(images);
    setCurrentIndex(index);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
        <Head>
            <title>Bihesha | Projects Page</title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full mb-16 dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'> 

                  <div className='col-span-12'>
                    <FeaturedProject
                      title='Manage - Educational Platform for Online Learning'
                      img={Edu1}
                      summary='A full Backend and Frontend implementation of Manage which is a website where users can login as students or 
                      instructors. The students can view all the courses that are submitted by the instructors, they can enroll themselves 
                      to the course and for that they need to make the payment via Stripe. Once the payment is done, they will enrolled to 
                      the course after administrator approval. '
                      link='https://github.com/bihesha/DS-Microservices-Project'
                      github='https://github.com/bihesha/DS-Microservices-Project'
                      type='MERN Stack | Tailwind CSS | Material UI'
                      images={[Edu1, Edu2, Edu3]}
                      onImageClick={handleImageClick}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                    <Project
                      title='FitCrib - Fitness Management System'
                      img={Edu2}
                      link='https://github.com/bihesha/FITCRIB'
                      github='https://github.com/bihesha/FITCRIB'
                      type='MERN Stack | Python | Postman'
                      images={[fr1, fr2, fr3]}
                      onImageClick={handleImageClick}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                    <Project
                      title='MBKT Construction Management System'
                      img={Edu3}
                      link='https://github.com/janchilling/Construction-CSSE'
                      github='https://github.com/janchilling/Construction-CSSE'
                      type='MERN Stack | React-Native'
                      images={[mr1, mr2, mr3]}
                      onImageClick={handleImageClick}
                    />
                  </div>

                  <div className='col-span-12'>
                    <FeaturedProject
                      title='OptiVision - Eye Care System'
                      img={Edu4}
                      summary='OptiVision is an eye care system for patients and opticians. It offers vision tests, glaucoma detection 
                      via AI, appointment scheduling, and digital prescriptions. Opticians can analyze cataract scans and prescribe treatments,
                       while patients can take quizzes and book appointments.'
                      link='https://github.com/bihesha/OptiVisionSPM'
                      github='https://github.com/bihesha/OptiVisionSPM'
                      type='MERN Stack | Python'
                      images={[ov1, ov2, ov3]}
                      onImageClick={handleImageClick}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                    <Project
                      title='Galaxia - Astronomy Management System'
                      img={Edu5}
                      link='https://galaxia-explorers.netlify.app/'
                      github='https://github.com/bihesha/Galaxia'
                      type='React.js | NASA API | Tailwind CSS'
                      images={[Edu2, Edu4, Edu1]}
                      onImageClick={handleImageClick}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                    <Project
                      title='E-commerce Platform - Web Application Side'
                      img={project1}
                      link='/'
                      github='https://github.com/ManulaGunatilleke/EAD-FE'
                      type='MERN Stack'
                      images={[Edu2, Edu4, Edu1]}
                      onImageClick={handleImageClick}
                    />
                  </div>

                </div>
            </Layout>
        </main>
      <CarouselPopup isOpen={popupOpen} onClose={handleClosePopup} images={popupImages} currentIndex={currentIndex} />
    </>
  )
}

export default projects