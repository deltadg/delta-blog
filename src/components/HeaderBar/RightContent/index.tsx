import githubIcon from "@/assets/icons/github.svg";
import { useIsDark } from "@/components/BlogContext/hooks";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function RightContent() {
  const isDark = useIsDark()

  return (
    <div className="flex gap-2">
      <ThemeSwitcher />
      <img
        src={githubIcon}
        className={`w-6 h-6 cursor-pointer ${isDark ? "filter invert" : ""}`}
      />
    </div>
  )
}