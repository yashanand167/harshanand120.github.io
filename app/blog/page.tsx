
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LettersPullUp } from "@/components/letters-pull-up"

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 bg-grid-pattern -z-10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-7 py-16 relative z-10">
        <Header currentPage="blogs" />

        <section>
          <div className="mb-8">
            <LettersPullUp text="Welcome to my blogs" className="text-xl sm:text-2xl md:text-3xl" />
          </div>
          <h2 className="sr-only">Blog Posts</h2>
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <time className="text-sm text-muted-foreground">{formatDate(post.date)}</time>
                    <h3 className="text-lg font-medium text-foreground mt-1 group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-muted-foreground mt-2 leading-relaxed">{post.description}</p>
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
