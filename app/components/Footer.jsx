import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
        <p>© 2025 Jaden Moore. Built with Next.js & Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/JadenAntM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/JadenAMoore/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
          >
            LinkedIn
          </Link>
          <span>McMaster University · B.Eng &apos;27</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
