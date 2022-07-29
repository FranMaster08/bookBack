const { Router } = require("express");
const {
  getAllGenero,
  getGenero,
  createGenero,
  deleteGenero,
  updateGenero,
} = require("../controllers/tasks.controller");
const {
  getAllEditorial,
  getEditorial,
  createEditorial,
  deleteEditorial,
  updateEditorial,
} = require("../controllers/tasks.controller");
const {
  getAllLibros,
  getLibro,
  createLibro,
  deleteLibro,
  updateLibro,
} = require("../controllers/tasks.controller");
const {
  getAllAutores,
  getAutor,
  createAutor,
  deleteAutor,
  updateAutor,
} = require("../controllers/tasks.controller");
const {
  getAllAutorxlibro,
  getAutorxlibro,
  createAutorxlibro,
  deleteAutorxlibro,
} = require("../controllers/tasks.controller");
const {
  getAllEjemplar,
  getEjemplar,
  createEjemplar,
  deleteEjemplar,
  updateEjemplar,
  getEjemplar2,
  getEjemplar3,
} = require("../controllers/tasks.controller");
const {
  getAllIngresolibro,
  getIngresolibro,
  createIngresolibro,
  deleteIngresolibro,
  updateIngresolibro,
} = require("../controllers/tasks.controller");
const { getAllRol, getRol } = require("../controllers/tasks.controller");
const { getDetalleLibro } = require("../controllers/tasks.controller");
const {
  getAllUsuarios,
  getUsuario,
  createUsuario,
  deleteUsuario,
  updateUsuario,
  createUsuario2,
  getUsuario2,
  updateUsuario2,
} = require("../controllers/tasks.controller");
const {
  getAllDomicilio,
  getDomicilio,
  createDomicilio,
  deleteDomicilio,
  updateDomicilio,
} = require("../controllers/tasks.controller");
const {
  getAllVentas,
  getVenta,
  createVenta,
} = require("../controllers/tasks.controller");
const {
  getAllLineaventa,
  getLineaventa,
  createLineaventa,
  deleteLineaventa,
  updateLineaventa,
} = require("../controllers/tasks.controller");
const {
  getAllMensajes,
  getMensaje,
  createMensaje,
  deleteMensaje,
  updateMensaje,
} = require("../controllers/tasks.controller");
const {
  getAllFavoritos,
  getFavorito,
  createFavorito,
  deleteFavorito,
  updateFavorito,
} = require("../controllers/tasks.controller");
const {
  getAllResenias,
  getResenia,
  createResenia,
  createResenia2,
  deleteResenia,
  getResenia3,
  getResenia4,
  getAllResenias2,
  getDetalleResenias,
} = require("../controllers/tasks.controller");
const { getUsuarioAdmin } = require("../controllers/tasks.controller");
const carrito = require("../controllers/carrito.controller");

const router = Router();

//Tabla de Genero
router.get("/Generos", getAllGenero);
router.get("/Genero/:id_genero", getGenero);
router.post("/Genero", createGenero); // no se puede insertar por el dominio check
router.delete("/Genero/:id_genero", deleteGenero);
router.put("/Genero/:id_genero", updateGenero);

//Tabla de Editorial
router.get("/Editoriales", getAllEditorial);
router.get("/Editorial/:id_editorial", getEditorial);
router.post("/Editorial", createEditorial);
router.delete("/Editorial/:id_editorial", deleteEditorial);
router.put("/Editorial/:id_editorial", updateEditorial);

//OBTIENE DETALLE DE CADA LIBRO
router.get("/detalleLibro/:isbn", getDetalleLibro);
router.get("/detalleLibro2/:isbn", getDetalleResenias);

//Tabla de Libro
router.get("/Libros", getAllLibros);
router.get("/Libro/:isbn", getLibro);
router.post("/Libro", createLibro);
router.delete("/Libro/:isbn", deleteLibro);
router.put("/Libro/:isbn", updateLibro);

//Tabla de Autor
router.get("/Autores", getAllAutores);
router.get("/Autor/:id_autor", getAutor);
router.post("/Autor", createAutor);
router.delete("/Autor/:id_autor", deleteAutor);
router.put("/Autor/:id_autor", updateAutor);

//Tabla de Autorxlibro
router.get("/Autoresxlibro", getAllAutorxlibro);
router.get("/Autorxlibro/:id", getAutorxlibro);
router.post("/Autorxlibro", createAutorxlibro);
router.delete("/Autorxlibro/:id", deleteAutorxlibro);

//Tabla de Ejemplar
router.get("/Ejemplares", getAllEjemplar);
router.get("/Ejemplar/:id_ejemplar", getEjemplar);
router.post("/Ejemplar", createEjemplar);
router.delete("/Ejemplar/:id_ejemplar", deleteEjemplar);
router.put("/Ejemplar/:id_ejemplar", updateEjemplar);

router.get("/Ejemplar2/:genero", getEjemplar2);
router.get("/Ejemplar3/:titulo", getEjemplar3);

//Tabla de IngresoLibro
router.get("/Ingresolibros", getAllIngresolibro);
router.get("/Ingresolibro/:id_ingresolibro", getIngresolibro);
router.post("/Ingresolibro", createIngresolibro);
router.delete("/Ingresolibro/:id_ingresolibro", deleteIngresolibro);
router.put("/Ingresolibro/:id_ingresolibro", updateIngresolibro);

//Tabla de Rol
router.get("/Roles", getAllRol);
router.get("/Rol/:id_rol", getRol);

//Tabla de Usuario
router.get("/Usuarios", getAllUsuarios);
router.get("/Usuario/:documento", getUsuario);
router.post("/Usuario", createUsuario);
router.delete("/Usuario/:nombreusuario", deleteUsuario);
router.put("/Usuario/:documento", updateUsuario);

router.post("/Usuario2", createUsuario2);
router.get("/Usuario2/:correo", getUsuario2);
router.put("/Usuario2/:correo", updateUsuario2);

router.get("/UsuarioAdmin/:documento", getUsuarioAdmin);

//Tabla de Domicilio
router.get("/Domicilios", getAllDomicilio);
router.get("/Domicilio/:id_dom", getDomicilio);
router.post("/Domicilio", createDomicilio);
router.delete("/Domicilio/:id_dom", deleteDomicilio);
router.put("/Domicilio/:id_dom", updateDomicilio);

//Tabla de Venta
router.get("/Ventas", getAllVentas);
router.get("/Venta/:id_venta", getVenta);
router.post("/Venta", createVenta);

//Tabla de Lineaventa
router.get("/Lineaventas", getAllLineaventa);
router.get("/Lineaventa/:id_lineaventa", getLineaventa);
router.post("/Lineaventa", createLineaventa);
router.delete("/Lineaventa/:id_lineaventa", deleteLineaventa);
router.put("/Lineaventa/:id_lineaventa", updateLineaventa);

//Tabla de Mensaje
router.get("/Mensajes", getAllMensajes);
router.get("/Mensaje/:id_mensaje", getMensaje);
router.post("/Mensaje", createMensaje);
router.delete("/Mensaje/:id_mensaje", deleteMensaje);
router.put("/Mensaje/:id_mensaje", updateMensaje);

//Tabla de Favorito
router.get("/Favoritos", getAllFavoritos);
router.get("/Favorito/:id_fav", getFavorito);
router.post("/Favorito", createFavorito);
router.delete("/Favorito/:id_fav", deleteFavorito);
router.put("/Favorito/:id_fav", updateFavorito);

//Tabla de Resenia
router.get("/Resenias", getAllResenias);
router.get("/Resenia/:id_resenia", getResenia);
router.post("/Resenia", createResenia);
router.delete("/Resenia/:id_resenia", deleteResenia);

router.get("/prueba2/:id_ejemplar", getResenia4);
router.get("/Resenias2", getAllResenias2);

router.post("/Resenia2", createResenia2);

//CARRITO
router.get("/carrito/:user", carrito.getCar);
router.post("/carrito", carrito.addCar);
router.put("/carrito/:user", carrito.updateCar);
router.delete("/carrito/:id", carrito.remove);
module.exports = router;
