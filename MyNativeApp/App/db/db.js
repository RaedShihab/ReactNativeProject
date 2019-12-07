const Sequelize = require('sequelize');

 var sequelize = new Sequelize('YYouGzuFZL', 'YYouGzuFZL', 'LopGjJSBcm', {
    host: 'remotemysql.com',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  })

  module.exports = sequelize;