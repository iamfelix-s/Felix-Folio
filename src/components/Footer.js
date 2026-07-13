import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-dark/10 dark:border-white/5 py-12 mt-24 text-sm font-semibold tracking-wide">
      <div className="max-w-[1200px] mx-auto w-[90%] flex items-center justify-between lg:flex-col lg:gap-4 px-4 text-dark/50 dark:text-light/50">
        <span>{new Date().getFullYear()} &copy; Felix Folio. All rights reserved.</span>
        <div className="flex items-center gap-1.5">
          <span>Engineered by</span>
          <Link
            href="https://www.linkedin.com/in/paul-benjamin-felix-b8b481249/"
            target="_blank"
            className="text-dark dark:text-light hover:underline font-bold"
          >
            Felix
          </Link>
        </div>
        <Link href="/contact" className="hover:text-dark dark:hover:text-light transition-colors">
          Wanna recruit me?
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
