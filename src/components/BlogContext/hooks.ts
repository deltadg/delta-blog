import { useContext } from "react"
import BlogContext from "."

export const useIsDark = () => {
  const { isDark } = useContext(BlogContext)
  return isDark
}

export const useSwitchTheme = () => {
  const { switchTheme } = useContext(BlogContext)
  return switchTheme
}