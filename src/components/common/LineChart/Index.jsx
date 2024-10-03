import React from "react";
import { Line } from "react-chartjs-2";
import CardComp from "../Card";

const LineChartComp = ({ data }) => {
  console.log(data);
  const options = {
    title: {
      display: true,
      text: "Blood Pressure",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 60,
            max: 180,
            stepSize: 20,
          },
        },
      ],
    },
  };
  const userData = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        data: [],
      },
    ],
  };
  return <div>{/* <Line data={userData} options={options} /> */}</div>;
};
export default LineChartComp;
