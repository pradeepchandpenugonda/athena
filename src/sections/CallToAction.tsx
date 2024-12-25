"use client";
import ArrowRight from '@/assets/arrow-right.svg'
import startImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image'
import {motion,useScroll,useTransform,} from 'framer-motion'
import { useRef } from 'react';

export const CallToAction = () => {
 const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target:heroRef,
    offset:['start end','end start']
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150]);

  return <section ref={heroRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className='section-heading relative'>
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">
          Celebrate the joy of accomplisment with an app designed to track yourself 
          progress and motivate your efforts
        </p>
        <motion.img   style={{
                translateY:translateY
              }}
              transition={{
                repeat:Infinity,
                repeatType:'mirror',
                duration:3,
                ease:'easeInOut'
              }} src={startImage.src} alt="start Image" width={360} className="absolute -left-[350px] -top-[137px]"
        />
        <motion.img style={{
                translateY:translateY
              }}
              transition={{
                repeat:Infinity,
                repeatType:'mirror',
                duration:3,
                ease:'easeInOut'
              }}  src={springImage.src} alt="start Image" width={360} className="absolute -right-[331px] -top-[19px]"
        />
      </div>
  
      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>Learn more</span>
           <ArrowRight className="h-5 w-5"/>
          </button>
      </div>
    </div>
  </section>;
};
