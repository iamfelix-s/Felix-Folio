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

const CustomLink = React.memo(({ href, title, className = "" }) => {
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
});

CustomLink.displayName = "CustomLink";

const CustomMobileLink = React.memo(({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button 
      className={`${className} w-[85%] px-5 py-3.5 rounded-full text-lg font-semibold transition-all duration-200 my-0.5
        ${isActive 
          ? "bg-dark/15 dark:bg-light/15 text-dark dark:text-light border border-dark/10 dark:border-light/10 shadow-sm" 
          : "text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light hover:bg-dark/5 dark:hover:bg-light/5"
        }`} 
      onClick={handleClick}
    >
      {title}
    </button>
  );
});

CustomMobileLink.displayName = "CustomMobileLink";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] glass-card px-8 py-3 rounded-full flex items-center justify-between z-50 font-medium shadow-lg dark:text-light transition-all duration-300 lg:w-[95%] lg:px-6 md:px-4">
      
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex z-50 p-2 -ml-2"
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

      {/* Floating Logo Badge */}
      <div className="absolute left-[50%] top-1/2 -translate-y-1/2 translate-x-[-50%] pointer-events-auto">
        <Logo />
      </div>
    </header>

    {/* Mobile Navigation Drawer */}
    {isOpen && (
      <motion.div
        className="w-[90%] max-w-[1200px] lg:w-[95%] flex justify-between items-center flex-col fixed top-24 left-1/2 -translate-x-1/2 py-8 bg-light/95 dark:bg-dark/95 text-dark dark:text-light rounded-2xl z-40 backdrop-blur-md shadow-2xl border border-dark/10 dark:border-white/10"
        initial={{ scale: 0.97, x: "-50%", y: -12, opacity: 0 }}
        animate={{ scale: 1, x: "-50%", y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-center flex-col gap-2 w-full">
          <CustomMobileLink toggle={handleClick} href="/" title="Home" />
          <CustomMobileLink toggle={handleClick} href="/about" title="About" />
          <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" />
          <CustomMobileLink toggle={handleClick} href="/contact" title="Contact" />
        </nav>
        
        <nav className="flex items-center justify-center gap-5 mt-6">
          <motion.a
            target={"_blank"}
            className="w-8 p-1 text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primaryDark"
            href="https://github.com/iamfelix-s"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            className="w-8 p-1 text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primaryDark"
            href="https://www.linkedin.com/in/paul-benjamin-felix-b8b481249/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-10 h-10 ease flex items-center justify-center rounded-full p-2 transition-all duration-300 shadow-sm
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
      </motion.div>
    )}
  </>
);
};

export default Navbar;
