import express from "express";
import Produto from "../models/Produto.js";
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  const produtos = [
    {
      nome: "Kit Abacachos - Forever Liss",
      preco: 120.5,
      categoria: "Cosméticos para cabelo",
      imagem: "abacachos.jpg",
    },
    {
      nome: "Kit Apice Cachos",
      preco: 180,
      categoria: "Cosméticos para cabelo",
      imagem: "apice.jpg",
    },
    {
      nome: "Kit Aphrodite - Hey You",
      preco: 240.9,
      categoria: "Cosméticos para cabelo",
      imagem: "heyyou.jpg",
    },
    { 
      nome: "Touca de cetim", 
      preco: 10.5,
      categoria: "Acessorios" ,
      imagem: "touca.jpg",
    },
    { nome: "Laço de cetim",
      preco: 5.5, 
      categoria: "Acessorios",
      imagem: "laco.jpg",
    },
    { nome: "Fronha de cetim", 
      preco: 20.5, 
      categoria: "Acessorios",
      imagem: "fronha.jpg", 
    },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

export default router;
