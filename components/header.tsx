import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  currentPage?: "blogs" | "about"
}

export function Header({ currentPage = "about" }: HeaderProps) {
  return (
    <nav className="flex items-center justify-between mb-12">
      <ul className="flex gap-6 text-sm">
        <li>
          <Link
            href="/"
            className={
              currentPage === "about"
                ? "text-foreground font-medium hover:text-muted-foreground transition-colors"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={
              currentPage === "blogs"
                ? "text-foreground font-medium hover:text-muted-foreground transition-colors"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            blogs
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}
