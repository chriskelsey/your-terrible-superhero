module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("response", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    phone: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    q1: DataTypes.TINYINT,
    q2: DataTypes.TINYINT,
    q3: DataTypes.TINYINT,
    q4: DataTypes.TINYINT,
    q5: DataTypes.TINYINT
  });

  return Response;
};