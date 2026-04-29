import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LettersPullUp } from "@/components/letters-pull-up"
import { NotebookPen } from "lucide-react"

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 bg-grid-pattern -z-10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-7 py-16 relative z-10">
        <Header currentPage="blogs" />

        <section>
          <div className="mb-8 flex items-center gap-3">
            <NotebookPen className="text-foreground mt-1" size={36} strokeWidth={1.5} />
            <LettersPullUp text="What I have been writing" className="text-xl sm:text-2xl md:text-3xl" />
          </div>
          <h2 className="sr-only">Blog Posts</h2>
          <ul className="grid grid-cols-1 gap-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="group flex flex-col p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <time className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-3 block">
                      {formatDate(post.date)}
                    </time>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <Footer />
      </div>
    </main>
  )
}
