// PedidosController.js
import express from 'express';
import Pedido from '../models/Pedido.js';
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
    Pedido.findAll().then((pedidos) => {
        res.render("pedidos", {
            pedidos: pedidos,
        });
    });  // aaa.
});

router.post("/pedidos/new", (req, res) => {
    const numero = req.body.numero;
    const valor = req.body.valor;
    Pedido.create({
        numero: numero,
        valor: valor,
    }).then(() => {
        res.redirect("/pedidos");
    }).catch((error) => {
        console.log(error);
        res.status(500).send("Erro ao cadastrar o pedido.");
    });
});


router.get("/pedidos/delete/:numero", (req, res) => {
    const numero = req.params.numero;

    Pedido.destroy({
        where: {
            numero: numero,
        },
    })
    .then(() => {
        res.redirect("/pedidos");
    })
    .catch((error) => {
        console.log(error);
    });
});

router.get("/pedidos/edit/:numero", (req, res) => {
    const numero = req.params.numero;
    Pedido.findByPk(numero).then((pedido) => {
        res.render("pedidosEdit", {
            pedido: pedido,
        });
    });
});

router.post("/pedidos/update", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;  

  Pedido.update(
      {
          numero: numero,
          valor: valor,
      },
      { where: { numero: numero } }
  )
  .then(() => {
      res.redirect("/pedidos");
  })
  .catch((error) => {
      console.log(error);
  });
});

export default router;