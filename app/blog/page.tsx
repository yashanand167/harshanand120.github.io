import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-7 py-16">
        <Header currentPage="blogs" />

        <section>
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
        <Footer/>
      </div>
    </main>
  )
}
