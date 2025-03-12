import logo from "@/assets/logo.png";

export default function IntroductionPart() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 max-w-[1200px] w-full mt-2">
      <img src={logo} className="w-16 h-16" />
      <h1 className="text-4xl font-bold">Hello, We are Delta</h1>
      <p className="text-lg">
        Software engineers who love to write about web development, programming, and more.
      </p>
    </div>
  )
}