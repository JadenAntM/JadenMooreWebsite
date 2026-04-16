"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { prefix } from "../utils/prefix";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const FRONT = { x: 0, y: 0, rotate: -4, scale: 1, opacity: 1 };
const BACK = { x: 38, y: 52, rotate: 6, scale: 0.92, opacity: 0.88 };

const photos = [
  {
    id: "professional",
    src: `${prefix}/NewProfessionalHeadshot.jpeg`,
    alt: "Jaden Moore — Professional",
    priority: true,
  },
  {
    id: "vacation",
    src: `${prefix}/VACArofessionalHeadshot.jpeg`,
    alt: "Jaden Moore",
    priority: false,
  },
];

const COOLDOWN_MS = 600;

const HeroSection = () => {
  const [front, setFront] = useState("professional");
  const lastSwap = useRef(0);

  const handleSwap = (id) => {
    const now = Date.now();
    if (now - lastSwap.current < COOLDOWN_MS) return;
    lastSwap.current = now;
    setFront(id);
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full mb-8 border border-blue-100 dark:border-blue-800/30">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Software Engineer Intern @ TFI International
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.05] tracking-tight mb-6"
            >
              Hi, I&apos;m
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Jaden Moore
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed mb-6 max-w-lg"
            >
              Software Engineering student at McMaster University. I automate
              workflows and ship full-stack products that create real impact.
            </motion.p>

            <motion.div
              {...fadeUp(0.25)}
              className="flex items-center gap-2 mb-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-purple-500 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
                Joining{" "}
                <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  RBC Capital Markets
                </span>{" "}
                · Halifax, NS · May 2026
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="px-6 py-3 bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-black text-sm font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                View My Work
              </Link>
              <a
                href={`${prefix}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-[#2C2C2E] transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Photo stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-[380px] sm:w-96 sm:h-[440px]">
              {photos.map((photo) => {
                const isFront = front === photo.id;
                return (
                  <motion.div
                    key={photo.id}
                    animate={{
                      x: isFront ? FRONT.x : BACK.x,
                      y: isFront ? FRONT.y : BACK.y,
                      rotate: isFront ? FRONT.rotate : BACK.rotate,
                      scale: isFront ? FRONT.scale : BACK.scale,
                      opacity: isFront ? FRONT.opacity : BACK.opacity,
                      zIndex: isFront ? 20 : 10,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    onMouseEnter={() => {
                      if (!isFront) handleSwap(photo.id);
                    }}
                    className="absolute top-0 left-0 w-56 sm:w-64 h-72 sm:h-80 bg-white p-2.5 rounded-2xl shadow-2xl cursor-pointer select-none"
                    style={{ zIndex: isFront ? 20 : 10 }}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover object-top"
                        priority={photo.priority}
                        draggable={false}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
