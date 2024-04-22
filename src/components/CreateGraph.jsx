import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const CreateChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    let newChartInstance = null;
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      newChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Diya", "Dhruvi", "Anuj"],
          datasets: [
            {
              label: "Cash",
              data: [6000, 7000, 8000],
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
            {
              label: "Online",
              data: [8000, 5000, 6000],
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      });

      // Add line chart for total collection
      newChartInstance.data.datasets.push({
        label: "Total Collection",
        type: "line",
        data: [14000, 12000, 14000], // Sample data for total collection
        borderColor: "rgba(255, 99, 132, 0.6)",
        fill: false,
        yAxisID: "y-total-collection",
      });

      newChartInstance.options.scales.yTotalCollection = {
        type: "linear",
        display: true,
        position: "right",
        id: "y-total-collection",
        grid: {
          drawOnChartArea: false,
        },
      };

      newChartInstance.update();
      setChartInstance(newChartInstance);
    };

    createChart();

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return <div style={{height:"300px", width:"100%"}}><canvas ref={chartRef} /></div>;
};

export default CreateChart;
