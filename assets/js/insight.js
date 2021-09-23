let ctx = document.getElementById("chartSales");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["00.00", "07.00", "12.00", "15.00", "17.00"],
    datasets: [
      {
        label: "Apel",
        data: [0, 5, 4, 6, 7],
        borderColor: "rgb(0, 76, 255)",
        tension: 0.1,
      },
      {
        label: "Bayam",
        data: [3, 4, 3, 2, 1],
        borderColor: "rgb(3, 168, 72)",
        tension: 0.1,
      },
      {
        label: "Cabai",
        data: [1, 2, 4, 3, 4],
        borderColor: "rgb(196, 14, 29)",
        tension: 0.1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        align: "start",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          color: "rgb(255,255,255)",
          font: {
            size: 12,
            weight: 100,
          },
        },
      },
    },
  },
});
