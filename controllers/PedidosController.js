import express from 'express'
const router = express.Router()

// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
    const pedidos = [
        {numero: 1, valor: 300.50},
        {numero: 2, valor: 62.50},
        {numero: 3, valor: 215.40},
        {numero: 4, valor: 335.90}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})

export default router