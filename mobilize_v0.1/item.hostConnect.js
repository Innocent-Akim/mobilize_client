module.exports = (sequelize, DataTypes) => { 
    const HostConnect = sequelize.define('HostConnect', { 
        Code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        AdressIp: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}