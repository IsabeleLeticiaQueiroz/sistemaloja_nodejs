import express from 'express';
import connection from './config/sequelize-config.js';

import Clientes from "./models/Cliente.js"; 
import Produtos from "./models/Produto.js"; 
import Pedidos from "./models/Pedido.js"; 

import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


// Rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

// Conexão com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso");

    return connection.query('CREATE DATABASE IF NOT EXISTS sistemaloja_Isabele;');
}).then(() => {
    console.log("Banco criado");
    // Sincronizar tabelas
    return Promise.all([
        Clientes.sync({ force: false }), 
        Produtos.sync({ force: false }), 
        Pedidos.sync({ force: false })    
    ]);
}).then(() => {
    console.log("Tabelas sincronizadas com sucesso");
}).catch((error) => {
    console.log("Erro na conexão ou criação do banco:", error);
});

// Rota principal
app.get("/", function(req, res) {
    res.render("index");
});

// Porta 8080
app.listen(8080, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});
