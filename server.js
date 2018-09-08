require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
}).then(function() {
  hero.bulkCreate([
    {
      name: "Big Bertha",
      trueIdentity: "Ashley Crawford",
      image:"https://www.marvel.com/characters/big-bertha",
      height: "7 ft, 0 inches",
      weight: "750 lbs",
      eyes: "Blue",
      hair: "Strawberry-blonde",
      backStory: "Supermodel Ashley Crawford is a member of the Milwaukee-based would-be superhero group calling itself the Great Lakes Champions, who she funds with her private fortune. She was able to make her money by becoming a successful model, using her powers to shape her body to the ultimate figure. Crawford's stance on the mutant question is unknown, but it would appear that she is more concerned with balancing her conflicting supermodel/superhero careers than with the global conflict between humans and mutants.",
      fightStats: [{durability: 6, energy: 4, fightSkills: 4, intelligence: 4, speed: 4, strength: 6}]  
    },
    {
      name: "Hellcow",
      trueIdentity: "Bessie",
      image:"https://www.marvel.com/characters/hellcow",
      height: "4 ft, 6 inches",
      weight: "575 lbs",
      eyes: "Red",
      hair: "Brown",
      backStory: "Bessie was born three hundred years ago and was owned by a local Switzerland farmer named Hans. One night Dracula searched through the local Swiss town, but could find noone to feast upon, so he drank Bessies blood. The next morning Hans discovered Bessies lifeless body and buried her. Three nights after she was buried she rose from her grave and swore vengeance on Dracula and his kind. Three hundred years later Bessie found herself in Cleveland, Ohio where she encountered Howard the Duck who she confused with Dracula and attacked him. Despite Bessies powers Howard managed to gain the upper hand during the battle when Bessie became stuck in a local store. Desperately Howard found a wooden stake and a mallet and drove the stake through Bessies heart, killing her.",
      fightStats: [{durability: 5, energy: 2, fightSkills: 3, intelligence: 3, speed: 4, strength: 4}]  
    },
    {
      name: "Doop",
      trueIdentity: "Doop",
      image:"https://www.marvel.com/characters/hellcow",
      height: "3 feet approx.",
      weight: "Variable",
      eyes: "Fushia",
      hair: "Black",
      backStory: "The product of a Cold War era U.S. military experiment, Doop was instrumental in the fall of the Soviet Union. Little is known of Doop’s whereabouts between that period and his recent job as cameraman for the media-savvy, profit-driven mutant superteam X-Force, but at some point he befriended Wolverine and possibly became a priest. It appears that Doop has recently returned to Earth from outer space, but it is unknown whether this creature, which Polaris identified as Daap, is a different being altogether or if Polaris simply misheard the complex series of clucks and barks that constitute the alien language as Daap instead of Doop. The truth may never be known.",
      fightStats: [{durability: 6, energy: 4, fightSkills: 3, intelligence: 5, speed: 3, strength: 5}]
    },
    {
      name: "Leather Boy",
      trueIdentity: "Gene Lorrene",
      image:"http://marvel.wikia.com/wiki/Gene_Lorrene_(Earth-616)",
      height: "5 ft 10 inches",
      weight: "180 lbs",
      eyes: "Blue",
      hair: "Brown",
      backStory: "Gene Lorrene was one of the few individuals to respond to Mr. Immortal's classified ad searching for other costumed superheroes. Searching for S&M fetish group and misreading the ad, Gene joined the Great Lakes Avengers as Leather Boy. However, when the team discovered that Leather Boy didn't have any powers, they asked him to leave. Nearly five years later,[3] a mad Scarlet Witch destroyed the Avengers, leaving the G.L.A. as the only Avengers. To bluster their roster, Flatman and Doorman launched a recruiting drive. Although they spoke to several heroes, they were only able to recruit Squirrel Girl and her partner Monkey Joe.[4] Seeing the news reports about Squirrel Girl joining the G.L.A., Leather Boy became furious that he was not asked to rejoin the team. In a rage, Leather Boy broke into the G.L.A.'s headquarters and murdered both Mr. Immortal and Monkey Joe. During a Halloween party costume contest M.C.'d by Squirrel Girl, Leather Boy, still thirsty for revenge, tried to kill Squirrel Girl's new partner Tippy-Toe. Fortunately, Deadpool was also in attendance and saved Tippy. Deadpool then left Leather Boy tied up in a tree to be attacked by squirrels.",
      fightStats: [{durability: 5, energy: 6, fightSkills: 2, intelligence: 2, speed: 5, strength: 5}]
    },
    {
      name: "Squirrel Girl",
      trueIdentity: "Doreen Green",
      image:"https://www.marvel.com/characters/squirrel-girl-doreen-green",
      height: "5 ft 3 inches",
      weight: "135 lbs",
      eyes: "Brown",
      hair: "Brown",
      backStory: "Doreen Green suffered a modification in her genes for unknown reasons that granted her squirrel-like abilities, which manifested predominantly in the form of a prehensile tail. When she was ten years old, Doreen discovered she could communicate with squirrels after overhearing one of these rodents in her window. She subsequently saved this squirrel from being chased by a dog, and they became friends. The squirrel, who identified himself as Monkey Joe, encouraged Doreen to use her abilities to help people. Ever since then, Doreen began to fantasize about becoming a superhero, and came up with the alias of the 'Unbeatable Squirrel Girl'.",
      fightStats: [{durability: 6, energy: 5, fightSkills: 4, intelligence: 3, speed: 5, strength: 3}]
    },
    {
      name: "Howard The Duck",
      trueIdentity: "Howard",
      image:"https://www.marvel.com/characters/howard-the-duck",
      height: "2 ft 7 inches",
      weight: "40 lbs",
      eyes: "Brown",
      hair: "Yellow/White",
      backStory: "Duckworld, a planet in another dimension where intelligent life evolved from waterfowl, resembles Earth in an astounding number of ways, including the fact that ducks speak English. (In fact, Howard mistook Earth for Duckworld on his arrival, until he saw the “hairless apes” wandering around.) Howard was born the eldest son of Dave and Dottie, but beyond enjoying his rocking horse on Christmas as a baby, he disappointed them in every other way. He couldn’t hold down any job, be it serious or frivolous, and couldn’t fit in to any group. Instead, he figured he had no use for society, despite his ability to adapt to any situation and society, and found content as a malcontent. ",
      fightStats: [{durability: 3, energy: 1, fightSkills: 3, intelligence: 4, speed: 2, strength: 2}]
    },
    {
      name: "Phat",
      trueIdentity: "William Robert Reilly",
      image:"https://www.marvel.com/characters/phat",
      height: "5 ft 9 inches",
      weight: "177 lbs",
      eyes: "Blue",
      hair: "Blond",
      backStory: "In an effort to get Billy Bob recruited to join the X-Statix team, his crafty agent created a whole new and much more interesting take on the young man's life: a gangsta rapper persona with a dysfunctional family. Not only were they dysfunctional, his mother and father were alcoholics who turned young Billy Bob out into the streets not far from the trailer park where they lived. Sleazy? Sure. Deceitful? Of course. Did it work? Like a charm.  Phat didn't necessarily live up to the high-flying, high-profile lifestyle of the typical X-Statix superhero. Expected to be out in front, soaking up all the media spotlight he could get, Phat instead hung back, content to speak his affected grammar and reap the piles of cash instead.",
      fightStats: [{durability: 4, energy: 1, fightSkills: 3, intelligence: 1, speed: 2, strength: 2}]
    },
    {
      name: "Asbestos Lady",
      trueIdentity: "Victoria Murdock",
      image:"https://www.marvel.com/characters/asbestos-lady",
      height: "5 ft 10 inches",
      weight: "136 lbs",
      eyes: "Brown",
      hair: "Blonde",
      backStory: "Victoria Murdock was the sister of “Killer” Murdock, a racketeer, and used her brother’s connections to begin a career as a criminal scientist. She provided herself and her accomplices with asbestos-lined clothing to protect them from fire, then set fires to hold back the police while they robbed banks. Asbestos Lady often fought Human Torch (Jim Hammond) in a suit made of asbestos. She proved to be quite a challenge for many of the superheroes, but her creation would ironically lead to her demise. Victoria Murdock eventually died from cancer.",
      fightStats: [{durability: 2, energy: 0, fightSkills: 2, intelligence: 3, speed: 2, strength: 2}]
    }
  ])
});

module.exports = app;
