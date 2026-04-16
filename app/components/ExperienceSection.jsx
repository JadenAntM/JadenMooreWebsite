"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "RBC Capital Markets",
    role: "Software Developer Intern",
    period: "May 2026 – August 2026",
    location: "Halifax, NS",
    type: "Upcoming",
    description: [
      "Joining the Quantitative Technology Services division (Equity Derivatives)",
      "Will work on software tooling and infrastructure for capital markets operations",
    ],
    stack: [],
  },
  {
    company: "TFI International",
    role: "Software Engineer Intern",
    period: "April 2025 – April 2026",
    location: "Toronto, ON",
    type: "Current",
    description: [
      "Automated load bidding systems via Python bots, saving Operations Coordinators 10 hrs/week and an estimated $25,000 annually",
      "Built an ETL pipeline for a company-wide OCR platform (3-person team) using Azure AI — serves 30+ daily users and cut manual data entry by ~90%",
      "Engineered the full-stack interface with Next.js / React communicating with a Flask backend; data persisted in MongoDB",
      "Overhauled the core MongoDB schema and Python data layer, improving query performance by over 95%",
      "Built an internal web app integrated with RESTful APIs from two core systems, automating data sync and saving 8+ hrs/week",
      "Tested with pytest, Selenium, and GitHub Actions CI/CD pipelines",
    ],
    stack: [
      "Python",
      "Flask",
      "Next.js",
      "React",
      "MongoDB",
      "NoSQL",
      "Azure AI",
      "Selenium",
      "pytest",
      "GitHub Actions",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#F5F5F7] dark:bg-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-[#6E6E73] dark:text-[#A1A1A6] font-medium text-sm">
                    {exp.role}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${
                    exp.type === "Current"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
                  }`}
                >
                  {exp.type}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#6E6E73] dark:text-[#A1A1A6] mb-6">
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5"
                    />
                  </svg>
                  {exp.period}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
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
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {exp.description.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed"
                  >
                    <span className="text-blue-400 mt-0.5 shrink-0 font-bold">
                      ↗
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {exp.stack.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50 dark:border-white/5">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] px-2.5 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
