const { DataTypes } = require('sequelize')
const { sequelize } = require('.')

module.exports = (sequelize) => {
    const Comment = sequelize.define("Comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        }

    }, {
        sequelize: sequelize,
        timestamps: true,
        modelName: "Comment",
        tableName: 'comments',
        paranoid: true,
        charset: "utf8",
        collaction: "utf8_general_ci"

    });

    Comment.associate = (db) => {
        db.Comment.belongsTo(db.Board, { foreignKey: "boardId", targetKey: 'id', as: 'board' });
    }
    return Comment;
}