import Hero from "./components/Hero";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/FAQ";

function App() {
  return (
    <div className="App font-poppins  w-full h-screen text-secondary bg-primary  overflow-y-auto">
      <Header />
      <main className=" w-10/12 max-w-[1200px] mt-[80px] mx-auto">
        <Hero />
        <GetStarted />
        <HowItWorks />
        <Faq />
      </main>
    </div>
  );
}

export default App;
