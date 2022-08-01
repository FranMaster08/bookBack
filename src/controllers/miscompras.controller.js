const model = require("../model/compras.model");
const misComprasController = {
  getShop: async (req, res, next) => {
    try {
      const { user } = req.params;
      const result = await model.findAll(user);
      res.json({ compras: result });
    } catch (error) {
      res.status(404).json({ data: "ocurrio un error cargando datos " });
    }
  },
  addShop: async (req, res, next) => {
    try {
      const dataRequest = req.query;
      if (Array.isArray(dataRequest.autor)) {
        const datos = dataRequest.autor.map((item, i) => ({
          cantidad: dataRequest.cantidad[i],
          precio: dataRequest.precio[i],
          id_ejemplar: dataRequest.id_ejemplar[i],
          img: dataRequest.img[i],
          titulo: dataRequest.titulo[i],
          autor: dataRequest.autor[i],
          nombreusuario: dataRequest.nombreusuario[i],
        }));
        datos.forEach(async (element) => {
          await model.create(element);
        });
        const result = await model.borrarCarrito(datos[0].nombreusuario);

        res.redirect(
          `http://localhost:3000/miscompras?user=${datos[0].nombreusuario}`
        );
      } else {
        const datos = {
          cantidad: dataRequest.cantidad,
          precio: dataRequest.precio,
          id_ejemplar: dataRequest.id_ejemplar,
          img: dataRequest.img,
          titulo: dataRequest.titulo,
          autor: dataRequest.autor,
          nombreusuario: dataRequest.nombreusuario,
        };

        await model.create(datos);
        await model.borrarCarrito(datos.nombreusuario);
        res.redirect(
          `http://localhost:3000/miscompras?user=${datos.nombreusuario}`
        );
      }
    } catch (error) {
      res.status(404).json({
        data: "ocurrio un error cargando datos ",
        success: false,
      });
    }
  },
  remove: async (req, res, next) => {
    try {
      const libro = req.params.id;
      const user = req.headers.user;
      const result = await model.delete(libro, user);
      res.json({ data: result });
    } catch (error) {
      res.status(404).json({ data: "ocurrio un error cargando datos " });
    }
  },

  updateShop: async (req, res, next) => {
    try {
      const libro = req.body;
      const result = await model.edit(libro);
      res.json({ data: result });
    } catch (error) {
      res.status(404).json({ data: "ocurrio un error cargando datos " });
    }
  },
};

module.exports = misComprasController;
