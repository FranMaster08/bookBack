const pool = require('../db');

//TABLA DE GENERO
const getAllGenero = async(req, res, next) => {
    try {
        const allGenero = await pool.query('SELECT * FROM genero')
        res.json(allGenero.rows);
    } catch {
        next(error)
    }
};

const getGenero = async(req, res, next) => {
    try {
        const { id_genero } = req.params
        const result = await pool.query("SELECT * FROM genero WHERE id_genero = $1", [id_genero])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Tarea no encontrada"
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const createGenero = async(req, res, next) => {
    try {
        const { tipo, id_genero } = req.body;
        const result = await pool.query("INSERT INTO genero (tipo, id_genero) VALUES ($1, $2) RETURNING *", [
            tipo,
            id_genero
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteGenero = async(req, res, next) => {

    try {
        const { id_genero } = req.params;

        const result = await pool.query("DELETE FROM genero WHERE id_genero = $1", [id_genero]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Tarea no encontrada",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateGenero = async(req, res, next) => {
    try {

        const { id_genero } = req.params;
        const { tipo } = req.body;

        const result = await pool.query("UPDATE genero SET tipo = $1 WHERE id_genero = $2 RETURNING *", [tipo, id_genero]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Tarea no encontrada",
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE EDITORIAL
const getAllEditorial = async(req, res, next) => {
    try {
        const allEditorial = await pool.query('SELECT * FROM editorial')
        res.json(allEditorial.rows);
    } catch {
        next(error)
    }
};

const getEditorial = async(req, res, next) => {
    try {
        const { id_editorial } = req.params
        const result = await pool.query("SELECT * FROM editorial WHERE id_editorial = $1", [id_editorial])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Tarea no encontrada"
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const createEditorial = async(req, res, next) => {
    try {
        const { nombre, id_editorial } = req.body;
        const result = await pool.query("INSERT INTO editorial (nombre, id_editorial) VALUES ($1, $2) RETURNING *", [
            nombre,
            id_editorial
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteEditorial = async(req, res, next) => {

    try {
        const { id_editorial } = req.params;

        const result = await pool.query("DELETE FROM editorial WHERE id_editorial = $1", [id_editorial]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Editorial no encontrada",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateEditorial = async(req, res, next) => {
    try {

        const { id_editorial } = req.params;
        const { nombre } = req.body;

        const result = await pool.query("UPDATE editorial SET nombre = $1 WHERE id_editorial = $2 RETURNING *", [nombre, id_editorial]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Editorial no encontrada",
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE LIBRO

const getAllLibros = async(req, res, next) => {
    try {
        const AllLibros = await pool.query('SELECT * FROM libro WHERE id_genero = 5555')
        res.json(AllLibros.rows);
    } catch (error) {
        next(error);
    }
}

const getLibro = async(req, res, next) => {
    try {
        const { isbn } = req.params;
        const result = await pool.query("SELECT * FROM libro WHERE isbn = $1", [isbn]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Libro no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createLibro = async(req, res, next) => {
    const { id_genero, id_editorial, titulo, isbn, sinopsis } = req.body
    try {
        const result = await pool.query("INSERT INTO libro (id_genero, id_editorial, titulo, isbn, sinopsis) VALUES ( $1, $2, $3, $4, $5) RETURNING *", [
            id_genero,
            id_editorial,
            titulo,
            isbn,
            sinopsis
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteLibro = async(req, res, next) => {
    try {
        const { isbn } = req.params;

        const result = await pool.query("DELETE FROM libro WHERE isbn = $1", [isbn]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "El libro no existe",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};


const updateLibro = async(req, res, next) => {
    try {
        const { isbn } = req.params;
        const { titulo, sinopsis } = req.body;

        const result = await pool.query('UPDATE libro SET titulo = $1, sinopsis = $2 WHERE isbn = $3 RETURNING *', [titulo, sinopsis, isbn]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'El libro no existe',
            });
        0
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//OBTIENE EL DETALLE DEL COMPONENTE LIBRO

const getDetalleLibro = async(req, res, next) => {
    try {
        const { isbn } = req.params;
        const result = await pool.query("SELECT * FROM vista_ejemplar2 WHERE isbn = $1", [isbn]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Libro no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};


const getDetalleResenias = async(req, res, next) => {
    try {
        const { isbn } = req.params;
        const result = await pool.query("SELECT * FROM reseniastotal2 WHERE isbn = $1", [isbn]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Libro no encontrado",
            });

        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};


//TABLA DE AUTOR
const getAllAutores = async(req, res, next) => {
    try {
        const allAutores = await pool.query('SELECT * FROM autor')
        res.json(allAutores.rows);
    } catch {
        next(error)
    }
};

const getAutor = async(req, res, next) => {
    try {
        const { id_autor } = req.params
        const result = await pool.query("SELECT * FROM autor WHERE id_autor = $1", [id_autor])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Autor no encontrado"
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const createAutor = async(req, res, next) => {
    try {
        const { nombre, apellido, id_autor } = req.body;
        const result = await pool.query("INSERT INTO autor (nombre, apellido, id_autor) VALUES ($1, $2, $3) RETURNING *", [
            nombre,
            apellido,
            id_autor
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteAutor = async(req, res, next) => {

    try {
        const { id_autor } = req.params;

        const result = await pool.query("DELETE FROM autor WHERE id_autor = $1", [id_autor]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Autor no encontrado",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateAutor = async(req, res, next) => {
    try {

        const { id_autor } = req.params;
        const { nombre, apellido } = req.body;

        const result = await pool.query("UPDATE autor SET nombre = $1, apellido = $2 WHERE id_autor = $3 RETURNING *", [nombre, apellido, id_autor]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Autor no encontrado",
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE AUTORXLIBRO
const getAllAutorxlibro = async(req, res, next) => {
    try {
        const allAutorxlibro = await pool.query('SELECT * FROM autorxlibro')
        res.json(allAutorxlibro.rows);
    } catch {
        next(error)
    }
};

const getAutorxlibro = async(req, res, next) => {
    try {
        const { id } = req.params
        const result = await pool.query("SELECT * FROM autorxlibro WHERE id = $1", [id])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Autor por libro no existe"
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const createAutorxlibro = async(req, res, next) => {
    try {
        const { id, id_autor, isbn } = req.body;
        const result = await pool.query("INSERT INTO autorxlibro (id, id_autor,  isbn) VALUES ($1, $2, $3) RETURNING *", [
            id,
            id_autor,
            isbn
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteAutorxlibro = async(req, res, next) => {

    try {
        const { id } = req.params;

        const result = await pool.query("DELETE FROM autorxlibro WHERE id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Autor por libro no encontrado",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

//TABLA DE EJEMPLAR
const getAllEjemplar = async(req, res, next) => {
    try {
        const AllEjemplar = await pool.query('SELECT * FROM ejemplar')
        res.json(AllEjemplar.rows);
    } catch (error) {
        next(error);
    }
}

const getEjemplar = async(req, res, next) => {
    try {
        const { id_ejemplar } = req.params;
        const result = await pool.query("SELECT * FROM ejemplar WHERE id_ejemplar = $1", [id_ejemplar]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Libro no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const getEjemplar2 = async(req, res, next) => {
    try {
        const { genero } = req.params;
        const result = await pool.query("SELECT * FROM ejemplar WHERE genero = $1", [genero]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Libro no encontrado",
            });

        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const getEjemplar3 = async(req, res, next) => {
    try {
        const { titulo } = req.params;
        const result = await pool.query("SELECT * FROM ejemplar WHERE titulo = $1", [titulo]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Libro no encontrado",
            });

        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};



const createEjemplar = async(req, res, next) => {
    console.log(req.body);
    const { titulo, sinopsis, editorial, autor, anioedicion, tipoencuadernado, genero, stock, precioactual, isbn, img } = req.body
    try {
        const result = await pool.query("INSERT INTO ejemplar (titulo, sinopsis, editorial, autor, anioedicion, tipoencuadernado, genero, stock, precioactual, img, isbn) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *", [
            titulo,
            sinopsis,
            editorial,
            autor,
            anioedicion,
            tipoencuadernado,
            genero,
            stock,
            precioactual,
            img, 
            isbn
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteEjemplar = async(req, res, next) => {
    try {
        const { id_ejemplar } = req.params;

        const result = await pool.query("DELETE FROM ejemplar WHERE id_ejemplar = $1", [id_ejemplar]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "El libro no existe",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};


const updateEjemplar = async(req, res, next) => {
    try {
        const { id_ejemplar } = req.params;
        const { titulo, sinopsis, editorial, autor, anioedicion, tipoencuadernado, genero, stock, precioactual, img, isbn} = req.body;

        const result = await pool.query('UPDATE ejemplar SET titulo = $1, sinopsis = $2, editorial = $3, autor = $4, anioedicion = $5, tipoencuadernado = $6, genero =$7, stock = $8, precioactual = $9,  img = $10, isbn = $11 WHERE id_ejemplar = $12 RETURNING *', [titulo, sinopsis, editorial, autor, anioedicion, tipoencuadernado, genero, stock, precioactual, img,isbn, id_ejemplar]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'El ejemplar no existe',
            });
        
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};


//TABLA DE INGRESOLIBRO
const getAllIngresolibro = async(req, res, next) => {
    try {
        const allIngresoolibro = await pool.query('SELECT * FROM ingresolibro')
        res.json(allIngresoolibro.rows);
    } catch {
        next(error)
    }
};

const getIngresolibro = async(req, res, next) => {
    try {
        const { id_ingresolibro } = req.params
        const result = await pool.query("SELECT * FROM ingresolibro WHERE id_ingresolibro = $1", [id_ingresolibro])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Tarea no encontrada"
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const createIngresolibro = async(req, res, next) => {
    try {
        const { fecha, cantidad, id_ingresolibro, id_ejemplar } = req.body;
        const result = await pool.query("INSERT INTO ingresolibro (fecha, cantidad, id_ingresolibro, id_ejemplar) VALUES ($1, $2, $3, $4) RETURNING *", [
            fecha,
            cantidad,
            id_ingresolibro,
            id_ejemplar
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteIngresolibro = async(req, res, next) => {

    try {
        const { id_ingresolibro } = req.params;

        const result = await pool.query("DELETE FROM ingresolibro WHERE id_ingresolibro = $1", [id_ingresolibro]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Tarea no encontrada",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateIngresolibro = async(req, res, next) => {
    try {

        const { id_ingresolibro } = req.params;
        const { fecha, cantidad, id_ejemplar } = req.body;

        const result = await pool.query("UPDATE ingresolibro SET fecha = $1, cantidad = $2, id_ejemplar = $3 WHERE id_ingresolibro = $4 RETURNING *", [fecha, cantidad, id_ejemplar, id_ingresolibro]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Tarea no encontrada",
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE ROL
const getAllRol = async(req, res, next) => {
    try {
        const AllRol = await pool.query('SELECT * FROM rol')
        res.json(AllRol.rows);
    } catch (error) {
        next(error);
    }
}

const getRol = async(req, res, next) => {
    try {
        const { id_rol } = req.params;
        const result = await pool.query("SELECT * FROM rol WHERE id_rol = $1", [id_rol]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Rol no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE USUARIO
const getAllUsuarios = async (req, res, next) => {
    try {
        const AllUsuarios = await pool.query('SELECT * FROM usuario')
        res.json(AllUsuarios.rows);
    } catch (error) {
        next(error);
    }
}

const getUsuario = async (req, res, next) => {
    try {
        const { documento } = req.params;
        const result = await pool.query ("SELECT * FROM usuario WHERE documento = $1", [documento]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message:"Usuario no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createUsuario = async (req, res, next) => {
    const { nombreusuario, nombre, apellido, correo, telefono, documento, codigo, id_rol } = req.body
    try {
        const result = await pool.query("INSERT INTO libro (nombreusuario, nombre, apellido, correo, telefono, documento, codigo, id_rol) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [
            nombreusuario,
            nombre,
            apellido,
            correo, 
            telefono,
            documento,
            codigo,
            id_rol
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createUsuario2 = async (req, res, next) => {
    const { correo, id_rol, nombreyapellido, nombreusuario, telefono, documento, codigo } = req.body
    try {
        const result = await pool.query("INSERT INTO usuario (correo, id_rol, nombreyapellido, nombreusuario) VALUES ( $1, $2, $3, $4) RETURNING *", [
            correo, 
            id_rol, 
            nombreyapellido, 
            nombreusuario
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const getUsuario2 = async (req, res, next) => {
    try {
        const { correo } = req.params;
        const result = await pool.query ("SELECT * FROM usuario WHERE correo = $1", [correo]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message:"Usuario no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const updateUsuario2 = async (req, res, next) => {
    try {
        const { correo } = req.params;
        const {  nombreusuario, documento, telefono } = req.body;
    
        const result = await pool.query('UPDATE usuario SET  nombreusuario = $2, documento = $3, telefono = $4 WHERE correo = $1 RETURNING *', [
            correo,
            nombreusuario, 
            documento, 
            telefono
         ]);
    
        if (result.rows.length === 0)
            return res.status(404).json({
                message:'Usuario no encontrado',
            });
    0
        return res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
};

const getUsuarioAdmin = async (req, res, next) => {
    try {
        const { documento } = req.params;
        const result = await pool.query ("SELECT * FROM usuario WHERE documento = $1", [documento]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message:"Usuario no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const deleteUsuario = async (req, res, next) => {
    try {
        const { nombreusuario } = req.params;

        const result = await pool.query("DELETE FROM usuario WHERE nombreusuario = $1", [nombreusuario]);
    
        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Usuario no encontrado",
            });
    
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};


const updateUsuario = async (req, res, next) => {
    try {
        const { documento } = req.params;
        const { nombreusuario, nombreyapellido, correo, telefono, codigo, id_rol } = req.body;
    
        const result = await pool.query('UPDATE usuario SET nombreusuario = $1, nombreyapellido = $2, correo = $3, telefono =$4, codigo = $5, id_rol = $6 RETURNING *', [nombreusuario, nombreyapellido, correo, telefono, documento, codigo, id_rol ]);
    
        if (result.rows.length === 0)
            return res.status(404).json({
                message:'Usuario no encontrado',
            });
    0
        return res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
};

//TABLA DE DOMICILIO
const getAllDomicilio = async(req, res, next) => {
    try {
        const allDomicilio = await pool.query('SELECT * FROM domicilio')
        res.json(allDomicilio.rows);
    } catch {
        next(error)
    }
};

const getDomicilio = async(req, res, next) => {
    try {
        const { id_dom } = req.params
        const result = await pool.query("SELECT * FROM domicilio WHERE id_dom = $1", [id_dom])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Tarea no encontrada"
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const createDomicilio = async(req, res, next) => {
    try {
        const { direccion, calle, numero, piso, depto, provincia, ciudad, id_dom, nombreusuario } = req.body;
        const result = await pool.query("INSERT INTO domicilio (direccion, calle, numero, piso, depto, provincia, ciudad, id_dom, nombreusuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [
            direccion,
            calle,
            numero,
            piso,
            depto,
            provincia,
            ciudad,
            id_dom,
            nombreusuario
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

const deleteDomicilio = async(req, res, ne) => {

    try {
        const { id_dom } = req.params;

        const result = await pool.query("DELETE FROM domicilio WHERE id_dom = $1", [id_dom]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Tarea no encontrada",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

const updateDomicilio = async(req, res, next) => {
    try {

        const { id_dom } = req.params;
        const { direccion, calle, numero, piso, depto, provincia, ciudad } = req.body;

        const result = await pool.query("UPDATE domicilio SET direccion = $1, calle = $2, numero = $3, piso = $4, depto = $5, provincia = $6, ciudad = $7 WHERE id_dom = $3 RETURNING *", [direccion, calle, numero, piso, depto, provincia, ciudad, id_dom]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Tarea no encontrada",
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }

};

//TABLA DE VENTA
const getAllVentas = async(req, res, next) => {
    try {
        const Allventa = await pool.query('SELECT * FROM venta')
        res.json(Allventa.rows);
    } catch (error) {
        next(error);
    }
}

const getVenta = async(req, res, next) => {
    try {
        const { id_venta } = req.params;
        const result = await pool.query("SELECT * FROM venta WHERE id_venta = $1", [id_venta]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "No hay ventas aun",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createVenta = async(req, res, next) => {
        const { metodopago, fecha, id_venta, id_dom, nombreusuario, estado } = req.body
        try {
            const result = await pool.query("INSERT INTO venta (metodopago, fecha, id_venta, id_dom, nombreusuario, estado) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *", [
                metodopago,
                fecha,
                id_venta,
                id_dom,
                nombreusuario,
                estado
                
            ]);

            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    }
    //TABLA DE LINEAVENTA
const getAllLineaventa = async(req, res, next) => {
    try {
        const AllLineaventa = await pool.query('SELECT * FROM lineaventa')
        res.json(AllLineaventa.rows);
    } catch (error) {
        next(error);
    }
}

const getLineaventa = async(req, res, next) => {
    try {
        const { id_lineaventa } = req.params;
        const result = await pool.query("SELECT * FROM lineaventa WHERE id_lineaventa = $1", [id_lineaventa]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Aun no hay una linea de venta",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createLineaventa = async(req, res, next) => {
    const { cantidad, precio, id_lineaventa, id_venta, id_ejemplar, nombreusuario } = req.body
    try {
        const result = await pool.query("INSERT INTO lineaventa (cantidad, precio, id_lineaventa, id_venta, id_ejemplar, nombreusuario) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *", [
            cantidad, precio, id_lineaventa, id_venta, id_ejemplar, nombreusuario
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteLineaventa = async(req, res, next) => {
    try {
        const { id_lineaventa } = req.params;

        const result = await pool.query("DELETE FROM lineaventa WHERE id_lineaventa = $1", [id_lineaventa]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No existe la linea de venta",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};


const updateLineaventa = async(req, res, next) => {
    try {
        const { id_lineaventa } = req.params;
        const { cantidad, precio, id_venta, id_ejemplar, nombreusuario } = req.body;

        const result = await pool.query('UPDATE lineaventa SET cantidad = $1, precio = $2, id_venta = $4, id_ejemplar = $5, nombreusuario = $6 WHERE id_lineaventa = $3 RETURNING *', [cantidad, precio, id_lineaventa, id_venta, id_ejemplar, nombreusuario]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'No existe la linea de venta',
            });
        0
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE MENSAJE
const getAllMensajes = async(req, res, next) => {
    try {
        const AllMensajes = await pool.query('SELECT * FROM mensaje')
        res.json(AllMensajes.rows);
    } catch (error) {
        next(error);
    }
}

const getMensaje = async(req, res, next) => {
    try {
        const { id_mensaje } = req.params;
        const result = await pool.query("SELECT * FROM mensaje WHERE id_mensaje = $1", [id_mensaje]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createMensaje = async(req, res, next) => {
    const { mensaje, fecha, id_mensaje, nombreusuario } = req.body
    try {
        const result = await pool.query("INSERT INTO mensaje (mensaje, fecha, id_mensaje, nombreusuario) VALUES ( $1, $2, $3, $4) RETURNING *", [
            mensaje,
            fecha,
            id_mensaje,
            nombreusuario
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteMensaje = async(req, res, next) => {
    try {
        const { id_mensaje } = req.params;

        const result = await pool.query("DELETE FROM mensaje WHERE id_mensaje = $1", [id_mensaje]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "El usuario no existe",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};


const updateMensaje = async(req, res, next) => {
    try {
        const { id_mensaje } = req.params;
        const { mensaje, fecha, nombreusuario } = req.body;

        const result = await pool.query('UPDATE mensaje SET mensaje = $1, fecha = $2, id_mensaje = $3, nombreusuario = $4 RETURNING *', [mensaje, fecha, id_mensaje, nombreusuario]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'El usuario no existe',
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE FAVORITO
const getAllFavoritos = async(req, res, next) => {
    try {
        const AllFavoritos = await pool.query('SELECT * FROM favorito')
        res.json(AllFavoritos.rows);
    } catch (error) {
        next(error);
    }
}

const getFavorito = async(req, res, next) => {
    try {
        const { id_fav } = req.params;
        const result = await pool.query("SELECT * FROM favorito WHERE id_fav = $1", [id_fav]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createFavorito = async(req, res, next) => {
    const { id_fav, nombreusuario, isbn } = req.body
    try {
        const result = await pool.query("INSERT INTO favorito (id_fav, nombreusuario, isbn) VALUES ( $1, $2, $3) RETURNING *", [
            id_fav,
            nombreusuario,
            isbn
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteFavorito = async(req, res, next) => {
    try {
        const { id_fav } = req.params;

        const result = await pool.query("DELETE FROM favorito WHERE id_fav = $1", [id_fav]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "El usuario no existe",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};


const updateFavorito = async(req, res, next) => {
    try {
        const { id_fav } = req.params;
        const { nombreusuario, isbn } = req.body;

        const result = await pool.query('UPDATE favorito SET id_fav = $1, nombreusuario = $2, isbn = $3 RETURNING *', [id_fav, nombreusuario, isbn]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'El usuario no existe',
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

//TABLA DE RESENIA
const getAllResenias = async(req, res, next) => {
    try {
        const AllResenias = await pool.query('SELECT resenias, nombreusuario, id_resenia, isbn FROM resenia')
        res.json(AllResenias.rows);
    } catch (error) {
        next(error);
    }
}

const getAllResenias2 = async(req, res, next) => {
    try {
        const AllResenias = await pool.query('SELECT resenias, nombreusuario, id_resenia, isbn FROM reseniastotal2')
        res.json(AllResenias.rows);
    } catch (error) {
        next(error);
    }
}


// esta uso 
const getResenia4 = async(req, res, next) => {
    try {
        const { id_ejemplar } = req.params;
        const result = await pool.query("SELECT * FROM reseniastotal2 WHERE id_ejemplar = $1", [id_ejemplar]);

        res.json(result.rows);

    } catch (error) {
        next(error);
    }
};

const getResenia = async(req, res, next) => {
    try {
        const { id_resenia } = req.params;
        const result = await pool.query("SELECT resenias, nombreusuario FROM resenia WHERE id_resenia = $1", [id_resenia]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado",
            });

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};


// cambiar el isbn por id_ejemplar
const createResenia = async(req, res, next) => {
    const { resenias, calificacion, nombreusuario, isbn } = req.body
    try {
        const result = await pool.query("INSERT INTO resenia (resenias, isbn) VALUES ( $1, $2) RETURNING *", [
            resenias,
            isbn
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createResenia2 = async(req, res, next) => {
    const { resenias, calificacion, nombreusuario, isbn } = req.body
    try {
        const result = await pool.query("INSERT INTO resenia (resenias, isbn, nombreusuario) VALUES ( $1, $2, $3) RETURNING *", [
            resenias,
            isbn,
            nombreusuario
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteResenia = async(req, res, next) => {
    try {
        const { id_resenia } = req.params;

        const result = await pool.query("DELETE FROM resenia WHERE id_resenia = $1", [id_resenia]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "El usuario no existe",
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    //GENERO
    getAllGenero,
    getGenero,
    createGenero,
    deleteGenero,
    updateGenero,
    //EDITORIAL
    getAllEditorial,
    getEditorial,
    createEditorial,
    deleteEditorial,
    updateEditorial,
    //LIBRO
    getAllLibros,
    getLibro,
    createLibro,
    deleteLibro,
    updateLibro,
    // Detalle libro
    getDetalleLibro,
    //AUTOR
    getAllAutores,
    getAutor,
    createAutor,
    deleteAutor,
    updateAutor,
    //AUTORXLIBRO
    getAllAutorxlibro,
    getAutorxlibro,
    createAutorxlibro,
    deleteAutorxlibro,
    //EJEMPLAR
    getAllEjemplar,
    getEjemplar,
    createEjemplar,
    deleteEjemplar,
    updateEjemplar,
    //INGRESOLIBRO
    getAllIngresolibro,
    getIngresolibro,
    createIngresolibro,
    deleteIngresolibro,
    updateIngresolibro,
    //ROL
    getAllRol,
    getRol,
    //USUARIO
    getAllUsuarios,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    //DOMICILIO
    getAllDomicilio,
    getDomicilio,
    createDomicilio,
    deleteDomicilio,
    updateDomicilio,
    //VENTA
    getAllVentas,
    getVenta,
    createVenta,
    //LINEAVENTA
    getAllLineaventa,
    getLineaventa,
    createLineaventa,
    deleteLineaventa,
    updateLineaventa,
    //MENSAJE
    getAllMensajes,
    getMensaje,
    createMensaje,
    deleteMensaje,
    updateMensaje,
    //FAVORITO
    getAllFavoritos,
    getFavorito,
    createFavorito,
    deleteFavorito,
    updateFavorito,
    //RESENIA
    getAllResenias,
    getAllResenias2,
    getResenia,
    createResenia,
    deleteResenia,
    getResenia4,
    getDetalleResenias,

    createResenia2,
    getUsuario2,
    createUsuario2,
    updateUsuario2,

    getUsuarioAdmin,

    getEjemplar2,
    getEjemplar3
    
}