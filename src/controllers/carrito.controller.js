const model = require("../model/carrito.model");
const carritoController = {
  getCar: async (req, res, next) => {
    try {
      const { user } = req.params;
      const result = await model.findAll(user);
      res.json({ data: result });
    } catch (error) {
      res
        .status(404)
        .json({ data: "ocurrio un error cargando datos del carrito" });
    }
  },
  addCar: async (req, res, next) => {
    try {
      const libro = req.body;
      const result = await model.create(libro);
      res.json({ msg: "Agregado al Carrito", success: true });
    } catch (error) {
      res
        .status(404)
        .json({
          data: "ocurrio un error cargando datos del carrito",
          success: false,
        });
    }
  },
  remove: async (req, res, next) => {
    try {
      const libro = req.params.id;
      const user = req.headers.user
      const result = await model.delete(libro, user);
      res.json({ data: result });
    } catch (error) {
      res
        .status(404)
        .json({ data: "ocurrio un error cargando datos del carrito" });
    }
  },

  updateCar: async (req, res, next) => {
    try {
      const libro = req.body;
      const result = await model.edit(libro);
      res.json({ data: result });
    } catch (error) {
      res
        .status(404)
        .json({ data: "ocurrio un error cargando datos del carrito" });
    }
  },
};

module.exports = carritoController;
