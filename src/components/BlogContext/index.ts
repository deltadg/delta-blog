import { createContext } from "react"

const BlogContext = createContext<{
  isDark: boolean,
  switchTheme: () => void
}>({
  isDark: false,
  switchTheme: () => null
})

export default BlogContext