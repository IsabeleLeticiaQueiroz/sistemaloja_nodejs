import express from "express";
const router = express.Router();


import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// ROTA DE CADASTRO DE CLIENTES

router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});

router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;

  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id).then((cliente) => {
    res.render("clientesEdit", {
      cliente: cliente,
    });
  });
});

router.post("/clientes/update", (req, res) => {
  const { id, nome, cpf, endereco } = req.body;


  Cliente.update(
    { nome, cpf, endereco },
    { where: { id } }
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log("Erro ao atualizar cliente:", error); // Exibir o erro detalhado
      res.status(500).send("Erro ao atualizar cliente.");
    });
});
export default router;