import MonthlyDetails from "./MonthlyDetails.jsx";
import BarChart from "./BarChart.jsx";

const SectionLayout = () => {
  return (
    <>
      <section className={"bg-chart-color px-5 py-5 mt-4 mb-[65px] rounded-xl lg:max-w-[542px] lg:relative lg:px-[40px] lg:mt-6 lg:rounded-2xl"}>
        <BarChart />
        <MonthlyDetails />
      </section>
    </>
  );
};

export default SectionLayout;
