const MonthlyDetails = () => {
  return (
    <>
      <h1 aria-label={"Dividing Line"} className={"my-6 h-[2.5px] border-t-0 bg-brown-divider opacity-100 dark:opacity-50"}></h1>
      <span className={"text-medium-brown font-light text-[15px] lg:text-lg lg:leading-10"}>Total this month</span>
      <div className={"flex items-center lg:pb-5"}>
        <h2 className={"text-[31px] font-bold text-dark-brown lg:text-[50px] lg:leading-4"}>$478.33</h2>
        <div className={"ml-auto"}>
          <h3 className={"text-dark-brown text-[15px] font-bold text-right lg:text-lg lg:leading-5"}>+2.4%</h3>
          <h3 className={"text-[15px] font-light text-medium-brown lg:text-lg"}>from last month</h3>
        </div>
      </div>
    </>
  );
};

export default MonthlyDetails;
