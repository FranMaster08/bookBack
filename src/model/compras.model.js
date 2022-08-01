const pool = require("../db");

const comprasModel = {
  create: async (libro) => {
    try {
      const result = await pool.query(
        `INSERT INTO public.compras(
            cantidad, precio, id_ejemplar, img, titulo, autor, nombreusuario)
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [...Object.values(libro)]
      );
      return result;
    } catch (error) {
      throw error;
    }
  },
  findAll: async (user) => {
    try {
      const dataCompras = await pool.query(
        "SELECT * FROM compras where nombreusuario= $1",
        [user]
      );
      return dataCompras.rows;
    } catch (error) {
      throw error;
    }
  },
  findOne: async (libro) => {
    try {
      const dataCompras = await pool.query("SELECT * FROM compras where ");
      return dataCompras.rows;
    } catch (error) {
      throw error;
    }
  },
  edit: async (libro) => {
    try {
      const result = await pool.query(
        `UPDATE public.compras
        SET cantidad=$1, precio=$2, id_ejemplar=$3,  img=$4, titulo=$5, autor=$6, nombreusuario=$7, fechacompra=$8
        WHERE nombreusuario = $7 `,
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
        `DELETE FROM public.compras  WHERE nombreusuario = $1 and id_ejemplar= $2 `,
        [user, libro]
      );
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = comprasModel;
