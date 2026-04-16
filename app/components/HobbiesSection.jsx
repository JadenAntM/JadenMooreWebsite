"use client";
import React from "react";
import { motion } from "framer-motion";

const hobbies = [
  {
    emoji: "🎣",
    title: "Fishing",
    description:
      "Early mornings on the water are the best way to reset. Helps clear my head and relax.",
    color: "from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10",
    accent: "text-sky-600 dark:text-sky-400",
    border: "border-sky-100 dark:border-sky-900/30",
  },
  {
    emoji: "⛳",
    title: "Golf",
    description:
      "Nothing beats a round of golf with friends during the summer.",
    color:
      "from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10",
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-100 dark:border-emerald-900/30",
  },
  {
    emoji: "📈",
    title: "Finance & Markets",
    description:
      "I love reading about markets, macro-economics, and investing. Joining the Quantitative Technology Services team at RBC felt like a natural fit.",
    color:
      "from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10",
    accent: "text-violet-600 dark:text-violet-400",
    border: "border-violet-100 dark:border-violet-900/30",
  },
];

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-24 px-6 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Outside of Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
            Hobbies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`bg-gradient-to-br ${hobby.color} rounded-3xl p-8 border ${hobby.border} flex flex-col gap-5`}
            >
              <span className="text-5xl">{hobby.emoji}</span>
              <div>
                <h3 className={`text-xl font-bold ${hobby.accent} mb-2`}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
