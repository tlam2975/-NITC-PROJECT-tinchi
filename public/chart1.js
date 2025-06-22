var ctx1 = document.getElementById("chart1").getContext("2d");
var chart1 = new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: ["Đã hoàn thành", "Chưa hoàn thành"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 130 - 12],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
            },
            color: '#fff',
        },
        legend: {
            display: true
        }
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
    },
},
plugins: [ChartDataLabels]
});

var ctx2 = document.getElementById('stackedBarChart').getContext('2d');
var stackedBarChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['GDTC', 'Đại cương', 'Cơ sở ngành', 'Chuyên ngành', 'Tự chọn'],
        datasets: [
            {
                label: 'Đã hoàn thành',
                data: [10, 20, 13, 15, 20],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Đang hoàn thành',
                data: [20, 30, 23, 25, 30],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Chưa hoàn thành',
                data: [30, 40, 33, 35, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            x: {
                stacked: true // Kích hoạt chế độ chồng cho trục X
            },
            y: {
                stacked: true // Kích hoạt chế độ chồng cho trục Y
            }
        },
        plugins: {
            legend: {
                display: true // Hiển thị chú thích
            }
        }
    }
});

