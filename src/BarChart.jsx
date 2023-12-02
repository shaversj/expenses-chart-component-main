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
            borderRadius: 2,
            backgroundColor: ["rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)", "rgba(118,182,188,1.000)", "rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)", "rgba(235, 118,94,1.000)"]
        }]
    }

    const options = {
        scales: {
            x: {
                ticks: {
                    font: {
                        family: 'DM Sans',
                        size: 12,
                        color: 'black',
                        weight: '300',
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 20
                    }
                },
                display: false,
                grid: {
                    display: false
                }
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
                labels: {
                    font: {
                        size: 10,
                    }
                }
            },
            title: {
                display: true,
                align: 'start',
                text: 'Spending - Last 7 days',
                color: '#2c1c10',
                font: {
                    family: 'DM Sans',
                    size: 24,
                    weight: 'bold',
                    lineHeight: 1.2,
                },
                padding: {bottom: 28}
            },
        },
    };

    return (
        <Bar options={options} data={data} />
    );
};

export default BarChart;