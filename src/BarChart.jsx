import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const BarChart = () => {
    // const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
    // const data = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]


    const data = {
        labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: ["rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)", "rgba(118,182,188,1.000)", "rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)"]
        }]
    }

    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                align: 'start',
                text: 'Spending - Last 7 days',
            },
        },
    };

    return (
        <Bar options={options} data={data} />
    );
};

export default BarChart;