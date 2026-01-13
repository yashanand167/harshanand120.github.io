import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata = {
  title: "about",
  description: "Learn more about me and my work.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Header currentPage="about" />

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-3xl font-semibold text-foreground mb-8">About Me</h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Hello! I'm Harsh, a Software Engineer and writer passionate about technology, design, and sharing ideas through writing.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            This blog is where I share what I’m learning, through tutorials, experiments, and experiences—while documenting the journey in public.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">Connect</h2>

          <ul className="space-y-2 text-muted-foreground">
            <li>
              <span>GitHub: </span>
              <a
                href="https://github.com/harshanand120"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
               harshanand120
              </a>
            </li>
            <li>
              <span>LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/harsh-anand-151622144/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                 harsh-anand-151622144
              </a>
            </li>
            <li>
              <span>Twitter/X: </span>
              <a
                href="https://twitter.com/harshanand120"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                @harshanand120
              </a>
            </li>
            <li>
              <span>Email: </span>
              <a href="mailto:me@harshanand.dev" className="underline hover:text-foreground transition-colors">
                me@harshanand.dev
              </a>
            </li>
          </ul>
        </article>
        <Footer/>
      </div>
    </main>
  )
}
