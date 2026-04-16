"use client";
import React from "react";
import { motion } from "framer-motion";

const coursework = [
  "OOP (Java)",
  "Data Structures & Algorithms",
  "Databases (SQL)",
  "Software Design",
  "Operating Systems",
  "Software Testing",
  "Software Development (C, Bash)",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Academic Background
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#F5F5F7] dark:bg-[#1C1C1E] rounded-3xl p-8 sm:p-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                McMaster University
              </h3>
              <p className="text-[#6E6E73] dark:text-[#A1A1A6] font-medium text-base">
                B.Eng Software Engineering, Co-op
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                Graduating April 2027
              </span>
              <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
                Hamilton, ON
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-6 border border-gray-100 dark:border-white/5"
            >
              <p className="text-xs font-bold text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-widest mb-1">
                Specialization GPA
              </p>
              <p className="text-4xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                3.8
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-6 border border-gray-100 dark:border-white/5"
            >
              <p className="text-xs font-bold text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-widest mb-1">
                Honours
              </p>
              <p className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight">
                Dean&apos;s Honors List
              </p>
              <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] mt-1">
                2023, 2024, 2025
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-bold text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-widest mb-4">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span
                  key={c}
                  className="text-sm bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] px-3 py-1.5 rounded-lg font-medium border border-gray-100 dark:border-white/5 shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
