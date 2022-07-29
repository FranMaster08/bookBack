const { Pool } = require("pg");
//const { password } = require('pg/lib/defaults')
const { db } = require ('./config');


const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '5432',
    database: 'postgres',
});

module.exports = pool;