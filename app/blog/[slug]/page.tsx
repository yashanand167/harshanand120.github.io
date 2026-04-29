import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/markdown"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollIndicator } from "@/components/scroll-indicator"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background relative">
      <ScrollIndicator />
      <div className="bg-dot-pattern fixed inset-0 -z-10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-7 py-16 relative z-10">
        <nav className="flex items-center justify-between mb-12">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            ← Back
          </Link>
          <ThemeToggle />
        </nav>

        <article>
          <header className="mb-10">
            <time className="text-sm text-muted-foreground">{formatDate(post.date)}</time>
            <h1 className="text-3xl font-semibold text-foreground mt-2 text-balance">{post.title}</h1>
            {post.description && (
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{post.description}</p>
            )}
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-justify">
            <Markdown content={post.content} />
          </div>
        </article>

        {/* <footer className="mt-20 pt-8 border-t border-border">
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back
          </Link>
        </footer> */}
      </div>
    </main>
  )
}
