const model = require('../models/categorias');

module.exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await model.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorias' });
    }
}

module.exports.crearCategoria = async (req, res) => {
    try {
        const categoria = new model(req.body);
        await categoria.save();
        res.status(201).json(categoria);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la categoria' });
    }
}

module.exports.actualizarCategoria = async (req, res) => {
    try {
        const categoria = await model.findByIdAndUpdate(req.params.id, req.body);
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la categoria' });
    }
}

module.exports.eliminarCategoria = async (req, res) => {
    try {
        const categoria = await model.findByIdAndDelete(req.params.id);
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar la categoria' });
    }
}
