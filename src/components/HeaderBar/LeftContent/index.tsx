import { Terminal } from 'lucide-react'
import s from "./style.module.css"
import { useEffect, useState } from 'react';
import { useIsDark } from '@/components/BlogContext/hooks';

export default function LeftContent() {
  const name = "Delta";
  const [writtingNameLength, setWrittingNameLength] = useState(0);

  const isDark = useIsDark();

  useEffect(() => {
    const interval = setInterval(() => {
      setWrittingNameLength(prev => {
        if (prev !== name.length) {
          return prev + 1;
        }
        return prev;
      })
    }, 500)

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    // If the name is fully written, wait 2s then reset
    if (writtingNameLength === name.length) {
      const timeOut = setTimeout(() => {
        setWrittingNameLength(0);
      }, 3000)

      return () => clearTimeout(timeOut);
    }
  }, [writtingNameLength])

  return (
    <div className="flex align-middle">
      <Terminal className="mr-2" />
      <span className="flex items-center select-none">
        {name.substring(0, writtingNameLength)}
        <span
          className={`
            ml-1 inline-block w-2 h-5 ${s["animate-blink"]}
            ${isDark ? "bg-white" : "bg-black"}
          `}
        />
      </span>
    </div>
  )
}