const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  fecha: { type: Date, default: Date.now },
  total: { type: Number, required: true },
  estado: { type: String, enum: ['Pendiente', 'Enviado', 'Entregado'], default: 'Pendiente' }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
