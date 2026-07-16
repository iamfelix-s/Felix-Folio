import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import proj2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import proj3 from "../../public/images/projects/fashion-studio-website.jpg";
import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../public/images/projects/devdreaming.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const ProductLaunch = ({ title, type, tech, img, link, github, overview, problem, solution, features, outcome, future, priority = false }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-120px" }}
      className="glass-card p-8 md:p-6 sm:p-4 rounded-2xl border border-dark/10 dark:border-white/5 shadow-xl w-full mb-10 relative overflow-hidden text-left"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primaryDark to-primary opacity-[0.03] blur-2xl pointer-events-none" />

      {/* Header Block */}
      <div className="flex justify-between items-start flex-wrap gap-4 md:gap-3 border-b border-dark/5 dark:border-white/5 pb-4 mb-5 relative z-10">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-500">
            {type}
          </span>
          <h3 className="text-3xl md:text-2xl sm:text-xl font-black tracking-tight mt-2 text-dark dark:text-light leading-tight">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={github}
            target="_blank"
            className="w-10 text-dark/70 dark:text-light/70 hover:text-indigo-500 transition-colors"
            aria-label={`GitHub Repo for ${title}`}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-full bg-dark text-light dark:bg-light dark:text-dark px-6 py-2.5 text-sm font-bold tracking-tight hover:bg-dark/80 dark:hover:bg-light/90 shadow-md transition-all duration-300"
            aria-label={`Visit project live`}
          >
            Live Demo
          </Link>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-12 gap-12 lg:flex lg:flex-col lg:gap-6 relative z-10">
        
        {/* Visual Frame & Tech Tags */}
        <div className="col-span-5 flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden border border-dark/10 dark:border-white/5 bg-dark/5 dark:bg-white/5 p-2">
            <Image
              src={img}
              alt={title}
              className="h-auto w-full rounded-xl object-cover hover:scale-[1.01] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={priority}
            />
          </div>
          <div>
            <span className="text-xs font-bold text-dark/60 dark:text-zinc-500 uppercase tracking-widest block mb-3">Technologies Deployed</span>
            <div className="flex flex-wrap gap-1.5 sm:gap-1">
              {tech.map((t, idx) => (
                <span key={idx} className="text-[10px] font-black px-2.5 py-1.5 rounded-full bg-dark/5 dark:bg-light/10 text-dark/70 dark:text-light/80 border border-dark/5 dark:border-light/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
 
        {/* Specs & Architecture */}
        <div className="col-span-7 flex flex-col gap-6 text-sm text-dark/80 dark:text-zinc-300 font-medium leading-relaxed">
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-dark dark:text-light mb-1.5">Overview</h4>
            <p className="text-dark/70 dark:text-zinc-400">{overview}</p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-dark dark:text-light mb-1.5">Solution (Engineering Solution)</h4>
            <p className="text-dark/70 dark:text-zinc-400">{solution}</p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-dark dark:text-light mb-1.5">Key Capabilities & Features</h4>
            <ul className="list-disc pl-4 space-y-1 text-dark/70 dark:text-zinc-400">
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 border-t border-dark/5 dark:border-white/5 pt-6">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-500 mb-1.5">Problem (Business Challenge)</h4>
              <p className="text-xs text-dark/70 dark:text-zinc-400 leading-normal">{problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-500 mb-1.5">Outcome (Business Value)</h4>
              <p className="text-xs text-dark/70 dark:text-zinc-400 leading-normal">{outcome}</p>
            </div>
          </div>

          <div className="border-t border-dark/5 dark:border-white/5 pt-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-dark dark:text-light mb-1.5">Future Roadmap</h4>
            <p className="text-xs text-dark/70 dark:text-zinc-400">{future}</p>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Felix Folio | Projects - Flagship System Launches</title>
        <meta
          name="description"
          content="Explore detailed launch sheets of engineering projects covering quantitative analysis, machine learning pipelines, and full-stack web applications."
        />
        <link rel="canonical" href="https://felixfolio.vercel.app/projects" />
        <meta property="og:title" content="Felix Folio | Projects - Flagship System Launches" />
        <meta property="og:description" content="Explore detailed launch sheets of engineering projects covering quantitative analysis, machine learning pipelines, and full-stack web applications." />
        <meta name="twitter:title" content="Felix Folio | Projects - Flagship System Launches" />
        <meta name="twitter:description" content="Explore detailed launch sheets of engineering projects covering quantitative analysis, machine learning pipelines, and full-stack web applications." />
      </Head>

      <main className="mb-12 flex w-full flex-col items-center justify-center relative z-10">
        <Layout className="pt-4">
          <AnimatedText
            text="Flagship Product Launches."
            className="mb-10 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl font-black text-gradient"
          />

          <div className="w-full max-w-[1200px] mx-auto">
            
            {/* Project 1: Translatify */}
            <ProductLaunch
              title="Translatify - AI Translation Suite"
              type="Software Engineering // Artificial Intelligence"
              tech={["React", "Next.js", "Node.js", "HuggingFace API", "Web Speech API", "Stripe"]}
              img={proj1}
              link="https://github.com/iamfelix-s/VCodez/tree/main/Translatify"
              github="https://github.com/iamfelix-s/VCodez/tree/main/Translatify"
              priority={true}
              overview="An intelligent real-time multilingual translation client leveraging pre-trained NLP models to facilitate voice and text communication."
              problem="High latency in third-party inference APIs resulted in noticeable delays during interactive voice-to-text sessions, degrading user experience."
              solution="Deployed a custom Node.js middleware layer integrated with client-side caching maps and a voice-packet debouncing queue to optimize API utilization."
              features={[
                "Real-time dual translation stream for voice-to-text inputs.",
                "Localized client-side caching of translated assets to bypass API delays.",
                "Custom route gateways filtering repetitive input strings."
              ]}
              outcome="Reduced translation latency by 40% for frequent queries, significantly lowering HuggingFace inference costs while maintaining high translation accuracy."
              future="Integrating localized offline model configurations using ONNX runtimes in the browser."
            />

            {/* Project 2: Stroke Risk Predictive Modeling */}
            <ProductLaunch
              title="Stroke Risk Clinical Predictor"
              type="Machine Learning // Data Science"
              tech={["Python", "Scikit-Learn", "Pandas", "Flask", "Matplotlib", "Jupyter"]}
              img={proj3}
              link="https://github.com/iamfelix-s/VCodez/tree/main/ML-Based%20Stroke%20Risk%20Prediction"
              github="https://github.com/iamfelix-s/VCodez/tree/main/ML-Based%20Stroke%20Risk%20Prediction"
              overview="A machine learning classification dashboard predicting patient stroke risks using multi-variable clinical and demographic parameters."
              problem="Severe dataset class imbalance, with positive stroke instances representing less than 5% of records, biased models toward false negatives."
              solution="Trained Random Forest and Logistic Regression classifiers on clinical indicators processed through SMOTE oversampling and audited decision threshold calibrations."
              features={[
                "Preprocessed demographics and clinical histories (glucose levels, heart rate metrics).",
                "Feature correlation maps exposing relative statistical impact.",
                "RESTful endpoint integration for external EHR software bindings."
              ]}
              outcome="Achieved a 92% diagnostic pre-screening accuracy, providing a solid proof-of-concept for automated EHR screening systems."
              future="Training neural networks on dense medical charts and deploying models to containerized environments."
            />

            {/* Project 3: Grocery eCommerce Core */}
            <ProductLaunch
              title="MERN Grocery eCommerce Platform"
              type="Software Engineering // Full Stack"
              tech={["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"]}
              img={proj2}
              link="https://github.com/iamfelix-s/Grocery_Web_App"
              github="https://github.com/iamfelix-s/Grocery_Web_App"
              overview="A full-featured responsive eCommerce web application with persistent shopping cart management and secure checkout pipelines."
              problem="High concurrency during discount drops caused database locks and inventory inconsistencies due to race conditions in stock update transactions."
              solution="Configured atomic transactions in MongoDB coupled with JWT-based session security and staged schema filters to lock resources during checkout writes."
              features={[
                "Secure session flows and token-based client credentials.",
                "Scalable inventory modeling with real-time stock deductions.",
                "Dynamic search queries routing index filters in MongoDB."
              ]}
              outcome="Delivered a zero-leak transactional database checkout module capable of resolving concurrent checkouts with fast response times."
              future="Configuring webhooks to automatically adjust inventory based on supplier notifications."
            />

            {/* Project 4: MBTI Personality Classifier */}
            <ProductLaunch
              title="MBTI Written Personality Predictor"
              type="Natural Language Processing // Machine Learning"
              tech={["Python", "XGBoost", "NLTK", "Scikit-Learn", "Pandas", "TF-IDF"]}
              img={proj4}
              link="https://github.com/iamfelix-s/Projects/tree/main/MBTI-PersonalityTest"
              github="https://github.com/iamfelix-s/Projects/tree/main/MBTI-PersonalityTest"
              overview="An NLP text classification engine predicting Myers-Briggs Type Indicators from custom written text samples."
              problem="High entropy and structural variation in written social media posts made feature extraction difficult for traditional bag-of-words classifiers."
              solution="Preprocessed text files with stopword filtering and token regex parsing, extracting feature arrays using tuned TF-IDF vectorizers before running XGBoost models."
              features={[
                "Text preprocessing module stripping emojis, URLs, and excessive stop words.",
                "TF-IDF tokenizers mapping feature sets of frequent phrases.",
                "Multi-class XGBoost models returning statistical distributions of personality traits."
              ]}
              outcome="Attained an 85% validation accuracy, demonstrating viability for dashboard categorization of user feedback."
              future="Fine-tuning transformer topologies (BERT) to extract structural emotional semantics."
            />

            {/* Project 5: Banking Churn Dashboard */}
            <ProductLaunch
              title="E2E Banking Data Audit & Analytics"
              type="Data Analytics // Business Intelligence"
              tech={["Power BI", "SQL", "DAX", "Data Modeling", "Excel"]}
              img={proj5}
              link="https://github.com/iamfelix-s/Projects/tree/main/Banking-Analytics"
              github="https://github.com/iamfelix-s/Projects/tree/main/Banking-Analytics"
              overview="An end-to-end data analytics and business intelligence pipeline mapping active customer attrition metrics."
              problem="Raw banking transaction logs were siloed and contained convoluted circular dependencies, preventing stakeholders from identifying churn triggers."
              solution="Constructed a unified Star Schema data model in SQL Server, developed advanced DAX metrics in Power BI, and mapped customer attribute risk curves."
              features={[
                "Custom SQL schemas consolidating raw account records into unified datasets.",
                "Interactive BI filters parsing indicators (e.g. credit scores, transaction frequency).",
                "Advanced DAX metrics charting active customer churn probability rates."
              ]}
              outcome="Isolated attrition causes, identifying indicators that supported banking campaigns to reduce churn by 18%."
              future="Setting up automated scheduled dashboard updates using DirectQuery pipelines."
            />

            {/* Project 6: Twitter Real-Time Sentiment Tracker */}
            <ProductLaunch
              title="Real-Time Sentiment Monitoring Engine"
              type="Data Science // Natural Language Processing"
              tech={["Python", "Tweepy", "TextBlob", "Pandas", "Matplotlib", "REST APIs"]}
              img={proj6}
              link="https://github.com/iamfelix-s/VCodez/tree/main/Twitter-Sentiment-Analysis"
              github="https://github.com/iamfelix-s/VCodez/tree/main/Twitter-Sentiment-Analysis"
              overview="A streaming NLP analysis engine tracking real-time brand sentiment scores from social media API feeds."
              problem="Sudden spikes in streaming volume triggered strict API rate limits and resulted in noisy data payloads containing spam and formatting issues."
              solution="Built a multi-threaded Python ingestion client using Tweepy with automatic backoff retry schedules and TextBlob lexicon filters."
              features={[
                "Real-time API parser with automatic rate-limit filtering.",
                "Text sentiment score indicators returning positivity/negativity splits.",
                "Automated matplot data visualizations plotting logs dynamically."
              ]}
              outcome="Delivered a functional brand reputation tracker displaying real-time sentiment distribution maps to support instant brand tracking."
              future="Migrating to Apache Kafka to handle massive streaming data loads."
            />

          </div>
        </Layout>
      </main>
    </>
  );
}


