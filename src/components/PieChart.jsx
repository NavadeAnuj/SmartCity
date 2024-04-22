import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    let newChartInstance = null;
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      newChartInstance = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Diya", "Dhruvi", "Anuj"],
          datasets: [
            {
              label: "Online Collection",
              data: [8000, 5000, 6000], // Sample data for online collection
              backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });

      setChartInstance(newChartInstance);
    };

    createChart();

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ height: "300px", width:"100%" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
