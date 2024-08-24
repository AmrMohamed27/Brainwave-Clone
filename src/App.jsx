import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
