import { motion } from "framer-motion";
import React from "react";

const EcosystemCard = ({ title, technologies, flow, relationship }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-5 rounded-2xl border border-dark/10 dark:border-white/5 shadow-lg text-left"
    >
      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
        Ecosystem
      </span>
      
      <h3 className="text-2xl md:text-xl font-black mt-4 mb-2 text-dark dark:text-light">
        {title}
      </h3>
      <span className="block text-xs font-bold text-indigo-500/80 dark:text-indigo-400/80 tracking-wide uppercase mb-4">
        {flow}
      </span>

      {/* Technologies List */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, idx) => (
          <span key={idx} className="text-xs font-bold px-3 py-1.5 rounded-full bg-dark/5 dark:bg-light/10 text-dark/85 dark:text-light/90 border border-dark/5 dark:border-light/10">
            {tech}
          </span>
        ))}
      </div>

      {/* Practical System Relationship */}
      <div className="border-t border-dark/5 dark:border-white/5 pt-4">
        <span className="text-[10px] font-bold text-dark/60 dark:text-zinc-500 uppercase tracking-widest block mb-2">
          System Relationship
        </span>
        <p className="text-sm font-semibold text-dark/70 dark:text-zinc-400 leading-relaxed">
          {relationship}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="my-24 md:my-16">
      <h2 className="font-black text-5xl mb-12 md:mb-6 w-full text-center md:text-4xl sm:text-3xl xs:text-2xl glow-text text-gradient">
        Capabilities & Systems
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6 mt-8 max-w-[1200px] mx-auto w-[95%]">
        
        <EcosystemCard
          title="Analytical Engine & ML Pipeline"
          flow="Processing → Modeling"
          technologies={["Python", "NumPy", "Pandas", "Scikit-Learn", "XGBoost"]}
          relationship="Operates on raw datasets drawn from database layers. Scripts clean anomalies, execute feature scaling, and pass optimized data arrays to predictive algorithms for multi-class classification and forecasting."
        />

        <EcosystemCard
          title="Data Pipelines & Schemas"
          flow="Ingestion → Integration"
          technologies={["SQL", "MySQL", "SQLite", "PostgreSQL"]}
          relationship="Acts as the structural repository. Implements indexing, schemas, and optimized query routines to deliver datasets cleanly to preprocessing frameworks or transactional microservices."
        />

        <EcosystemCard
          title="Business Intelligence & Analytics"
          flow="Aggregation → Visualization"
          technologies={["Power BI", "DAX", "Data Modeling", "Excel"]}
          relationship="Translates SQL metrics and Python model outputs into interactive executive reports. Employs relational modeling and custom DAX calculations to isolate operational risks for decision-makers."
        />

        <EcosystemCard
          title="Full-Stack Application Delivery"
          flow="Interface ← API Integration"
          technologies={["JavaScript", "ReactJS", "NextJS", "NodeJS", "ExpressJS", "Tailwind CSS"]}
          relationship="Engineers the client-facing application layers. Uses server-side caching and API gateways to bind databases and machine learning endpoints to clean, responsive interfaces."
        />
      </div>
    </div>
  );
};

export default Skills;


