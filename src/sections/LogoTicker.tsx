"use client";
import acmelogo from "@/assets/logo-acme.png";
import quantumlogo from "@/assets/logo-quantum.png";
import echologo from "@/assets/logo-echo.png";
import celestiallogo from "@/assets/logo-celestial.png";
import pulselogo from "@/assets/logo-pulse.png";
import apexlogo from "@/assets/logo-apex.png";
import Image from "next/image";
import {motion,useScroll,useTransform,} from 'framer-motion'

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient{to_right,transparent,black,transparent}]">
          <motion.div className="flex gap-5 flex-none pr-14" animate={{
            translateX:"-50%"
          }}
          transition={{
            duration:20,
            repeat:Infinity,
            repeatType:'loop',
            ease:'linear'
          }}
          >
            <Image
              src={acmelogo}
              alt="acmelogo"
              className="logo-ticker-image"
              width={150}
            />
            <Image
              src={quantumlogo}
              alt="quantumlogo"
              className="logo-ticker-image"
              width={220}

            />
            <Image
              src={echologo}
              alt="echologo"
              className="logo-ticker-image"
            />
            <Image
              src={celestiallogo}
              alt="celestiallogo"
              className="logo-ticker-image"
            />
            <Image
              src={pulselogo}
              alt="pulselogo"
              className="logo-ticker-image"
            />
            <Image
              src={apexlogo}
              alt="apexlogo"
              className="logo-ticker-image"
            />

          <Image
              src={acmelogo}
              alt="acmelogo"
              className="logo-ticker-image"
              width={150}
            />
            <Image
              src={quantumlogo}
              alt="quantumlogo"
              className="logo-ticker-image"
              width={220}

            />
            <Image
              src={echologo}
              alt="echologo"
              className="logo-ticker-image"
            />
            <Image
              src={celestiallogo}
              alt="celestiallogo"
              className="logo-ticker-image"
            />
            <Image
              src={pulselogo}
              alt="pulselogo"
              className="logo-ticker-image"
            />
            <Image
              src={apexlogo}
              alt="apexlogo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
