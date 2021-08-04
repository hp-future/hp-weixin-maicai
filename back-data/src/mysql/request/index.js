const db = require('../config/db')

const resData = {
  code: 0,
  msg: 'error'
}

function dbGet (sql, ctx) {
  return new Promise((resolve, reject) => {
    db.query(sql, (error, data) => {
      if(error){
        ctx.response.body = resData
        reject(error)
      }else{
        resData.code = 200
        resData.data = data
        resData.msg = 'success'
        ctx.response.body = resData
        resolve(data)
      }
    })
  })
}

module.exports = {
  dbGet
}