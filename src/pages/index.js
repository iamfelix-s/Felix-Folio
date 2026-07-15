import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const DataPipelineVisualizer = React.memo(() => {
  return (
    <motion.div 
      className="glass-card p-6 md:p-4 sm:p-3 rounded-2xl border border-dark/10 dark:border-white/5 shadow-xl w-full h-[380px] md:h-[280px] sm:h-[240px] flex flex-col justify-between relative overflow-hidden text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex items-center justify-between border-b border-dark/5 dark:border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-dark/40 dark:text-light/40 uppercase">Interactive System Architecture</span>
        </div>
        <span className="text-[10px] bg-indigo-500/10 text-indigo-500 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">Active Pipeline</span>
      </div>

      {/* SVG Pipeline Visualization */}
      <div className="flex-grow flex items-center justify-center my-4 relative">
        <svg viewBox="0 0 400 180" className="w-full h-full max-h-[220px]">
          {/* Grid lines */}
          <line x1="50" y1="90" x2="350" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="150" y1="40" x2="150" y2="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="250" y1="40" x2="250" y2="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Node Connections */}
          <path d="M 70 90 L 150 50 M 70 90 L 150 130 M 150 50 L 250 90 M 150 130 L 250 90 M 250 90 L 330 90" 
                stroke="currentColor" strokeWidth="1.5" className="text-dark/10 dark:text-white/10" />
          
          <path d="M 70 90 L 150 50 M 70 90 L 150 130 M 150 50 L 250 90 M 150 130 L 250 90 M 250 90 L 330 90" 
                stroke="url(#grad)" strokeWidth="2" strokeDasharray="10 150" strokeDashoffset="0" className="animate-dash" />

          {/* Gradients */}
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <style>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: -160;
                }
              }
              .animate-dash {
                animation: dash 3.5s linear infinite;
              }
            `}</style>
          </defs>

          {/* Nodes */}
          <circle cx="70" cy="90" r="8" className="fill-indigo-500/10 stroke-indigo-500 stroke-2" />
          <circle cx="150" cy="50" r="8" className="fill-cyan-500/10 stroke-cyan-500 stroke-2" />
          <circle cx="150" cy="130" r="8" className="fill-cyan-500/10 stroke-cyan-500 stroke-2" />
          <circle cx="250" cy="90" r="8" className="fill-emerald-500/10 stroke-emerald-500 stroke-2" />
          
          {/* Target Model output frame */}
          <g transform="translate(315, 75)">
            <rect width="60" height="30" rx="6" className="fill-dark/5 dark:fill-white/5 stroke-dark/15 dark:stroke-white/10" />
            <text x="30" y="18" textAnchor="middle" className="text-[9px] font-black fill-dark dark:fill-light">R² = 0.98</text>
          </g>

          {/* Label Texts */}
          <text x="70" y="115" textAnchor="middle" className="text-[8px] font-bold fill-dark/45 dark:fill-light/40">Raw Data</text>
          <text x="150" y="32" textAnchor="middle" className="text-[8px] font-bold fill-dark/45 dark:fill-light/40">EDA & ETL</text>
          <text x="150" y="152" textAnchor="middle" className="text-[8px] font-bold fill-dark/45 dark:fill-light/40">ML Features</text>
          <text x="250" y="115" textAnchor="middle" className="text-[8px] font-bold fill-dark/45 dark:fill-light/40">Model Cache</text>
        </svg>
      </div>

      <div className="border-t border-dark/5 dark:border-white/5 pt-4 flex justify-between items-center text-xs font-semibold text-dark/50 dark:text-light/50">
        <span>Optimization Status: Prerendered</span>
        <span>Build trace: OK</span>
      </div>
    </motion.div>
  );
});

DataPipelineVisualizer.displayName = "DataPipelineVisualizer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Felix Folio | Data Science, Analytics & Software Engineering</title>
        <meta
          name="description"
          content="Explore the flagship portfolio of Felix, showcasing scalable software engineering, detailed data analytics, and advanced predictive machine learning case studies."
        />
      </Head>

      <article className="flex items-center text-dark dark:text-light min-h-[70vh] md:min-h-0 py-6 relative z-10">
        <Layout className="!pt-2">
          <div className="flex w-full items-center justify-between lg:flex-col gap-12 xl:gap-8 md:gap-8">
            
            {/* Left Positioning Column */}
            <div className="flex w-1/2 flex-col items-start justify-center lg:w-full lg:text-center lg:items-center">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.15em] text-indigo-500 mb-3 block glow-text">
                Data Specialist // Software Engineer
              </span>
              
              <h1 className="text-5xl xl:text-4xl md:text-3xl sm:text-2xl font-black tracking-tight leading-[1.05] text-left lg:text-center text-gradient mb-4">
                Engineering Data Systems. Building Scalable Applications.
              </h1>
              
              <p className="text-base md:text-sm font-medium text-dark/70 dark:text-zinc-400 leading-relaxed text-left lg:text-center mb-6 max-w-[560px]">
                I specialize in extracting high-value intelligence from unstructured databases, building predictive machine learning pipelines, and engineering robust full-stack applications. By combining analytical rigor with architecture, I translate raw statistics into clear business decisions.
              </p>
              
              <div className="flex items-center gap-4 sm:flex-col sm:w-full">
                <Link
                  href="/Felix_Resume.pdf"
                  target={"_blank"}
                  className="rounded-full bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 text-sm font-bold tracking-tight hover:bg-dark/80 dark:hover:bg-light/90 shadow-md transition-all hover:scale-[1.02] sm:w-full sm:text-center"
                  download
                >
                  Download CV <LinkArrow className="ml-2 inline-block !w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-full text-sm font-semibold text-dark/70 dark:text-light/75 hover:text-dark dark:hover:text-light transition-all border border-dark/10 dark:border-white/10 hover:bg-dark/5 dark:hover:bg-white/5 sm:w-full sm:text-center"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Interactive Visualizer Column */}
            <div className="w-1/2 lg:w-[80%] md:w-full flex justify-center items-center">
              <DataPipelineVisualizer />
            </div>

          </div>

          {/* Luxury Editorial Quantitative Highlights Row */}
          <div className="border-t border-dark/10 dark:border-white/5 mt-16 md:mt-10 pt-8 grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-3 text-left">
            {/* Metric 1 */}
            <div className="metric-card-mobile">
              <div className="md:w-20 md:flex-shrink-0 flex flex-col items-start justify-start">
                <span className="text-3xl sm:text-2xl font-extrabold text-gradient">98.4%</span>
              </div>
              <div className="md:flex-1 md:min-w-0">
                <h3 className="text-xs font-bold text-dark/60 dark:text-zinc-500 uppercase tracking-widest mt-1 md:mt-0">Predictive Model Accuracy</h3>
                <p className="text-xs text-dark/75 dark:text-zinc-400 mt-1 max-w-[280px] md:max-w-none">Optimized NLP classifiers using XGBoost pipelines to identify high-density traits.</p>
              </div>
            </div>
            {/* Metric 2 */}
            <div className="metric-card-mobile">
              <div className="md:w-20 md:flex-shrink-0 flex flex-col items-start justify-start">
                <span className="text-3xl sm:text-2xl font-extrabold text-gradient">40%</span>
                <span className="hidden md:block text-[10px] font-black uppercase tracking-wider text-indigo-500/80 dark:text-indigo-400/80 -mt-1">Speedup</span>
                <span className="md:hidden text-3xl sm:text-2xl font-extrabold text-gradient"> Speedup</span>
              </div>
              <div className="md:flex-1 md:min-w-0">
                <h3 className="text-xs font-bold text-dark/60 dark:text-zinc-500 uppercase tracking-widest mt-1 md:mt-0">Translation Latency</h3>
                <p className="text-xs text-dark/75 dark:text-zinc-400 mt-1 max-w-[280px] md:max-w-none">Implemented custom caching layer for AI translators, bypassing redundant API calls.</p>
              </div>
            </div>
            {/* Metric 3 */}
            <div className="metric-card-mobile">
              <div className="md:w-20 md:flex-shrink-0 flex flex-col items-start justify-start">
                <span className="text-3xl sm:text-2xl font-extrabold text-gradient">18%</span>
                <span className="hidden md:block text-[10px] font-black uppercase tracking-wider text-indigo-500/80 dark:text-indigo-400/80 -mt-1">Reduction</span>
                <span className="md:hidden text-3xl sm:text-2xl font-extrabold text-gradient"> Reduction</span>
              </div>
              <div className="md:flex-1 md:min-w-0">
                <h3 className="text-xs font-bold text-dark/60 dark:text-zinc-500 uppercase tracking-widest mt-1 md:mt-0">Banking Customer Attrition</h3>
                <p className="text-xs text-dark/75 dark:text-zinc-400 mt-1 max-w-[280px] md:max-w-none">Audited bank logs and constructed churn dashboards to identify active attrition triggers.</p>
              </div>
            </div>
          </div>

        </Layout>

        <HireMe />
      </article>
    </>
  );
}


