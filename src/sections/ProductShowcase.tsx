"use client";
// assets
import ProductImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

// requirements
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
export const ProductShowcase = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="bg-gradient-to-b from-[#ffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading ">
          <div className="flex justify-center">
            <div className="badge ">Boost your productivity</div>
          </div>

          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>

          <p className=" section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <motion.img
            height={262}
            width={262}
            src={pyramidImage.src}
            alt="Product Image"
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            height={246}
            width={246}
            src={tubeImage.src}
            alt="tube Image"
            style={{
              translateY: translateY,
            }}
            className="hidden md:block absolute  bottom-24 -left-36 "
          />
        </div>
      </div>
    </section>
  );
};
