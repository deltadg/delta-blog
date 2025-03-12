import { Moon, Sun } from "lucide-react";
import { useIsDark, useSwitchTheme } from "../BlogContext/hooks";

export default function ThemeSwitcher() {
  const isDark = useIsDark()
  const switchTheme = useSwitchTheme()

  return (
    <button
      onClick={switchTheme}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  )
}