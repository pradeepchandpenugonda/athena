"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import Image from "next/image";
import tubeImage from "@/assets/tube.png";
import {motion,useScroll,useTransform,} from 'framer-motion'
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} =useScroll({
    target:sectionRef,
    offset:['start end','end start']
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5 ">
            A more offective way to track progress
          </h2>
          <p className="section-description mt-5">
            Lovepik provides free editable Doctor Coronary Virus Coronavirus
            Vaccine Cartoon Woman Vaccination Coronavirus Vaccine Pharaphic
            Coronavirus Vaccine Needle ..
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="productIMgae" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramidImage"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY:translateY
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tubeImage"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY:translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};