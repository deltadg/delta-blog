import { useIsDark } from "../BlogContext/hooks";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function HeaderBar() {
  const isDark = useIsDark()

  return (
    <div
      className={`
        w-full fixed top-0 left-0 border-b p-4 flex justify-between items-center
        ${isDark ? "bg-black" : "bg-white"}
        ${isDark ? "text-white" : "text-black"}
        ${isDark ? "border-white" : "border-gray-300"}
      `}
    >
      <LeftContent />
      <RightContent />
    </div>
  );
}