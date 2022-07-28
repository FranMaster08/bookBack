const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');
const cors = require ("cors");

const taskRoutes = require('./routes/tasks.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

app.use(taskRoutes)

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(4000)
console.log('Servidor en el puerto 4000');