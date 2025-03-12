import HeaderBar from "../components/HeaderBar";
import Index from "@/pages/Index";

function App() {
  return (
    <>
      <HeaderBar />
      <div className="pt-[57px] h-screen">
        <Index />
      </div>
    </>
  );
}

export default App;
