import React, { useRef } from "react";
import { motion } from "framer-motion";

const CaseStudyCard = ({ position, company, companyLink, time, address, metrics, tools, problem, workflow, value, lessons }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card p-8 md:p-6 rounded-2xl border border-dark/10 dark:border-white/5 shadow-xl text-left w-full relative mb-10 last:mb-0 overflow-hidden"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primaryDark to-primary opacity-5 blur-xl pointer-events-none" />
      
      <div className="grid grid-cols-12 gap-12 lg:grid-cols-1 lg:gap-6 relative z-10">
        
        {/* Left Column: Context Metadata & Metrics */}
        <div className="col-span-4 flex flex-col justify-between border-r border-dark/5 dark:border-white/5 pr-8 lg:border-r-0 lg:border-b lg:pb-8 lg:pr-0">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
              Case Study
            </span>
            <h3 className="text-3xl md:text-2xl font-black tracking-tight mt-6 md:mt-4 text-dark dark:text-light leading-tight">
              {position}
            </h3>
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-dark/70 dark:text-zinc-400 hover:text-indigo-500 transition-colors mt-1 inline-block"
            >
              @{company}
            </a>
            <span className="block text-xs font-semibold text-dark/60 dark:text-zinc-500 tracking-wider mt-2">
              {time} | {address}
            </span>
          </div>

          <div className="mt-10 md:mt-6">
            <span className="text-4xl md:text-3xl font-extrabold text-gradient block">{metrics}</span>
            <span className="text-xs font-bold text-dark/60 dark:text-zinc-500 uppercase tracking-wider block mt-1">Impact & Highlight</span>
          </div>

          <div className="mt-8 md:mt-4">
            <span className="text-xs font-bold text-dark/60 dark:text-zinc-500 uppercase tracking-widest block mb-2">Tools Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((tool, idx) => (
                <span key={idx} className="text-[10px] font-black px-2.5 py-1 rounded-full bg-dark/5 dark:bg-light/10 text-dark/70 dark:text-light/80 border border-dark/5 dark:border-light/10">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Narrative */}
        <div className="col-span-8 flex flex-col gap-6 text-base text-dark/80 dark:text-zinc-300 font-medium">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-2">The Problem</h4>
            <p className="leading-relaxed text-dark/70 dark:text-zinc-400">
              {problem}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-2">Workflow & Responsibilities</h4>
            <p className="leading-relaxed text-dark/70 dark:text-zinc-400">
              {workflow}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-2">Business Value</h4>
            <p className="leading-relaxed text-dark/70 dark:text-zinc-400">
              {value}
            </p>
          </div>

          <div className="border-t border-dark/5 dark:border-white/5 pt-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-2">Lessons Learned</h4>
            <p className="leading-relaxed text-dark/70 dark:text-zinc-400 italic">
              {lessons}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="my-24 md:my-16">
      <h2 className="font-black text-5xl mb-12 w-full text-center md:text-4xl xs:text-3xl glow-text text-gradient">
        Professional Journey
      </h2>

      <div className="max-w-[1200px] mx-auto w-[95%]">
        <CaseStudyCard
          position="Fraud Analyst"
          company="CES"
          companyLink="https://www.cesltd.com/"
          time="October 2025 – May 2026"
          address="Chennai, TN"
          metrics="Audited 10,000+ Profiles"
          tools={["SQL", "Risk Classifiers", "Data Auditing", "Pattern Analysis", "Excel"]}
          problem="High-volume transactional flows presented complex vectors for transaction fraud and financial leakage. Detecting these anomalies required analytical logic, risk assessment, and systematic database queries."
          workflow="Conducted daily audits of transaction datasets using SQL query logic. Designed and validated structured rule-filters to detect suspicious behavior patterns and anomalies. Investigated high-risk merchant profiles and verified accounts."
          value="Mitigated financial liabilities by delivering high-precision risk metrics and predictive reports to operations, leading to data-driven security policies."
          lessons="I learned that data auditing requires absolute precision and logical rigor. Speed is useless without systematic verification, especially in high-risk financial datasets."
        />

        <CaseStudyCard
          position="Data Science Intern"
          company="VCodez"
          companyLink="https://vcodez.com"
          time="Feb 2025 - July 2025"
          address="Chennai, TN"
          metrics="4+ Preprocessing Pipelines"
          tools={["Python", "Pandas", "Scikit-Learn", "XGBoost", "SQL", "Git"]}
          problem="Raw logs and user engagement data sat in disparate siloed formats, limiting the capacity of analytics to identify retention curves or predict customer attrition triggers."
          workflow="Built and optimized ETL and feature-extraction pipelines in Python. Conducted Exploratory Data Analysis (EDA) to map active retention metrics. Trained and fine-tuned gradient-boosted classification models (XGBoost) for user profiling."
          value="Provided the data infrastructure and preprocessed records that powered downstream stakeholder dashboards, cutting manual data queries for analytics by hours."
          lessons="Building machine learning models is only a fraction of the challenge; feature engineering, data hygiene, and translating quantitative metrics into actionable business context are where true values are made."
        />
      </div>
    </div>
  );
};

export default Experience;


