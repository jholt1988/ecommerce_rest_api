const {Pool, Client} = require('pg');
const {DB} = require('../config')

try{
    const db = new Client({
   user: DB.PGUSER,
  host: DB.PGHOST,
  database: DB.PGDATABASE,
  password: DB.PGPASSWORD,
  port: DB.PGPORT
    });

    db.connect()
} catch (err){
    console.log('error connecting to database')
}



const pool = new Pool({
  user: DB.PGUSER,
  host: DB.PGHOST,
  database: DB.PGDATABASE,
  password: DB.PGPASSWORD,
  port: DB.PGPORT
});

module.exports = {
    query: (text, params) => pool.query(text,params)
}
