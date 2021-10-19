let toggle = document.querySelector(".toggle");
let topbar = document.querySelector(".topbar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    // topbar.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
})

backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
]
borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]

var activeUserChart = document.getElementById('activeUserChart');
var myChart = new Chart(activeUserChart, {
    type: 'polarArea',
    data: {
        labels: ['Google', 'Amazon', 'Facebook', 'Apple', 'Netflix', 'Tesla'],
        datasets: [{
            label: '# of active users',
            data: [12, 19, 3, 9, 5, 3],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
        }]
    },
    options: {
        Responsive: true
    }
});

var earningChart = document.getElementById('earningChart');
var myChart = new Chart(earningChart, {
    type: 'bar',
    data: {
        labels: ['Google', 'Amazon', 'Facebook', 'Apple', 'Netflix', 'Tesla'],
        datasets: [{
            label: 'Earning per Day',
            data: [12, 19, 3, 9, 4, 6],
            backgroundColor: backgroundColor
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});