import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Total de vistas en el mes',
    },
  },
};

const randomNumber = (param) => Math.floor(Math.random() * param)
const randomColor = (alpha) => `rgba(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)},${alpha ? alpha : 1})`


const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
}

const date = new Date();
const monthName = new Intl.DateTimeFormat("ES-MX", { month: "long" }).format;
const longName = monthName(date).charAt(0).toUpperCase() + monthName(date).substring(1)
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

const daysInCurrentMonth = getDaysInMonth(
  currentYear,
  currentMonth,
);


const listDays = []

for (let i = 1; i <= daysInCurrentMonth; i++) {
  listDays.push(String(i))

}

let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
labels = listDays

export const data = {
  labels,
  datasets: [
    {
      label: longName,
      data: labels.map(() => randomNumber(500)),
      // borderColor: randomColor(),
      backgroundColor: randomColor(0.6),
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => randomNumber(500)),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => randomNumber(500)),
    //   borderColor: 'rgb(53, 100, 235)',
    //   backgroundColor: 'rgba(53, 50, 235, 0.5)',
    // },
  ],
};

export function LineReport() {
  return <Line options={options} data={data} />;
}


export function BarReport() {
  return <Bar options={options} data={data} />;
}
