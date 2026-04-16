"use client";
import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    emoji: "⌨️",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    emoji: "🧩",
    skills: [
      "React.js",
      "Next.js",
      "Flask",
      "Node.js",
      "Spring Boot",
      "TensorFlow",
      "Keras",
      "Selenium",
    ],
  },
  {
    category: "Databases & Cloud",
    emoji: "☁️",
    skills: ["MongoDB", "MySQL", "SQL", "AWS (S3, ECS)", "Azure AI"],
  },
  {
    category: "Tools & DevOps",
    emoji: "🔧",
    skills: [
      "Git",
      "Docker",
      "GitHub Actions",
      "pytest",
      "SonarQube",
      "Postman",
      "Linux",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-[#F5F5F7] dark:bg-[#1C1C1E] rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-[#2C2C2E] transition-colors duration-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{group.emoji}</span>
                <h3 className="text-xs font-bold text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] px-3 py-1.5 rounded-lg font-medium shadow-sm border border-gray-100 dark:border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
