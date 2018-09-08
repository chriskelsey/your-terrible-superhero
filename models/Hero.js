module.exports = function(sequelize, DataTypes) {
    var Hero = sequelize.define("Hero", {
        name: DataTypes.STRING, 
        trueIdentity: DataTypes.STRING,
        image: { type: DataTypes.STRING, validate: {isUrl: true}},
        height: DataTypes.STRING,
        weight: DataTypes.STRING,
        eyes: DataTypes.STRING,
        hair: DataTypes.STRING,
        backStory: DataTypes.TEXT,
        fightStats: [{durability: DataTypes.INTEGER, energy: DataTypes.INTEGER,  fightSkills: DataTypes.INTEGER, intelligence: DataTypes.INTEGER,       speed: DataTypes.INTEGER, strength: DataTypes.INTEGER}]
    });
    return Hero;
};