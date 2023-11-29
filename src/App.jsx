

function App() {


  return (
    <>
      <div className={"bg-black min-h-screen flex items-center"}>
          <div className={"bg-cream max-w-screen-sm w-full mx-auto px-3 font-DM-Sans"}>
              <header className={"mt-10 bg-soft-red w-full p-4 rounded-lg flex"}>
                  <div>
                      <span className={"text-very-pale-orange font-extralight"}>My balance</span>
                      <h2 className={"text-[25px] text-very-pale-orange font-bold"}>$921.48</h2>
                  </div>
                  <img className={"w-[60px] ml-auto"} src={"./src/assets/images/logo.svg"} alt={""} />
              </header>
              <main>
                  <h1>Spending - Last 7 days</h1>
              </main>
          </div>
      </div>
    </>
  )
}

export default App
