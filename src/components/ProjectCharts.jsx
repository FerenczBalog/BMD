import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


export function BarChart ({chartData}) {
    return (<Bar data={chartData}/>)}

export function PieChart ({chartData}) {
    return (<Pie data={chartData} />)}

