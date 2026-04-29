"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { FileCode, Mail, MailOpen } from "lucide-react"
import Link from "next/link"
import { LettersPullUp } from "@/components/letters-pull-up"

export default function AboutPage() {
  const [iconVisible, setIconVisible] = useState(false);

  const toolsRow1 = ["Node.js", "Nest.js", "Spring Boot", "PostgreSQL", "Docker", "AWS"];
  const toolsRow2 = ["Python", "Go", "Kubernetes", "Redis", "MongoDB", "GraphQL", "Git"];

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
                <LettersPullUp text="Hi, I am Harsh Anand"/>
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

          <div className="my-8">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl mb-6">Work Experiences</h2>

            <div>
              <div>
                <div>

                </div>
              </div>
            </div>

          </div>

          <div className="my-12">
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl mb-6">Let's Connect</h2>
            <div className="flex flex-row items-center gap-6">
              <Link href="https://x.com/harshanand120" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700">
                <Image src="/X.jpg" alt="X" fill className="object-cover"/>
              </Link>
              <Link href="https://www.linkedin.com/in/harshanand120/" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700">
                <Image src="/LinkedIn.png" alt="LinkedIn" fill className="object-cover"/>
              </Link>
              <Link href="https://github.com/harshanand120" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700">
                <Image src="/GitHub.png" alt="GitHub" fill className="object-cover"/>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center relative w-12 h-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-transform hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900">
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
