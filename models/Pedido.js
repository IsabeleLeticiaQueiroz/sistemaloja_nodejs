    import Sequelize from "sequelize";
    import connection from "../config/sequelize-config.js";

    const Pedido = connection.define('pedidos', {
        numero: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        valor: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
    });

    Pedido.sync({ force: false }); 
    export default Pedido;
