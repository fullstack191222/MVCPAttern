const mySql2 = require('mysql2')

const knex = require("knex").knex({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'admin1234',
      database : 'flight_system'
    }
  });


  module.exports = {
    knex
  }
