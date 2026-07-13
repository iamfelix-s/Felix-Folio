import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Felix Folio | About - Narrative & Core Skills</title>
        <meta name="description" content="Learn about Felix's professional background in Computer Science & Engineering, his logic-driven analytical methodology, and his software engineering philosophy." />
      </Head>
      <main
        className="flex w-full flex-col items-center justify-center relative z-10"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Quantitative Rigor. Product Craft."
            className="mb-10 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl font-black text-gradient"
          />

          {/* Stats Bar */}
          <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto border-y border-dark/5 dark:border-white/5 py-5 mb-10 gap-8 lg:grid lg:grid-cols-3 md:grid-cols-1">
            <div className="text-left">
              <span className="text-4xl font-black text-gradient"><AnimatedNumberFramerMotion value={10} />+</span>
              <span className="block text-xs font-bold text-dark/45 dark:text-zinc-500 uppercase tracking-widest mt-1">Real-World Projects</span>
            </div>
            <div className="text-left">
              <span className="text-4xl font-black text-gradient"><AnimatedNumberFramerMotion value={1110} />+</span>
              <span className="block text-xs font-bold text-dark/45 dark:text-zinc-500 uppercase tracking-widest mt-1">Days of Coding</span>
            </div>
            <div className="text-left">
              <span className="text-4xl font-black text-gradient"><AnimatedNumberFramerMotion value={2} />+</span>
              <span className="block text-xs font-bold text-dark/45 dark:text-zinc-500 uppercase tracking-widest mt-1">Years of Practice</span>
            </div>
          </div>

          {/* 3-Column Editorial Grid */}
          <div className="grid grid-cols-12 gap-8 lg:grid-cols-1 lg:gap-10 w-full max-w-[1200px] mx-auto text-left leading-relaxed">
            
            {/* Column 1: Image & Mission */}
            <div className="col-span-4 flex flex-col gap-8">
              <div className="rounded-2xl overflow-hidden border border-dark/10 dark:border-white/5 bg-dark/5 dark:bg-white/5 p-4">
                <Image
                  className="h-auto w-full rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500"
                  src={profile}
                  alt="Felix"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="glass-card p-8 rounded-2xl border border-dark/10 dark:border-white/5 shadow-sm">
                <h3 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">Core Mission</h3>
                <p className="text-sm font-semibold text-dark/80 dark:text-zinc-300">
                  To build performant systems and predictive analytics architectures that transform raw data streams into high-impact operational tools.
                </p>
              </div>
            </div>

            {/* Column 2: Journey & Workflow */}
            <div className="col-span-4 flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-black uppercase text-dark dark:text-light mb-4 tracking-wide border-b border-dark/5 dark:border-white/5 pb-2">
                  Professional Journey
                </h2>
                <p className="text-base text-dark/80 dark:text-zinc-400 font-medium">
                  My entry into technology began in Computer Science & Engineering, where I fell in love with algorithmic structure and data organization. Over time, I discovered that software is only half the puzzle—the real value lies in the data flowing through it.
                </p>
                <p className="text-base text-dark/80 dark:text-zinc-400 font-medium mt-4">
                  This realization led me to focus on Data Science and quantitative analytics. Today, I build systems that are both computationally robust and capable of generating actionable intelligence.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-black uppercase text-dark dark:text-light mb-4 tracking-wide border-b border-dark/5 dark:border-white/5 pb-2">
                  Problem Solving
                </h2>
                <p className="text-base text-dark/80 dark:text-zinc-400 font-medium">
                  I treat code and modeling with the same logical rigor. When building databases, pipelines, or ML classifiers, I design defensively and verify empirical metrics (precision, recall, latency) at every iteration. I avoid quick hacks in favor of clean, structural code.
                </p>
              </div>
            </div>

            {/* Column 3: Philosophy & Goals */}
            <div className="col-span-4 flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-black uppercase text-dark dark:text-light mb-4 tracking-wide border-b border-dark/5 dark:border-white/5 pb-2">
                  Technical Philosophy
                </h2>
                <p className="text-base text-dark/80 dark:text-zinc-400 font-medium">
                  Excellent engineering requires empathy. Whether it is a back-end transaction cache or an analytical visualizer, my background in design allows me to translate complex back-end architectures into clean, intuitive interfaces that recruiters and developers enjoy using.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-black uppercase text-dark dark:text-light mb-4 tracking-wide border-b border-dark/5 dark:border-white/5 pb-2">
                  Growth & Motivation
                </h2>
                <p className="text-base text-dark/80 dark:text-zinc-400 font-medium">
                  I am driven by structural efficiency—getting a dataset cleanly preprocessed or refactoring a complex codebase into elegant services. 
                </p>
                <p className="text-base text-dark/80 dark:text-zinc-400 font-medium mt-4">
                  Currently, I am expanding my knowledge in advanced statistical forecasting and real-time streaming architectures to further strengthen my full-stack capabilities.
                </p>
              </div>
            </div>

          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
