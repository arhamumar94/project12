const Product=require('../../db').Product
const route=require('express').Router();
route.get('/',(req,res)=>{
    Product.findAll()
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((err)=>{
        res.status(502).send({
            error:"can not find"
        })
    })
})
route.post('/',(req,res)=>{
    if(isNaN(req.body.price))
    {
        return res.status(500).send({
            error:"not a number"
        })
    }
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    })
    .then((product)=>{
        res.status(200).send(product)
    })
    .catch((err)=>{
        res.status(502).send({
            error:"can not find"
        })
    })
})
exports=module.exports=route;