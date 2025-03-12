import { useIsDark } from "@/components/BlogContext/hooks";
import IntroductionPart from "@/components/IntroductionPart";

export default function Index() {
  const isDark = useIsDark()

  return (
    <div
      className={`
        flex flex-col items-center w-full h-full px-4
        ${isDark ? "bg-black" : "bg-white"}
        ${isDark ? "text-white" : "text-black"}
      `}
    >
      <IntroductionPart />
    </div>
  )
}