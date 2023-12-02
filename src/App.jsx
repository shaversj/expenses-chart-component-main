import BarChart from "./BarChart.jsx";


function App() {


  return (
    <>
      <div className={"bg-black min-h-screen flex items-center"}>
          <div className={"bg-cream max-w-screen-sm w-full mx-auto px-3 font-DM-Sans"}>
              <header className={"bg-soft-red w-full p-[1.1rem] rounded-lg flex mt-[68px]"}>
                  <div>
                      <span className={"text-very-pale-orange font-extralight"}>My balance</span>
                      <h2 className={"text-[24px] text-very-pale-orange font-bold"}>$921.48</h2>
                  </div>
                  <img className={"w-[60px] ml-auto"} src={"./src/assets/images/logo.svg"} alt={""} />
              </header>
              <main className={"bg-chart-color px-5 py-5 mt-4 mb-[65px] rounded-xl"}>
                  <div className={"h-[259px]"}>
                      <BarChart />
                  </div>

                  <h1 className={"my-6 h-[2.5px] border-t-0 bg-brown-divider opacity-100 dark:opacity-50"}></h1>
                  <span className={"text-medium-brown font-light text-[15px]"}>Total this month</span>
                  <div className={"flex items-center"}>
                      <h2 className={"text-[31px] font-bold text-dark-brown"}>$478.33</h2>
                      <div className={"ml-auto"}>
                          <h3 className={"text-dark-brown text-[15px] font-bold text-right"}>+2.4%</h3>
                          <h3 className={"text-[15px] font-light text-medium-brown"}>from last month</h3>
                      </div>
                  </div>
              </main>
          </div>
      </div>
    </>
  )
}

export default App
