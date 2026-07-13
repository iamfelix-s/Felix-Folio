import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link 
      href={href} 
      className={`${className} px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
        ${isActive 
          ? "bg-dark/10 dark:bg-light/10 text-dark dark:text-light shadow-sm border border-dark/5 dark:border-light/10" 
          : "text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light hover:bg-dark/5 dark:hover:bg-light/5"
        }`}
    >
      {title}
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button 
      className={`${className} w-[80%] px-4 py-2.5 rounded-full text-base font-semibold transition-all duration-200 my-1
        ${isActive 
          ? "bg-light/20 dark:bg-dark/20 text-light dark:text-dark border border-light/10 dark:border-dark/10 shadow-sm" 
          : "text-light/70 dark:text-dark/70 hover:text-light dark:hover:text-dark hover:bg-light/5 dark:hover:bg-dark/5"
        }`} 
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] glass-card px-8 py-3 rounded-full flex items-center justify-between z-50 font-medium shadow-lg dark:text-light transition-all duration-300 lg:w-[95%] lg:px-6 md:px-4">
      
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex z-50"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'} my-0.5`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center gap-2">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contact" title="Contact" />
        </nav>
        
        <nav className="flex items-center justify-center flex-wrap gap-4">
          <motion.a
            target={"_blank"}
            className="w-6 text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primaryDark"
            href="https://github.com/iamfelix-s"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            className="w-6 text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primaryDark"
            href="https://www.linkedin.com/in/paul-benjamin-felix-b8b481249/"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-8 h-8 ease flex items-center justify-center rounded-full p-1.5 transition-all duration-300 shadow-sm
              ${mode === "light" ? "bg-dark text-light hover:bg-dark/80" : "bg-light text-dark hover:bg-light/85"}
              `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <motion.div
          className="min-w-[75vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 bg-dark/95 dark:bg-light/95 rounded-2xl z-40 backdrop-blur-md shadow-2xl border border-white/10 dark:border-black/5"
          initial={{ scale: 0.8, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <nav className="flex items-center justify-center flex-col gap-2 w-full">
            <CustomMobileLink toggle={handleClick} href="/" title="Home" />
            <CustomMobileLink toggle={handleClick} href="/about" title="About" />
            <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" />
            <CustomMobileLink toggle={handleClick} href="/contact" title="Contact" />
          </nav>
          
          <nav className="flex items-center justify-center gap-4 mt-6">
            <motion.a
              target={"_blank"}
              className="w-6 bg-light rounded-full dark:bg-dark text-dark dark:text-light"
              href="https://github.com/iamfelix-s"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my github profile"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              target={"_blank"}
              className="w-6"
              href="https://www.linkedin.com/in/paul-benjamin-felix-b8b481249/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my linkedin profile"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-8 h-8 ease flex items-center justify-center rounded-full p-1.5 
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      {/* Floating Logo Badge */}
      <div className="absolute left-[50%] top-1/2 -translate-y-1/2 translate-x-[-50%] pointer-events-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
