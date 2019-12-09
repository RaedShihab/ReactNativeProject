const express = require('express');
const db = require('./db');
const Item = require('./models');
const router = express.Router();


// app.get('/', (req, res) => res.send('Hello World!'))
router.post('/add-item', (req, res)=> {
    Item.create({
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDiscount: req.body.itemDiscount,
        itemNewPrice: req.body.itemPrice-(req.body.itemPrice* (req.body.itemDiscount/100))
    })
    .then(item => { res.sendStatus(200); console.log(item)})
})

router.post('/get-items' ,(req, res) => {
    Item.findAll().then( ()=> res.sendStatus(200))
})

db.sync();

module.exports = router;