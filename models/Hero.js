module.exports = function(sequelize, DataTypes) {
    var Hero = sequelize.define("hero", {
        name: DataTypes.STRING, 
        trueIdentity: DataTypes.STRING,
        image: { type: DataTypes.STRING, validate: {isUrl: true}},
        height: DataTypes.STRING,
        weight: DataTypes.STRING,
        eyes: DataTypes.STRING,
        hair: DataTypes.STRING,
        backStory: DataTypes.TEXT,
        energy: DataTypes.INTEGER,
        fightSkills: DataTypes.INTEGER,
        intelligence: DataTypes.INTEGER
    });
    return Hero;
};