import express from "express";
const router = express.Router();

import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  const clientes = [
    {
      nome: "Isabele Queiroz",
      cpf: "123.456.789-00",
      endereco:
        "Rua Pinanga, 76, Condominio Blue, Registro, Estado de Sao Paulo, CEP: 1900-000",
    },
    {
      nome: "Marcos Queiroz",
      cpf: "987.654.321-00",
      endereco:
        "Avenida Clara Gianotti de souza, 120, Centro, Registro, Estado de São Paulo, CEP:1900-000",
    },
    {
      nome: "Marcelo Bruno",
      cpf: "456.789.123-00",
      endereco:
        "Rua Osvaldo Cruz, 27, Vila Romao 1, Registro, Estado de São Paulo, CEP:1900-000",
    },
    {
      nome: "Lola Queiroz",
      cpf: "321.654.987-00",
      endereco:
        "Rua Fuji, 70, Jardim Belas Artes, Registro, Estado de São Paulo, CEP:1900-000",
    },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

export default router;
