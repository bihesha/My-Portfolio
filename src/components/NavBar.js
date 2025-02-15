import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, InstagramIcon, GithubIcon, LinkedInIcon, FacebookIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

// Window links
const CustomLink = ({href, title, className=''}) => {
    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 dark:bg-light
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

// mobile links
const CustomMobileLink = ({href, title, className='', toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 dark:bg-dark
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <header className='relative flex items-center justify-between w-full px-32 py-8 font-medium sm:px-12 dark:text-light'>

            <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            
            {/* window menu */}
            <div className='flex items-center justify-between w-full lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4'/>
                    <CustomLink href='/about' title='About' className='mx-4'/>
                    <CustomLink href='/projects' title='Projects' className='mx-4'/>
                    <CustomLink href='/articles' title='Articles' className='ml-4'/>
                </nav>
                <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                    <Logo/>
                </div>
                <nav className='flex flex-wrap items-center justify-center'>
                    <motion.a href='https://x.com/BiheshaD' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3 rounded-full dark:bg-light'>
                        <TwitterIcon/>
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/bihesha-dilshan-209305216/' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'>
                        <LinkedInIcon/>
                    </motion.a>
                    <motion.a href='https://github.com/bihesha' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'>
                        <GithubIcon/>
                    </motion.a>
                    <motion.a href='https://www.facebook.com/bihesha.dilshan.3' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 rounded-full bg-light'>
                        <FacebookIcon/>
                    </motion.a>
                    <motion.a href='https://www.instagram.com/_bihesha_99/' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3 rounded-lg '>
                        <InstagramIcon/>
                    </motion.a>

                    {/* dark mode */}
                    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`flex items-center justify-center p-1 ml-4 rounded-full ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                        {mode === 'dark' ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'} />}
                    </button>
                </nav>
            </div>

            {/* mobile menu */}
            { isOpen ? 
                <motion.div 
                    initial={{scale:0, opacity:0, x: '-50%', y: '-50%'}} animate={{scale:1, opacity:1}}
                    className='flex items-center justify-between min-w-[70vw] flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                    <nav className='flex flex-col items-center justify-center'>
                        <CustomMobileLink href='/' title='Home' className='' toggle={handleClick}/>
                        <CustomMobileLink href='/about' title='About' className='' toggle={handleClick}/>
                        <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick}/>
                        <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleClick}/>
                    </nav>

                    <nav className='flex flex-wrap items-center justify-center mt-2'>
                        <motion.a href='https://x.com/BiheshaD' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3 rounded-full sm:mx-1 bg-light dark:bg-light'>
                            <TwitterIcon/>
                        </motion.a>
                        <motion.a href='https://www.linkedin.com/in/bihesha-dilshan-209305216/' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'>
                            <LinkedInIcon/>
                        </motion.a>
                        <motion.a href='https://github.com/bihesha' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 rounded-full sm:mx-1 bg-light dark:bg-dark'>
                            <GithubIcon/>
                        </motion.a>
                        <motion.a href='https://www.facebook.com/bihesha.dilshan.3' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 rounded-full sm:mx-1 bg-light'>
                            <FacebookIcon/>
                        </motion.a>
                        <motion.a href='https://www.instagram.com/_bihesha_99/' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3 sm:mx-1'>
                            <InstagramIcon/>
                        </motion.a>

                        {/* dark mode */}
                        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`flex items-center justify-center p-1 ml-4 sm:mx-1 rounded-full ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                            {mode === 'dark' ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'} />}
                        </button>
                    </nav>
                </motion.div> : null
            }

            {/* Logo */}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>
        </header>
    )
}

export default NavBar