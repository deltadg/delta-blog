import { ReactNode, useEffect, useState } from "react";
import BlogContext from ".";

export default function BlogContextProvider({ children }: { children: ReactNode }) {
  const isDarkLocal = localStorage.getItem("isDark") || "false"
  const [isDark, setIsDark] = useState(isDarkLocal === "true")

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark))
  }, [isDark])

  return (
    <BlogContext.Provider value={{ isDark, switchTheme: () => setIsDark(prev => !prev) }}>
      {children}
    </BlogContext.Provider>
  )
}