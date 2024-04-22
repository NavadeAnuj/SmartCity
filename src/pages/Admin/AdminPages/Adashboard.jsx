import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import faker from "faker";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    x: {
      type: "category",
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Monthly Collection",
    },
  },
};

const totalMonthlyData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Total Monthly Collection",
      data: Array.from({ length: 12 }, () =>
        faker.datatype.number({ min: 0, max: 8000 })
      ),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

const cashData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Cash Collection",
      data: Array.from({ length: 6 }, () =>
        faker.datatype.number({ min: 0, max: 8000 })
      ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const onlineData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Online Collection",
      data: Array.from({ length: 6 }, () =>
        faker.datatype.number({ min: -1000, max: 9000 })
      ),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Adashboard() {
  const [chartKey, setChartKey] = useState(0);
  const chartRefs = useRef([null, null, null]);

  useEffect(() => {
    const cleanup = () => {
      chartRefs.current.forEach((chartRef) => {
        if (chartRef && chartRef.chartInstance) {
          chartRef.chartInstance.destroy();
        }
      });
    };

    return cleanup;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Line
        key={chartKey}
        ref={(ref) => (chartRefs.current[0] = ref)}
        style={{ background: "#27293d" }}
        options={options}
        data={totalMonthlyData}
        height={100}
        width={400}
      />
      <div style={{ display: "flex", gap: "10px", width:"100%", marginTop:'10px' }}>
        <div style={{ background: "#27293d", padding: "10px", width:"50%" }}>
          <Line
            key={chartKey + 1}
            ref={(ref) => (chartRefs.current[1] = ref)}
            options={options}
            data={cashData}
            height='300px'
            width="500"
          />
        </div>
        <div style={{ background: "#27293d", padding: "10px" ,width:"50%"}}>
          <Line
            key={chartKey + 2}
            ref={(ref) => (chartRefs.current[2] = ref)}
            options={options}
            data={onlineData}
            height={300}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Adashboard;
