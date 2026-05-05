"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { FileCode, Mail, MailOpen, Laptop } from "lucide-react"
import Link from "next/link"
import { LettersPullUp } from "@/components/letters-pull-up"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const [iconVisible, setIconVisible] = useState(false);
  const router = useRouter();

  const toolsRow1 = ["Node.js", "Nest.js", "Spring Boot", "PostgreSQL", "Docker", "AWS"];
  const toolsRow2 = ["Python", "Go", "Kubernetes", "Redis", "MongoDB", "GraphQL", "Git"];

  const buttonOnClick = () => {
    router.push(`https://drive.google.com/file/d/1XEYNProa0kB9XgZz-ISpaYHCKFMq5SKN/view`)

  }

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 bg-grid-pattern -z-10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-7 py-16 relative z-10">
        <Header currentPage="about" />

        <article>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-medium tracking-tight sm:text-4xl">About Me</h1>
            <motion.button
              onHoverStart={() => setIconVisible(true)}
              onHoverEnd={() => setIconVisible(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={buttonOnClick}
              className="flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 transition-colors"
            >
              <span>Resume</span>
              <AnimatePresence>
                {iconVisible && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden flex items-center"
                  >
                    <FileCode size={16} className="shrink-0" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="mt-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-6">
                <div className="relative w-18 h-18 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/image.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* <p className="text-xl sm:text-2xl ">Hi, I am Harsh Anand.</p> */}
                <LettersPullUp text="Hi, I am Harsh Anand" />
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">Software Engineer based in Bengaluru, India, specializing in DevOps and backend development, with deep expertise in data flow optimization and scalable API architecture.</p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl mb-6">Tools & Stacks I am familiar with</h2>

            <div className="flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
              <div className="flex w-max">
                <motion.div
                  className="flex shrink-0"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                  {[...toolsRow1, ...toolsRow1].map((tool, idx) => (
                    <div key={idx} className="mr-6 px-6 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium whitespace-nowrap shadow-sm">
                      {tool}
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex w-max">
                <motion.div
                  className="flex shrink-0"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                  {[...toolsRow2, ...toolsRow2].map((tool, idx) => (
                    <div key={idx} className="mr-6 px-6 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium whitespace-nowrap shadow-sm">
                      {tool}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl mb-10">Work Experience</h2>

            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 space-y-14 pb-4">

              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[28.5px] top-0 w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center overflow-hidden z-10 border-4 border-white dark:border-zinc-950">
                  <Image src="/WorkExp1.jpg" alt="Company Logo" fill className="object-cover" />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Aumnee</h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">Software Development Engineer (SDE 2)</p>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0 font-medium">
                    Oct 2024 - Jan 2026
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Bengaluru, India
                </p>
              </div>

              {/* Previous Role */}
              <div className="relative pl-8 sm:pl-12">
                {/* Small Circle */}
                <div className="absolute -left-[5.5px] top-2.5 w-3 h-3 bg-black dark:bg-white rounded-full z-10" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <div>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">Software Developer (SDE 1)</p>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0 font-medium">
                    Feb 2024 - Oct 2024
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Bengaluru, India
                </p>
              </div>


            </div>

            {/* Freelancer Role (Standalone) */}
            <div className="relative ml-4 sm:ml-6 mt-12">
              <div className="relative pl-8 sm:pl-12">
                {/* Icon Bullet */}
                <div className="absolute -left-[24.5px] top-0 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm z-10">
                  <Laptop className="w-5 h-5 text-zinc-700 dark:text-zinc-300" strokeWidth={2} />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      Freelancer{" "}
                      <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                        (Self-Employed)
                      </span>
                    </h3>                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">Software Developer</p>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0 font-medium">
                    July 2022 - Feb 2024
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Remote
                </p>
              </div>
            </div>

            <div className=" relative ml-4 sm:ml-6 mt-12">
              <div className="relative pl-8 sm:pl-12">
                {/* Icon Bullet */}
                <div className="absolute -left-[24.5px] top-0 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden shadow-sm z-10">
                  <Image src="/PhonePe.jpg" alt="PhonePe" fill className="object-cover" />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">PhonePe</h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">SRE Intern</p>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0 font-medium">
                    Jan 2022 - June 2022
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Bengaluru, India
                </p>
              </div>
            </div>
          </div>

          <div className="my-18 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-16 sm:w-32 bg-gradient-to-r from-transparent via-zinc-400 to-zinc-900 dark:via-zinc-600 dark:to-zinc-100 rounded-full opacity-70" />
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl whitespace-nowrap px-2">Let's Connect</h2>
              <div className="h-[2px] w-16 sm:w-32 bg-gradient-to-l from-transparent via-zinc-400 to-zinc-900 dark:via-zinc-600 dark:to-zinc-100 rounded-full opacity-70" />
            </div>
            
            <div className="flex flex-row items-center justify-center gap-6">
              <Link href="https://x.com/harshanand120" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700">
                <Image src="/X.jpg" alt="X" fill className="object-cover" />
              </Link>
              <Link href="https://www.linkedin.com/in/harshanand120/" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700">
                <Image src="/LinkedIn.png" alt="LinkedIn" fill className="object-cover" />
              </Link>
              <Link href="https://github.com/harshanand120" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700">
                <Image src="/Github.png" alt="GitHub" fill className="object-cover" />
              </Link>
              <Link href="mailto:me@harshanand.dev" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900">
                <Mail className="block group-hover:hidden text-zinc-600 dark:text-zinc-400" />
                <MailOpen className="hidden group-hover:block text-zinc-900 dark:text-zinc-100" />
              </Link>
            </div>
          </div>

        </article>

        <Footer />
      </div>
    </main>
  )
}
