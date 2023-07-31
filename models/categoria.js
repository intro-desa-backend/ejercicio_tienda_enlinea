const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
})

const categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = categoria;