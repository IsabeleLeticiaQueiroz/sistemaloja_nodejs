import express from "express";
const router = express.Router();
import Produto from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

// ROTA DE CADASTRO DE PRODUTOS
router.post("/produtos/new", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  const imagem = req.body.imagem; // Aqui pegamos o link da imagem diretamente

  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
    imagem: imagem, // Salvamos o link da imagem
  }).then(() => {
    res.redirect("/produtos");
  }).catch((error) => {
    console.log(error);
    res.status(500).send("Erro ao cadastrar o produto.");
  });
});

// ROTA DE EXCLUSÃO
router.get("/produtos/delete/:id", (req, res) => {
  const id = req.params.id;

  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO
router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id).then((produto) => {
    res.render("produtosEdit", {
      produto: produto,
    });
  });
});

// ROTA DE ATUALIZAÇÃO
router.post("/produtos/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  Produto.update(
    {
      nome: nome,
      preco: preco,
      categoria: categoria,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
