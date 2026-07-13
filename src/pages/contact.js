import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Head from "next/head";
import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 1800);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Felix Folio | Contact - Let&apos;s Connect</title>
        <meta
          name="description"
          content="Get in touch with Felix. Open for data science internships, software engineering roles, and consulting queries. Connect today."
        />
      </Head>

      <TransitionEffect />

      <main className="mb-12 flex w-full flex-col items-center justify-center relative z-10">
        <Layout className="pt-4">
          <AnimatedText
            text="Let&apos;s build something great."
            className="mb-10 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl font-black text-gradient"
          />

          <div className="grid grid-cols-12 gap-8 mt-4 xl:gap-8 lg:flex lg:flex-col lg:w-full max-w-[1200px] mx-auto w-[95%]">
            
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-7 glass-card p-8 md:p-6 rounded-2xl border border-dark/10 dark:border-white/5 shadow-xl lg:w-full relative"
            >
              <h2 className="text-2xl font-black mb-2 text-dark dark:text-light text-left">
                Drop Me A Line
              </h2>
              <p className="text-sm font-semibold text-dark/45 dark:text-zinc-500 mb-4 text-left leading-relaxed">
                Fill out the form below, and I will get back to you as soon as possible.
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="text-5xl mb-4 text-emerald-500">✓</div>
                  <h3 className="text-2xl font-black mb-2">Message Dispatched</h3>
                  <p className="text-dark/60 dark:text-zinc-400 font-semibold max-w-[320px]">
                    Thank you for reaching out. I&apos;ll review your details and respond shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-bold uppercase text-indigo-500 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 text-left relative z-10">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold mb-2 text-dark/45 dark:text-zinc-500 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      disabled={status === "submitting"}
                      className="w-full bg-transparent border-b border-dark/10 dark:border-white/5 focus:border-dark dark:focus:border-light py-2 text-dark dark:text-light font-semibold outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs font-bold mb-2 text-dark/45 dark:text-zinc-500 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      disabled={status === "submitting"}
                      className="w-full bg-transparent border-b border-dark/10 dark:border-white/5 focus:border-dark dark:focus:border-light py-2 text-dark dark:text-light font-semibold outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs font-bold mb-2 text-dark/45 dark:text-zinc-500 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Let me know how I can help you..."
                      disabled={status === "submitting"}
                      className="w-full bg-transparent border-b border-dark/10 dark:border-white/5 focus:border-dark dark:focus:border-light py-2 text-dark dark:text-light font-semibold outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-dark text-light dark:bg-light dark:text-dark font-bold uppercase py-3.5 shadow-md hover:bg-dark/85 dark:hover:bg-light/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 flex flex-col gap-6 lg:w-full text-left"
            >
              <div className="glass-card p-8 rounded-3xl border border-dark/10 dark:border-white/5 shadow-md flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1">Direct Outreach</span>
                <h3 className="text-lg font-black text-dark dark:text-light">Email Address</h3>
                <a
                  href="mailto:pbf.benny@gmail.com"
                  className="text-base font-bold text-dark/80 dark:text-zinc-300 hover:text-indigo-500 transition-colors break-all"
                >
                  pbf.benny@gmail.com
                </a>
              </div>

              <div className="glass-card p-8 rounded-3xl border border-dark/10 dark:border-white/5 shadow-md flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1">Social Connectivity</span>
                <h3 className="text-lg font-black text-dark dark:text-light">LinkedIn & GitHub</h3>
                <div className="flex gap-4 mt-2">
                  <motion.a
                    href="https://www.linkedin.com/in/paul-benjamin-felix-b8b481249/"
                    target="_blank"
                    className="flex items-center gap-2 p-2 px-4 rounded-full border border-dark/10 dark:border-white/10 font-bold hover:bg-dark/5 dark:hover:bg-white/5 transition-all text-xs"
                    whileHover={{ y: -2 }}
                  >
                    <LinkedInIcon className="w-4" /> LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/iamfelix-s"
                    target="_blank"
                    className="flex items-center gap-2 p-2 px-4 rounded-full border border-dark/10 dark:border-white/10 font-bold hover:bg-dark/5 dark:hover:bg-white/5 transition-all text-xs"
                    whileHover={{ y: -2 }}
                  >
                    <GithubIcon className="w-4" /> GitHub
                  </motion.a>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl border border-dark/10 dark:border-white/5 shadow-md flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1">Location Details</span>
                <h3 className="text-lg font-black text-dark dark:text-light">Current Base</h3>
                <p className="text-base font-semibold text-dark/70 dark:text-zinc-400">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </motion.div>

          </div>
        </Layout>
      </main>
    </>
  );
}


