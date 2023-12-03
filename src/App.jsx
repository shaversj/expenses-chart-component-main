import Header from "./Header.jsx";
import SectionLayout from "./SectionLayout.jsx";

function App() {
  return (
    <>
      <div className={"bg-black min-h-screen flex items-center"}>
        <main className={"bg-cream max-w-screen-sm w-full mx-auto px-4 font-DM-Sans lg:min-w-[1440px] lg:min-h-[1024px] lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-[451px]"}>
          <Header />
          <SectionLayout />
        </main>
      </div>
    </>
  );
}

export default App;
