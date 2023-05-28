const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.controller')
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json())

// MongoDB Atlas connection string
const connectionString = 'mongodb+srv://edgar:edgar_28@clustencuestas.njxk4gd.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
function conexion() {
  mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Rutas para la creacion de cuentas
app.post('/users',user.create)


app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});


conexion()



