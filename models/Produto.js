import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define('produtos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagem:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Produto.sync({ force: false }); 
export default Produto;
