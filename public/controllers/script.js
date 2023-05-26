// Get the canvas element
var canvas1 = document.getElementById('myChart');
var canvas2 = document.getElementById('myChart2');

var puntaje = localStorage.getItem('puntaje');

// Create a new Chart object
var myChart = new Chart(canvas1, {
  type: 'bar',
  data: {
    labels: ['Puntaje'],
    datasets: [{
      label: 'Puntaje obtenido',
      data: [puntaje],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
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
var myChart = new Chart(canvas2, {
  type: 'bar',
  data: {
    labels: ['Nv1-A', 'Nv2-A', 'Nv3-A', 'Nv1-B', 'Nv2-B', 'Nv1-C', 'Nv2-C'],
    datasets: [{
      label: 'Nivel de aprendizaje',
      data: [32.1428,64.2856,96.4284, 128.5712, 160.717, 192.8598, 225],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
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
