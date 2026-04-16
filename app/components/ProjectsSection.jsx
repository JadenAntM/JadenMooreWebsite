"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "OCR Invoice Processing Platform",
    description:
      "Co-developed an AI-driven ETL pipeline at TFI International using Python and Azure AI, automating invoice processing for 30+ users and reducing manual entry by 90%. I optimized the MongoDB schema to improve query performance by 95% and engineered end-to-end control features for Python bidding bots. This included a real-time interface for clients to toggle automation and dynamically adjust bidding rates, replacing slow legacy workflows with scalable, user-governed systems..",
    tags: ["Python", "Flask", "Azure AI", "MongoDB", "Next.js", "React"],
    type: "Professional",
    featured: true,
    github: "https://github.com/JadenAntM",
    link: "#",
  },
  {
    title: "Load Bidding Automation",
    description:
      "Developed Python bots to fully automate TFI International’s load bidding process, replacing a manual, repetitive workflow with a high-speed automation. By drastically reducing response times for time-sensitive bids, the system enabled the company to secure 3x more loads in highly competitive markets. This automation saved Operations Coordinators 10+ hours per week and reduced annual costs by an estimated $25,000, allowing the team to focus on high-priority logistics rather than manual data entry.",
    tags: ["Python", "Selenium", "REST APIs", "CI/CD", "WindowsTask Scheduler"],
    type: "Professional",
    featured: false,
    github: "https://github.com/JadenAntM",
    link: "#",
  },
  {
    title: "AI Fitness Coach",
    description:
      "DeltaHacks XI hackathon project. Built with a team of four — a real-time computer vision fitness assistant that tracks workouts with 98% accuracy and delivers instant form feedback. Used MediaPipe to track 33 body landmarks with sub-50ms latency and OpenCV for live video overlay.",
    tags: ["Python", "OpenCV", "MediaPipe", "Flask", "JavaScript", "HTML/CSS"],
    type: "Hackathon",
    featured: false,
    github: "https://github.com/JadenAntM",
    link: "#",
  },
  {
    title: "Fish Species Classifier",
    description:
      "Convolutional neural network (CNN) that classifies fish species with 95% accuracy. Built and trained with TensorFlow and Keras, with data augmentation (rotation, flipping, colour adjustments) for robustness. Integrated Grad-CAM to visualize model decision-making, improving debugging efficiency by 30%.",
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Grad-CAM"],
    type: "Personal",
    featured: false,
    github: "https://github.com/JadenAntM",
    link: "#",
  },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const typeColors = {
  Professional:
    "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  Hackathon:
    "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  Personal:
    "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
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
            What I&apos;ve built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`bg-white dark:bg-[#1C1C1E] rounded-2xl p-7 shadow-sm border flex flex-col group hover:shadow-md transition-all duration-300 ${
                project.featured
                  ? "border-blue-200 dark:border-blue-800/50 ring-1 ring-blue-100 dark:ring-blue-900/30"
                  : "border-gray-100 dark:border-white/5"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    typeColors[project.type] ??
                    "bg-gray-100 dark:bg-[#2C2C2E] text-gray-600 dark:text-[#A1A1A6]"
                  }`}
                >
                  {project.type}
                  {project.featured && " · Featured"}
                </span>
                <div className="flex gap-3 text-[#6E6E73] dark:text-[#A1A1A6]">
                  {project.type !== "Professional" && project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
                      aria-label="View source on GitHub"
                    >
                      <GitHubIcon />
                    </Link>
                  )}
                  <Link
                    href={project.link}
                    className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalIcon />
                  </Link>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="https://github.com/JadenAntM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors font-medium"
          >
            <GitHubIcon />
            See more on GitHub →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
