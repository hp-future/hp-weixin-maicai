const mysql = require('mysql')

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'wexin',
})

function query (sql, callback) {
  pool.getConnection((error, connection) => {
    if(error){
      throw(error)
    }else{
      connection.query(sql, (err, rows) => {
        callback(err, rows)
        connection.release()
      })
    }
  })
}

module.exports = { query }