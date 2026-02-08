

import React from 'react'
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link";
import { pageInfo } from '../data/pageInfo';

function Hero() {
  
  
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-40'>
        <BackgroundCircles />
        {Object.keys(pageInfo).length !==0 &&
        <img
        src={pageInfo?.heroImage}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        alt=''
        />}
        
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                &nbsp;{pageInfo.role}
            </h2>
            <h1 className='text-l lg:text-2xl font-semibold px-10'>
                <span className='mr-3'>Healthcare | Lifescience | SAFe | BTECH | MBA | Investor</span>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#education">
                    <button className='heroButton'>Education</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero