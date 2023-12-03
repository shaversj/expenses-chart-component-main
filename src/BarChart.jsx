import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarChart = () => {
  const data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    datasets: [
      {
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        borderRadius: 4,
        borderSkipped: false,
        barThickness: window.innerWidth < 1440 ? 32 : 50,
        backgroundColor: [
          "rgba(235, 118,94,1.000)",
          "rgba(235, 118,94,1.000)",
          "rgba(118,182,188,1.000)",
          "rgba(235, 118,94,1.000)",
          "rgba(235, 118,94,1.000)",
          "rgba(235, 118,94,1.000)",
          "rgba(235, 118,94,1.000)",
        ],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        border: {
          display: false,
        },
        ticks: {
          font: {
            family: "DM Sans",
            size: window.innerWidth < 1440 ? 12 : 15,
            color: "#93867b",
            weight: "300",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 20,
          },
        },
        display: false,
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        display: true,
        callbacks: {
          title: () => null,
        },
      },
      legend: {
        display: false,
        labels: {
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        align: "start",
        text: window.innerWidth < 1440 ? " Spending - Last 7 days" : " Spending - Last 7 days",
        color: "#2c1c10",
        font: {
          family: "DM Sans",
          size: window.innerWidth < 1440 ? 24 : 33,
          weight: "bold",
          lineHeight: 1.2,
        },
        padding: window.innerWidth < 1440 ? { bottom: 28, top: 5 } : { bottom: 40, top: 10 },
      },
    },
  };

  let width = window.innerWidth < 1440 ? "350px" : "460px";

  return (
    <div className={"relative right-1.5 h-[260px] w-[315px] lg:w-[480px]  lg:h-[300px] lg:right-2.5"}>
      <Bar options={options} data={data} width={width} />
    </div>
  );
};

export default BarChart;
