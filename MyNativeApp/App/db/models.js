const Sequelize = require('sequelize')
const db = require('./db')

const Item = db.define('item', {
   // Attributes
   itemName: {
       type: Sequelize.STRING
},
   itemPrice: {
       type: Sequelize.DECIMAL(10,2)
},
    itemDiscount: {
        type: Sequelize.DECIMAL(10,2) 
    },
    itemNewPrice: {
        type: Sequelize.DECIMAL(10,2) 
    }
})



module.exports = Item;