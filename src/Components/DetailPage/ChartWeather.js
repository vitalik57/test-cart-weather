import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const ChartWeather = ({ today }) => {
  useEffect(() => {
    rendChart();
  }, []);
  function rendChart() {
    // const name = today.weather.map(item => item.name);
    // const temp = today.weather.map(item => item.temp);
    // const humidity = today.weather.map(item => item.humidity);
    // const windSpeed = today.weather.map(item => item.windSpeed);
    // const pressure = today.weather.map(item => item.pressure);

    Chart.defaults.font.size = 14;
    Chart.defaults.color = "rgba(255, 255, 255, 0.5)";
    Chart.defaults.borderColor = "rgba(255, 255, 255, 0.2)";
    // const arr = ['22.04','23.04','24.04','25.04','26.04']
    const newChart = new Chart(document.getElementById("charts__line"), {
      type: "line",
      data: {
        labels: [...today.map(item => item.name.substr(0, 6))],
        datasets: [
          {
            data: [...today.map(item => item.temp)],
            color: "#FFFFFF",
            label: "— Temperature, C° ",
            borderColor: "#FF6B09",
            backgroundColor: "#ff6b09",
            color: "rgba(255, 255, 255, 0.5)",
            fill: false
          },
          {
            data: [...today.map(item => item.humidity)],
            label: "— Humidity, % ",
            borderColor: "#0906EB",
            backgroundColor: "#0906EB",
            fill: false
          },
          {
            data: [...today.map(item => item.windSpeed)],
            label: "— Wind Speed, m/s ",
            borderColor: "#EA9A05",
            backgroundColor: "#EA9A05",
            fill: false
          },
          {
            data: [...today.map(item => item.pressure)],
            label: "— Atmosphere Pressure, m/m",
            borderColor: "#067806",
            backgroundColor: "#067806",
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              boxWidth: 10,
              boxHeight: 10
            }
          },

          title: {
            display: true,
            text: "AVERAGE:",
            align: "center"
          }
        },
        responsive: true,
        scales: {
          x: {
            ticks: {
              align: "start"
            }
          },

          y: {
            display: true,
            title: {
              display: true,
              text: "Value of Indicators",
              color: "rgba(255, 255, 255, 0.5)",
              font: {
                family: "Lato",
                size: 14,
                style: "normal",
                lineHeight: 1.2
              },
              padding: { top: 30, left: 0, right: 0, bottom: 0 }
            }
          }
        }
      }
    });
  }
  // const name = today.weather.map(item => item.name);
  // const temp = today.weather.map(item => item.temp);
  // const humidity = today.weather.map(item => item.humidity);
  // const windSpeed = today.weather.map(item => item.windSpeed);
  // const pressure = today.weather.map(item => item.pressure);

  return (
    <>
      <div className="charts">
        <div className="charts__continer">
          <div className="charts__container__else">
            <div className="charts__canvas">
              <canvas id="charts__line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartWeather;
