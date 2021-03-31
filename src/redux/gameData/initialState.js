const initialState = {
  grades: [
    { id: "XyDE", title: "Common" },
    { id: "3XE9", title: "Rare" },
    { id: "fod3", title: "Epic" },
    { id: "BB4h", title: "Legendary" },
  ],
  races: [
    { id: "HVSp", title: "Human" },
    { id: "u2TP", title: "Wild" },
    { id: "z18Y", title: "Sacred" },
    { id: "T1WD", title: "Dark" },
  ],
  classes: [
    { id: "dRmi", title: "Support" },
    { id: "8ZOV", title: "Mage" },
    { id: "Mcn2", title: "Warrior" },
    { id: "kroW", title: "Assassin" },
    { id: "Hei3", title: "Marksman" },
    { id: "PA95", title: "Tank" },
  ],
  troops: [
    {
      grade: "fod3",
      id: "5Lj1",
      image: "/img/aow-troops/pirateship.png",
      boardImage: "/img/aow-troops-igv/pirateship.png",
      name: "Pirate Ship",
      race: "HVSp",
      count: 1,
      summon: {
        id: "ea85",
        name: "Pirate",
        race: "HVSp",
        count: 7,
        hp: [
          7000,
          8750,
          12250,
          19600,
          26250,
          35000,
          50750,
          63000,
          110250,
          157500,
        ],
      },
      hp: [2000, 4000, 7000, 11000, 15000, 20000, 25000, 30000, 52500, 75000],
    },
    {
      grade: "fod3",
      id: "aPHf",
      image: "/img/aow-troops/nun.png",
      boardImage: "/img/aow-troops-igv/nun.png",
      name: "Nun",
      race: "HVSp",
      count: 9,
      hp: [
        2100,
        6000,
        15400,
        31500,
        43200,
        55800,
        68400,
        81000,
        141750,
        202500,
      ],
    },
    {
      grade: "XyDE",
      id: "1DG4",
      image: "/img/aow-troops/archers.png",
      boardImage: "/img/aow-troops-igv/archers.png",
      name: "Archers",
      race: "HVSp",
      count: 9,
      hp: [1800, 3500, 6650, 13500, 25200, 36900, 48600, 61200, 107100, 153000],
    },
    {
      grade: "XyDE",
      id: "KMfr",
      image: "/img/aow-troops/infantry.png",
      boardImage: "/img/aow-troops-igv/infantry.png",
      name: "Infantry",
      race: "HVSp",
      count: 9,
      hp: [2400, 4500, 8400, 16200, 28800, 41400, 54000, 66600, 116550, 166500],
    },
    {
      grade: "XyDE",
      id: "ia3F",
      image: "/img/aow-troops/ironguards.png",
      boardImage: "/img/aow-troops-igv/ironguards.png",
      name: "Iron Guards",
      race: "HVSp",
      count: 9,
      hp: [
        3000,
        6000,
        10500,
        19800,
        34200,
        46800,
        59400,
        72000,
        126000,
        180000,
      ],
    },
    {
      grade: "XyDE",
      id: "aHk2",
      image: "/img/aow-troops/bomber.png",
      boardImage: "/img/aow-troops-igv/bomber.png",
      name: "Bomber",
      race: "HVSp",
      count: 1,
      hp: [500, 1000, 1600, 2400, 3200, 4200, 5200, 6200, 10850, 15500],
    },
    {
      grade: "XyDE",
      id: "sYMV",
      image: "/img/aow-troops/catapult.png",
      boardImage: "/img/aow-troops-igv/catapult.png",
      name: "Catapult",
      race: "HVSp",
      count: 1,
      hp: [1000, 1800, 2400, 3200, 4000, 5000, 6000, 7000, 12250, 17500],
    },
    {
      grade: "XyDE",
      id: "duED",
      image: "/img/aow-troops/helljailers.png",
      boardImage: "/img/aow-troops-igv/helljailers.png",
      name: "Hell Jailers",
      race: "T1WD",
      count: 9,
      hp: [2400, 4500, 8400, 16200, 28800, 41400, 54000, 66600, 116550, 166500],
    },
    {
      grade: "3XE9",
      id: "xKS4",
      image: "/img/aow-troops/firemage.png",
      boardImage: "/img/aow-troops-igv/firemage.png",
      name: "Fire Mage",
      race: "HVSp",
      count: 1,
      hp: [600, 1200, 2000, 3200, 4400, 5600, 6800, 8000, 14000, 20000],
    },
    {
      grade: "3XE9",
      id: "x68d",
      image: "/img/aow-troops/bandits.png",
      boardImage: "/img/aow-troops-igv/bandits.png",
      name: "Bandits",
      race: "HVSp",
      count: 9,
      hp: [2400, 4500, 8400, 16200, 28800, 41400, 54000, 66600, 116550, 166500],
    },
    {
      grade: "3XE9",
      id: "TifV",
      image: "/img/aow-troops/ogrewarrior.png",
      boardImage: "/img/aow-troops-igv/ogrewarrior.png",
      name: "Ogre Warrior",
      race: "u2TP",
      count: 1,
      hp: [2000, 4000, 7500, 12000, 16500, 21000, 25500, 30000, 52500, 75000],
    },
    {
      grade: "3XE9",
      id: "u3vo",
      image: "/img/aow-troops/ghostassassins.png",
      boardImage: "/img/aow-troops-igv/ghostassassins.png",
      name: "Ghost Assassin",
      race: "T1WD",
      count: 9,
      hp: [2100, 4000, 7000, 13500, 25200, 36000, 49500, 63000, 110250, 157500],
    },
    {
      grade: "3XE9",
      id: "VYNk",
      image: "/img/aow-troops/magicapprentice.png",
      boardImage: "/img/aow-troops-igv/magicapprentice.png",
      name: "Magic Apprentice",
      race: "HVSp",
      count: 9,
      hp: [1500, 4000, 8400, 16200, 21600, 27000, 32400, 37800, 66150, 94500],
    },
    {
      grade: "3XE9",
      id: "jE0t",
      image: "/img/aow-troops/vikingwarrior.png",
      boardImage: "/img/aow-troops-igv/vikingwarrior.png",
      name: "Viking Warrior",
      race: "HVSp",
      count: 1,
      hp: [2000, 4000, 7000, 10000, 14000, 18000, 22000, 26000, 45500, 65000],
    },
    {
      grade: "3XE9",
      id: "RwaZ",
      image: "/img/aow-troops/icemage.png",
      boardImage: "/img/aow-troops-igv/icemage.png",
      name: "Ice Mage",
      race: "HVSp",
      count: 1,
      hp: [600, 1100, 2000, 3000, 4250, 5500, 6750, 8000, 14000, 20000],
    },
    {
      grade: "3XE9",
      id: "X5LF",
      image: "/img/aow-troops/scholar.png",
      boardImage: "/img/aow-troops-igv/scholar.png",
      name: "Scholar",
      race: "z18Y",
      count: 1,
      hp: [600, 1100, 2000, 3000, 4250, 5500, 6750, 8000, 14000, 20000],
    },
    {
      grade: "3XE9",
      id: "KSiE",
      image: "/img/aow-troops/inquisitor.png",
      boardImage: "/img/aow-troops-igv/inquisitor.png",
      name: "Inquisitor",
      race: "z18Y",
      count: 9,
      hp: [2700, 5000, 9100, 17100, 29700, 42300, 54900, 67500, 118125, 168750],
    },
    {
      grade: "3XE9",
      id: "ELzN",
      image: "/img/aow-troops/undeadsoldier.png",
      boardImage: "/img/aow-troops-igv/undeadsoldier.png",
      name: "Undead Soldier",
      race: "T1WD",
      count: 9,
      hp: [2400, 4500, 8400, 16200, 28800, 41400, 54000, 66600, 116550, 166500],
    },
    {
      grade: "3XE9",
      gradedAs: "fod3",
      id: "YVcP",
      image: "/img/aow-troops/harbingeroffire.png",
      boardImage: "/img/aow-troops-igv/harbingeroffire.png",
      name: "Harbinger of Fire",
      race: "z18Y",
      count: 9,
      hp: [
        3000,
        6250,
        12250,
        25200,
        33750,
        45000,
        65250,
        81000,
        141750,
        202500,
      ],
    },
    {
      grade: "3XE9",
      id: "od7I",
      image: "/img/aow-troops/paladin.png",
      boardImage: "/img/aow-troops-igv/paladin.png",
      name: "Paladin",
      race: "z18Y",
      count: 9,
      hp: [
        3600,
        7500,
        15400,
        31500,
        48600,
        65700,
        82800,
        99900,
        174825,
        249750,
      ],
    },
    {
      grade: "3XE9",
      id: "JmMK",
      image: "/img/aow-troops/ballista.png",
      boardImage: "/img/aow-troops-igv/ballista.png",
      name: "Ballista",
      race: "HVSp",
      count: 1,
      hp: [1100, 1800, 2500, 3300, 4200, 5100, 6200, 7200, 12600, 18000],
    },
    {
      grade: "3XE9",
      id: "qap2",
      image: "/img/aow-troops/goblikazes.png",
      boardImage: "/img/aow-troops-igv/goblikazes.png",
      name: "Goblikazes",
      race: "u2TP",
      count: 9,
      hp: [1350, 4500, 8400, 16200, 21600, 34200, 42300, 49500, 86625, 123750],
    },
    {
      grade: "3XE9",
      id: "cHYq",
      image: "/img/aow-troops/cactus.png",
      boardImage: "/img/aow-troops-igv/cactus.png",
      name: "Cactuses",
      race: "u2TP",
      count: 9,
      hp: [
        2700,
        5500,
        10500,
        18000,
        30600,
        43200,
        56700,
        69300,
        121275,
        173250,
      ],
    },
    {
      grade: "fod3",
      id: "VOFU",
      image: "/img/aow-troops/necromancer.png",
      boardImage: "/img/aow-troops-igv/necromancer.png",
      name: "Necromancer",
      race: "T1WD",
      count: 1,
      summon: {
        id: "p09b",
        name: "Skeleton",
        race: "T1WD",
        count: 0,
        hp: [600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 3850, 5500],
      },
      hp: [1000, 1800, 2600, 3800, 5000, 6200, 7400, 8600, 15050, 21500],
    },
    {
      grade: "fod3",
      id: "cMlE",
      image: "/img/aow-troops/pilgrims.png",
      boardImage: "/img/aow-troops-igv/pilgrims.png",
      name: "Pilgrims",
      race: "z18Y",
      count: 9,
      hp: [
        3600,
        7500,
        15400,
        31500,
        48600,
        65700,
        82800,
        99900,
        174825,
        249750,
      ],
    },
    {
      grade: "fod3",
      id: "uvZH",
      image: "/img/aow-troops/pumpkinguard.png",
      boardImage: "/img/aow-troops-igv/pumpkinguard.png",
      name: "Pumpkin Guard",
      race: "T1WD",
      count: 1,
      hp: [2000, 4000, 7500, 12000, 17000, 22500, 29000, 36000, 63000, 90000],
    },
    {
      grade: "fod3",
      id: "drTp",
      image: "/img/aow-troops/darkwitch.png",
      boardImage: "/img/aow-troops-igv/darkwitch.png",
      name: "Dark Witch",
      race: "T1WD",
      count: 1,
      hp: [700, 1200, 2200, 3500, 4800, 6200, 7600, 9000, 15750, 22500],
    },
    {
      grade: "fod3",
      id: "qZFw",
      image: "/img/aow-troops/yasha.png",
      boardImage: "/img/aow-troops-igv/yasha.png",
      name: "Yasha",
      race: "T1WD",
      count: 1,
      hp: [2000, 4000, 7000, 11000, 15000, 20000, 25000, 30000, 52500, 75000],
    },
    {
      grade: "fod3",
      id: "bIYJ",
      image: "/img/aow-troops/priestmage.png",
      boardImage: "/img/aow-troops-igv/priestmage.png",
      name: "Priest Mage",
      race: "z18Y",
      count: 1,
      hp: [700, 1200, 2200, 3500, 4800, 6200, 7600, 9000, 15750, 22500],
    },
    {
      grade: "fod3",
      id: "Xbyh",
      image: "/img/aow-troops/soulhunter.png",
      boardImage: "/img/aow-troops-igv/soulhunter.png",
      name: "Soul Hunter",
      race: "T1WD",
      count: 1,
      hp: [2000, 4000, 7500, 12000, 16500, 21000, 27500, 35000, 52500, 75000],
    },
    {
      grade: "fod3",
      id: "ZMFE",
      image: "/img/aow-troops/templarknight.png",
      boardImage: "/img/aow-troops-igv/templarknight.png",
      name: "Templar Knight",
      race: "z18Y",
      count: 1,
      hp: [3000, 5000, 8000, 12500, 17000, 21500, 26000, 30500, 53375, 76250],
    },
    {
      grade: "fod3",
      id: "yivK",
      image: "/img/aow-troops/peltasts.png",
      boardImage: "/img/aow-troops-igv/peltasts.png",
      name: "Peltasts",
      race: "HVSp",
      count: 9,
      hp: [2400, 4500, 8400, 16200, 28800, 41400, 54000, 66600, 116550, 166500],
    },
    {
      grade: "fod3",
      id: "uuZv",
      image: "/img/aow-troops/brawlers.png",
      boardImage: "/img/aow-troops-igv/brawlers.png",
      name: "Brawlers",
      race: "HVSp",
      count: 9,
      hp: [
        3600,
        7500,
        15400,
        31500,
        48600,
        65700,
        82800,
        99900,
        174825,
        249750,
      ],
    },
    {
      grade: "fod3",
      id: "EwWV",
      image: "/img/aow-troops/tauruswitcher.png",
      boardImage: "/img/aow-troops-igv/tauruswitcher.png",
      name: "Taurus Witcher",
      race: "u2TP",
      count: 9,
      hp: [1800, 3500, 6650, 13500, 25200, 36900, 48600, 61200, 107100, 153000],
    },
    {
      grade: "fod3",
      id: "OL9j",
      image: "/img/aow-troops/voodoodolls.png",
      boardImage: "/img/aow-troops-igv/voodoodolls.png",
      name: "Voodoo Dolls",
      race: "T1WD",
      count: 9,
      hp: [1800, 3500, 5600, 9900, 11700, 14400, 18000, 22500, 39375, 56250],
    },
    {
      grade: "BB4h",
      id: "hBpl",
      image: "/img/aow-troops/demon.png",
      boardImage: "/img/aow-troops-igv/demon.png",
      name: "Demon",
      race: "T1WD",
      count: 1,
      hp: [2000, 4000, 7500, 12000, 16500, 21000, 27500, 34000, 59500, 85000],
    },
    {
      grade: "BB4h",
      id: "TK2L",
      image: "/img/aow-troops/beastmaster.png",
      boardImage: "/img/aow-troops-igv/beastmaster.png",
      name: "Beast Master",
      race: "z18Y",
      count: 1,
      summon: {
        id: "upNF",
        name: "The Best Partner",
        race: "u2TP",
        count: 1,
        hp: [2500, 5000, 8750, 12500, 17500, 22500, 27500, 32500, 56875, 81250],
      },
      hp: [2000, 4000, 7000, 10000, 14000, 18000, 22000, 26000, 45500, 65000],
    },
    {
      grade: "BB4h",
      id: "7FVE",
      image: "/img/aow-troops/witchcrafttotem.png",
      boardImage: "/img/aow-troops-igv/witchcrafttotem.png",
      name: "Witchcraft Totem",
      race: "u2TP",
      count: 1,
      hp: [2000, 4000, 7000, 12000, 16000, 20000, 25000, 31000, 54250, 77500],
    },
    {
      grade: "BB4h",
      id: "BMEK",
      image: "/img/aow-troops/meteorgolem.png",
      boardImage: "/img/aow-troops-igv/meteorgolem.png",
      name: "Meteor Golem",
      race: "T1WD",
      count: 1,
      hp: [2000, 4000, 7500, 12000, 16500, 21000, 27500, 34000, 59500, 85000],
    },
    {
      grade: "BB4h",
      id: "BHYu",
      image: "/img/aow-troops/stonegolem.png",
      boardImage: "/img/aow-troops-igv/stonegolem.png",
      name: "Stone Golem",
      race: "u2TP",
      count: 1,
      hp: [2000, 4000, 7500, 12000, 17000, 22500, 29000, 36000, 63000, 90000],
    },
    {
      grade: "BB4h",
      id: "GOiK",
      image: "/img/aow-troops/frostarchers.png",
      boardImage: "/img/aow-troops-igv/frostarchers.png",
      name: "Frost Archers",
      race: "z18Y",
      count: 9,
      hp: [2400, 4500, 8400, 16200, 28800, 41400, 54000, 66600, 116550, 166500],
    },
    {
      grade: "BB4h",
      id: "zX4n",
      image: "/img/aow-troops/sacredswordsman.png",
      boardImage: "/img/aow-troops-igv/sacredswordsman.png",
      name: "Sacred Swordsman",
      race: "z18Y",
      count: 1,
      hp: [2000, 4000, 7000, 12000, 16000, 20000, 25000, 31000, 54250, 77500],
    },
    {
      grade: "BB4h",
      id: "MIgO",
      image: "/img/aow-troops/rhinoknight.png",
      boardImage: "/img/aow-troops-igv/rhinoknight.png",
      name: "Rhino Knight",
      race: "u2TP",
      count: 1,
      hp: [2000, 4000, 7500, 12000, 16500, 21000, 25500, 30000, 52500, 75000],
    },
    {
      grade: "BB4h",
      id: "IKOP",
      image: "/img/aow-troops/pharaoh.png",
      boardImage: "/img/aow-troops-igv/pharaoh.png",
      name: "Pharaoh",
      race: "HVSp",
      count: 1,
      hp: [750, 1250, 2250, 3600, 4900, 6300, 7750, 9500, 17000, 23750],
    },
  ],
  increasableTroopCounts: {
    1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    7: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    9: [3, 5, 7, 9, 9, 9, 9, 9, 9, 9],
  },
  heroes: [
    {
      id: "Xfwz",
      name: "Mad Alchemist - Hohenheim",
      grade: "3XE9",
      race: "HVSp",
      class: "dRmi",
      image: "/img/aow-heroes/hohenheim.png",
    },
    {
      id: "YI3s",
      name: "Engineer - Planck",
      grade: "3XE9",
      race: "HVSp",
      class: "8ZOV",
      image: "/img/aow-heroes/planck.png",
    },
    {
      id: "i1hS",
      name: "Minstrel - Dante",
      grade: "3XE9",
      race: "HVSp",
      class: "8ZOV",
      image: "/img/aow-heroes/dante.png",
    },
    {
      id: "DZGh",
      name: "Tree of Life - Green",
      grade: "3XE9",
      race: "u2TP",
      class: "dRmi",
      image: "/img/aow-heroes/green.png",
    },
    {
      id: "WiY9",
      name: "Jungle Hunter - Diana",
      grade: "3XE9",
      race: "HVSp",
      class: "kroW",
      image: "/img/aow-heroes/diana.png",
    },
    {
      id: "j1ym",
      name: "Frost Baron - Kelvins",
      grade: "fod3",
      race: "T1WD",
      class: "Mcn2",
      image: "/img/aow-heroes/kelvins.png",
    },
    {
      id: "OupS",
      name: "Elemental Sorcerer - Illum",
      grade: "fod3",
      race: "HVSp",
      class: "8ZOV",
      image: "/img/aow-heroes/illum.png",
    },
    {
      id: "fvns",
      name: "Archon - Moshe",
      grade: "fod3",
      race: "z18Y",
      class: "8ZOV",
      image: "/img/aow-heroes/moshe.png",
    },
    {
      id: "9bv9",
      name: "Black Beard - Edward",
      grade: "fod3",
      race: "HVSp",
      class: "dRmi",
      image: "/img/aow-heroes/edward.png",
    },
    {
      id: "nCuH",
      name: "Christmas Guardian - Kriss",
      grade: "fod3",
      race: "z18Y",
      class: "Mcn2",
      image: "/img/aow-heroes/kriss.png",
    },
    {
      id: "LHtK",
      name: "Winter Lord - Ainz",
      grade: "fod3",
      race: "T1WD",
      class: "Mcn2",
      image: "/img/aow-heroes/ainz.png",
    },
    {
      id: "5OcS",
      name: "Prince of Thieves - Robin Hood",
      grade: "fod3",
      race: "HVSp",
      class: "Hei3",
      image: "/img/aow-heroes/robinhood.png",
    },
    {
      id: "OQli",
      name: "Bull Demon King - Minotaur",
      grade: "fod3",
      race: "u2TP",
      class: "Mcn2",
      image: "/img/aow-heroes/minotaur.png",
    },
    {
      id: "Zhfz",
      name: "Tarot Master - Cassandra",
      grade: "fod3",
      race: "T1WD",
      class: "8ZOV",
      image: "/img/aow-heroes/cassandra.png",
    },
    {
      id: "CbHd",
      name: "Bloody Warewolf - Miller",
      grade: "fod3",
      race: "u2TP",
      class: "kroW",
      image: "/img/aow-heroes/miller.png",
    },
    {
      id: "GAcg",
      name: "Sakura Blade - Genichiro",
      grade: "fod3",
      race: "T1WD",
      class: "Mcn2",
      image: "/img/aow-heroes/genichiro.png",
    },
    {
      id: "ArWp",
      name: "Admiral of the New Route - Drake",
      grade: "BB4h",
      race: "HVSp",
      class: "Mcn2",
      image: "/img/aow-heroes/drake.png",
    },
    {
      id: "ARHK",
      name: "Thunder King - Ivan",
      grade: "BB4h",
      race: "HVSp",
      class: "Mcn2",
      image: "/img/aow-heroes/ivan.png",
    },
    {
      id: "2ZWr",
      name: "Clockman - Harrison",
      grade: "BB4h",
      race: "HVSp",
      class: "dRmi",
      image: "/img/aow-heroes/harrison.png",
    },
    {
      id: "cBFI",
      name: "Shining Aureole - Apollo",
      grade: "BB4h",
      race: "z18Y",
      class: "Hei3",
      image: "/img/aow-heroes/apollo.png",
    },
    {
      id: "v9oW",
      name: "Guardian of Emerald Ocean - Poseidon",
      grade: "BB4h",
      race: "z18Y",
      class: "8ZOV",
      image: "/img/aow-heroes/poseidon.png",
    },
    {
      id: "DUBg",
      name: "Moon Goddess - Selene",
      grade: "BB4h",
      race: "z18Y",
      class: "dRmi",
      image: "/img/aow-heroes/selene.png",
    },
    {
      id: "qe78",
      name: "The Monkey King - Wukong",
      grade: "BB4h",
      race: "u2TP",
      class: "Mcn2",
      image: "/img/aow-heroes/wukong.png",
    },
    {
      id: "tPKl",
      name: "Burning Council - Davison",
      grade: "BB4h",
      race: "HVSp",
      class: "PA95",
      image: "/img/aow-heroes/davison.png",
    },
    {
      id: "4ZBz",
      name: "Scarlet Duke - Dracula",
      grade: "BB4h",
      race: "T1WD",
      class: "8ZOV",
      image: "/img/aow-heroes/dracula.png",
    },
    {
      id: "SaVx",
      name: "Royal Christmas Ball - Chione",
      grade: "BB4h",
      race: "z18Y",
      class: "8ZOV",
      image: "/img/aow-heroes/chione.png",
    },
    {
      id: "yW9G",
      name: "Lord of Hatred - Mephisto",
      grade: "BB4h",
      race: "T1WD",
      class: "Mcn2",
      image: "/img/aow-heroes/mephisto.png",
    },
    {
      id: "7FYw",
      name: "Horus the Elder - Horus",
      grade: "BB4h",
      race: "z18Y",
      class: "8ZOV",
      image: "/img/aow-heroes/horus.png",
    },
    {
      id: "OJ6m",
      name: "The King of Camelot - Arthur",
      grade: "BB4h",
      race: "HVSp",
      class: "Mcn2",
      image: "/img/aow-heroes/arthur.png",
    },
    {
      id: "NUMk",
      name: "Intrepid King - Beowulf",
      grade: "BB4h",
      race: "HVSp",
      class: "Mcn2",
      image: "/img/aow-heroes/beowulf.png",
    },
    {
      id: "MXhs",
      name: "The Nine-Tailed Fox - Aly",
      grade: "BB4h",
      race: "u2TP",
      class: "8ZOV",
      image: "/img/aow-heroes/aly.png",
    },
    {
      id: "U5Bu",
      name: "Tentacles of the Deep - Kraken",
      grade: "BB4h",
      race: "u2TP",
      class: "PA95",
      image: "/img/aow-heroes/kraken.png",
    },
    {
      id: "MVQQ",
      name: "Grim Reaper - Azrael",
      grade: "BB4h",
      race: "T1WD",
      class: "8ZOV",
      image: "/img/aow-heroes/azrael.png",
    },
    {
      id: "uLhj",
      name: "King of the Gods - Zeus",
      grade: "BB4h",
      race: "z18Y",
      class: "8ZOV",
      image: "/img/aow-heroes/zeus.png",
    },
    {
      id: "9VqF",
      name: "Burning Spear - Nezha",
      grade: "BB4h",
      race: "z18Y",
      class: "Mcn2",
      image: "/img/aow-heroes/nezha.png",
    },
    {
      id: "3PGT",
      name: "Goddess of War - Athena",
      grade: "BB4h",
      race: "z18Y",
      class: "Mcn2",
      image: "/img/aow-heroes/athena.png",
    },
    {
      id: "d6Wc",
      name: "Father of Gods - Odin",
      grade: "BB4h",
      race: "z18Y",
      class: "8ZOV",
      image: "/img/aow-heroes/odin.png",
    },
    {
      id: "AgM6",
      name: "The Sprite of Lamp - Jinn",
      grade: "BB4h",
      race: "z18Y",
      class: "dRmi",
      image: "/img/aow-heroes/jinn.png",
    },
    {
      id: "Q5Kj",
      name: "The Queen of Silla - Seondeok",
      grade: "BB4h",
      race: "HVSp",
      class: "dRmi",
      image: "/img/aow-heroes/seondeok.png",
    },
  ],
  board: {
    squares: 49,
    maxLevel: 9,
    maxHeroLevel: 15,
  },
  power: {
    BB4h: {
      description: "Legendary",
      troop: [160, 320, 640, 1280, 2560, 5120, 10240, 15360, 30720],
      hero: [
        5000,
        7000,
        9000,
        11000,
        13000,
        15000,
        17000,
        19000,
        21000,
        23000,
        28000,
        30000,
        32000,
        35000,
        36000,
      ],
    },
    fod3: {
      description: "Epic",
      troop: [140, 280, 560, 1120, 2240, 4480, 8960, 13440, 26880],
      hero: [
        4000,
        5500,
        7000,
        8500,
        10000,
        11500,
        13000,
        14500,
        16000,
        17500,
        19000,
        20500,
        22000,
        23500,
        25000,
      ],
    },
    "3XE9": {
      description: "Rare",
      troop: [120, 240, 480, 960, 1920, 3840, 7680, 11520, 23040],
      hero: [
        3000,
        4000,
        5000,
        6000,
        7000,
        8000,
        9000,
        10000,
        11000,
        12000,
        13000,
        14000,
        15000,
        16000,
        17000,
      ],
    },
    XyDE: {
      description: "Common",
      troop: [100, 200, 400, 800, 1600, 3200, 6400, 9600, 19200],
    },
  },
};

export default initialState;
