import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  return (
    <>
      <div className="min-h-[300vh] pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
