import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";


const Cliente = connection.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    nome:{
    type: Sequelize.STRING,
    allowNull: true
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: true
    },

    endereco:{
        type: Sequelize.STRING,
        allowNull: true
    }
});
Cliente.sync({force: false});
export default Cliente;
