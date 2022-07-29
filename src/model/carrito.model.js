const pool = require("../db");

const carModel = {
  create: async (libro) => {
    try {
      const result = await pool.query(
        `INSERT INTO public.carrito_temp(
            cantidad, precio, id_lineaventa, id_venta, id_ejemplar, img, titulo, autor, nombreusuario)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [...Object.values(libro)]
      );
      return result;
    } catch (error) {
      throw error;
    }
  },
  findAll: async (user) => {
    try {
      const dataCar = await pool.query(
        "SELECT * FROM carrito_temp where nombreusuario= $1",
        [user]
      );
      return dataCar.rows;
    } catch (error) {
      throw error;
    }
  },
  findOne: async (libro) => {
    try {
      const dataCar = await pool.query("SELECT * FROM carrito_temp where ");
      return dataCar.rows;
    } catch (error) {
      throw error;
    }
  },
  edit: async (libro) => {
    try {
      const result = await pool.query(
        `UPDATE public.carrito_temp
        SET cantidad=$1, precio=$2, id_lineaventa=$3, id_venta=$4, id_ejemplar=$5, img=$6, titulo=$7, autor=$8, nombreusuario=$9
        WHERE nombreusuario = $9;`,
        [...Object.values(libro)]
      );

      return result;
    } catch (error) {
      throw error;
    }
  },
  delete: async (libro, user) => {
    try {
      const result = await pool.query(
        `DELETE FROM public.carrito_temp  WHERE nombreusuario = $1 and id_ejemplar= $2 `,
        [user, libro]
      );
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = carModel;
//crear
// carModel.create("fran").then(console.log).catch(console.error);

//leer
//carModel.findAll("tipo").then(console.log).catch(console.error);
// carModel.delete("tipo").then(console.log).catch(console.error);

// modificar

// carModel
//   .delete({
//     cantidad: 1,
//     precio: 1,
//     id_lineaventa: 1,
//     id_venta: 1,
//     id_ejemplar: 1,
//     img: "tipo",
//     titulo: "PACHO",
//     autor: "tipo",
//     nombreusuario: "tipo",
//   })
//   .then(console.log)
//   .catch(console.error);
