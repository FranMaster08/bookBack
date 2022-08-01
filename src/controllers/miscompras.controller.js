const model = require("../model/compras.model");
const misComprasController = {
  getShop: async (req, res, next) => {
    try {
      const { user } = req.params;
      const result = await model.findAll(user);
      res.json({ compras: result });
    } catch (error) {
      res
        .status(404)
        .json({ data: "ocurrio un error cargando datos " });
    }
  },
  addShop: async (req, res, next) => {
    try {
      const result = await model.create({
        cantidad: 1,
        precio: 100,
        id_ejemplar: 1,
        img: "",
        titulo: "",
        autor: "",
        nombreusuario: "fran",
      });
      res.redirect('http://localhost:3000/miscompras')
    } catch (error) {
      res
        .status(404)
        .json({
          data: "ocurrio un error cargando datos ",
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
        .json({ data: "ocurrio un error cargando datos " });
    }
  },

  updateShop: async (req, res, next) => {
    try {
      const libro = req.body;
      const result = await model.edit(libro);
      res.json({ data: result });
    } catch (error) {
      res
        .status(404)
        .json({ data: "ocurrio un error cargando datos " });
    }
  },
};

module.exports = misComprasController;
