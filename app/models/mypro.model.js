module.exports = (sequelize, Sequelize) => {
    const Mypro = sequelize.define("mypro", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        // image: {
        //     type: Sequelize.BLOB
        // }
    });

    return Mypro;
};