import BarChart from "./BarChart.jsx";


function App() {


  return (
    <>
      <div className={"bg-black min-h-screen flex items-center"}>
          <div className={"bg-cream max-w-screen-sm w-full mx-auto px-4 font-DM-Sans lg:min-w-[1440px] lg:min-h-[1024px] lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-[451px]"}>
              <header className={"bg-soft-red w-full px-[1.2rem] py-[1.1rem] rounded-lg flex mt-[68px] lg:max-w-[542px] lg:px-[32px] lg:py-[28px] lg:rounded-3xl"}>
                  <div>
                      <span className={"text-very-pale-orange font-extralight lg:text-[18px]"}>My balance</span>
                      <h2 className={"text-[24px] text-very-pale-orange font-bold lg:text-[32px]"}>$921.48</h2>
                  </div>
                  <img className={"w-[60px] lg:w-[72px] ml-auto sm:mr-1"} src={"./src/assets/images/logo.svg"} alt={""} />
              </header>
              <main className={"bg-chart-color px-5 py-5 mt-4 mb-[65px] rounded-xl lg:max-w-[542px] lg:relative lg:px-[40px] lg:mt-6 lg:rounded-2xl"}>
                  <div className={"relative right-1.5 h-[260px] w-[315px] lg:w-[480px]  lg:h-[300px] lg:right-2.5"}>
                      <BarChart />
                  </div>

                  <h1 className={"my-6 h-[2.5px] border-t-0 bg-brown-divider opacity-100 dark:opacity-50"}></h1>
                  <span className={"text-medium-brown font-light text-[15px] lg:text-lg lg:leading-10"}>Total this month</span>
                  <div className={"flex items-center lg:pb-5"}>
                      <h2 className={"text-[31px] font-bold text-dark-brown lg:text-[50px] lg:leading-4"}>$478.33</h2>
                      <div className={"ml-auto"}>
                          <h3 className={"text-dark-brown text-[15px] font-bold text-right lg:text-lg lg:leading-5"}>+2.4%</h3>
                          <h3 className={"text-[15px] font-light text-medium-brown lg:text-lg"}>from last month</h3>
                      </div>
                  </div>
              </main>
          </div>
      </div>
    </>
  )
}

export default App
