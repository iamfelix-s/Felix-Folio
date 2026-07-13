import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-[#fafafa] dark:bg-[#040405] text-[#0f0f11] dark:text-[#f4f4f5] w-full min-h-screen h-full relative overflow-hidden transition-colors duration-300`}
      >
        {/* Background Grid Mesh */}
        <div className="absolute inset-0 editorial-grid opacity-30 dark:opacity-[0.15] pointer-events-none z-0" />
        
        {/* Subtle Ambient Glows */}
        <div className="ambient-glow top-[10%] left-[5%] opacity-40 dark:opacity-60 pointer-events-none" />
        <div 
          className="ambient-glow bottom-[10%] right-[5%] opacity-40 dark:opacity-60 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, rgba(99, 102, 241, 0.01) 50%, transparent 100%)' }} 
        />

        <div className="relative z-10 flex flex-col justify-between min-h-screen w-full">
          <Navbar />
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.asPath}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex-grow pt-24 md:pt-20 pb-8 w-full z-10"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
          
          <Footer />
        </div>
      </main>
    </>
  );
}


