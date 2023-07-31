const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productoRoutes = require('./routes/productoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');  // Agrega la ruta de pedidos
const categoriasRoutes = require('./routes/categoriasRoutes');

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost/tiendaenlinea', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Crear una instancia de Express
const app = express();

// Middleware para analizar el cuerpo de las peticiones en formato JSON
app.use(bodyParser.json());

// Rutas de la API para los productos, clientes y pedidos
app.use('/productos', productoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);  // Agrega las rutas de pedidos

app.use('/categorias', categoriasRoutes);

// Ruta principal de la API
app.get('/', (req, res) => {
  res.send('API funcionando');
})


// Puerto en el que la API escuchará las peticiones
const port = 3000;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
