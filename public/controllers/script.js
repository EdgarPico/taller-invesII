var puntaje = localStorage.getItem('puntaje');
//createForm(puntaje)
function createForm(puntaje,rango){
  const content=document.getElementById('usuarios')
  content.innerHTML = ` 
  <form id="user-form" enctype="multipart/form-data">
      <input type="hidden" name="puntaje" value="${puntaje}">
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Nombre Encuestado</label>
        <div class="col-sm-4">
          <input type="text" class="form-control bg-secondary text-white" name="nombre" placeholder="Ingrese el nombre" id="nameU">
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Rango Obtenido</label>
          <div class="col-sm-4">
          <input type="number" name="posrango" value="${rango}" readonly class="form-control bg-secondary text-white">
        </div>
      </div>
      <button type="submit" class="btn btn-warning" onclick="createUserScore()">Guardar Historial</button>
      <button type="button" class="btn btn-warning" onclick="mostHistorial()">Mostrar Historial</button>
  </form>`
}


const createUserScore = () =>{
  const userForm = document.getElementById('user-form')
  userForm.onsubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData(userForm)
   // console.log(formData.get('puntaje'));
    const data = Object.fromEntries(formData.entries())
    console.log(data);
    await fetch('/users',{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }
  alert('El puntaje ha sido almacenado')
}
/*
const loadFile = () => {
  const userFile = document.getElementById('formArchivo')
  userFile.onsubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData(userFile)
   // console.log(formData.get('puntaje'));
    const data = Object.fromEntries(formData.entries())
    console.log(data);
    await fetch('/files',{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }
}
*/
function mostHistorial(){

    var divhisto = document.getElementById('list')
    
    if (divhisto.style.display === "none") {
        divhisto.style.display = "block"
        getUsers()
        getFiles()
    } else {
      divhisto.style.display ="none"
    }
}
function mostFiles(){

  var divhisto = document.getElementById('fileTBL')
  
  if (divhisto.style.display === "none") {
      divhisto.style.display = "block"
      getFiles()
  } else {
    divhisto.style.display ="none"
  }
}
const getUsers = async () => {
  const response = await fetch('/users')
  const users = await response.json()
  //console.log(users);
  const template = userLi => `
        <tr>
          <td>${userLi.puntaje}</td>
          <td>${userLi.posrango}</td>
          <td>${userLi.nombre}</td>
        </tr>
  `
  const userList = document.getElementById('listTBL')
  const bodyTbl = userList.querySelector('#bodyTable')

  bodyTbl.innerHTML = users.map(user => template(user)).join('')

}
const makeGraphs = async () => {

  const res = await fetch('/users')
  const userData = await res.json()


    fetch('/graphs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(resData =>{
      console.log(resData);
    })
    .catch(error =>{
      console.log(error);
    })


 }

window.onre

const getFiles = async () => {
  const response = await fetch('/archivos')
  const files = await response.json()
  //console.log(users);
  const template = userFile => `
        <tr>
          <td>${userFile.name}</td>
          <td>${userFile.contentType}</td>
        </tr>
  `
  const fileList = document.getElementById('listTBLF')
  const bodyTbl = fileList.querySelector('#bodyTableF')

  bodyTbl.innerHTML = files.map(file => template(file)).join('')
}

/** <ol class="list-group list-group-horizontal">
          <li class="list-group-item">
            ${userLi.puntaje}
          </li>
          <li class="list-group-item">
            ${userLi.posrango}
          </li>
          <li class="list-group-item">
            ${userLi.nombre}
          </li>
        </ol>*/


function encontrarRango(valor, rangos) {
  for (var i = 0; i < rangos.length; i++) {
    var rango = rangos[i];
    var inicio = rango[0];
    var fin = rango[1];
    
    if (valor >= inicio && valor <= fin) {
      return i; // Índice del rango donde se encuentra el valor
    }
  }
  
  return -1; // Si el valor no se encuentra en ningún rango
}
function crearRango(puntaje){

  var rangos = [
    [32,64], // rango 0
    [96,128], // rango 1
    [160,192], // rango 2
    [225,400] // rango 3
  ];

    var rangoObtenido = encontrarRango(puntaje,rangos);

    if (rangoObtenido !== -1) {
      console.log("El valor", puntaje, "se encuentra en el rango", rangoObtenido);
      return rangoObtenido
    } else {
      console.log("El valor", puntaje, "no se encuentra en ningún rango");
      return rangoObtenido
    }

  }


const cargarGraficas = () =>{
// Get the canvas element
var canvas1 = document.getElementById('myChart');
var canvas2 = document.getElementById('myChart2');



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
}
 


window.onload = () =>{
  var puntaje = localStorage.getItem('puntaje');
  cargarGraficas()
  createForm(puntaje,crearRango(puntaje))
  makeGraphs()
  //getUsers()
  //createUserScore()
}
