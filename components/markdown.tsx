import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkSupersub from "remark-supersub"

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm,remarkSupersub]}
      components={{
        h1: ({ children }) => <h1 className="text-2xl font-semibold text-foreground mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">{children}</h3>,
        p: ({ children }) => <p className="text-foreground leading-relaxed mb-4">{children}</p>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-foreground underline hover:text-muted-foreground transition-colors"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1 text-foreground">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1 text-foreground">{children}</ol>,
        li: ({ children }) => <li className="text-foreground">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-border pl-4 italic text-muted-foreground my-4">
            {children}
          </blockquote>
        ),
        code: ({ className, children }) => {
          const isInline = !className
          if (isInline) {
            return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">{children}</code>
          }
          return (
            <code className="block bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono text-foreground">
              {children}
            </code>
          )
        },
        pre: ({ children }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">{children}</pre>,
        hr: () => <hr className="border-border my-8" />,
        img: ({ src, alt }) => (
          <img src={src || "/placeholder.svg"} alt={alt || ""} className="rounded-lg my-4 max-w-full h-auto" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
