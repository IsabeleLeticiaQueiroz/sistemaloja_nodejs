import express from 'express';
const app = express();
import connection from './config/sequelize-config.js';

import Clientes from "./models/Cliente.js"; 
import Produtos from "./models/Produto.js"; 
import Pedidos from "./models/Pedido.js"; 

import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from "./controllers/UsersController.js";

// Importando o gerador de sessões do express
import session from "express-session"
// Importando o middleware Auth
import Auth from "./middleware/Auth.js"
// Importando o express flash
import flash from "express-flash"
// Configurar as flash messages
app.use(flash())

// Configurando o express-session
app.use(session({
    secret: "lojasecret",
    cookie: {maxAge: 3600000}, // Sessão expira em 1 hora
    saveUninitialized: false,
    resave: false
  }))

app.use(express.urlencoded({extended: false}))



app.set('view engine', 'ejs');
app.use(express.static('public'));


// Rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

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
    res.render("login");
});

app.get("/index", function(req, res) {
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
