const mongoose = require("mongoose");
const Swatch = require("./models/Swatch");

mongoose
  .connect("mongodb://localhost:27017/helpful-human", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log(e);
  });

const swatches = [
  // Red
  {
    hex: "#D0312D",
    color: "Red",
  },
  {
    hex: "#990F02",
    color: "Cherry",
  },
  {
    hex: "#E3242B",
    color: "Rose",
  },
  {
    hex: "#60100B",
    color: "Jam",
  },
  {
    hex: "#541E1B",
    color: "Merlot",
  },
  {
    hex: "#610C04",
    color: "Garnet",
  },
  {
    hex: "#B90E0A",
    color: "Crimson",
  },
  {
    hex: "#900603",
    color: "Ruby",
  },
  {
    hex: "#900D09",
    color: "Scarlet",
  },
  {
    hex: "#4E0707",
    color: "Wine",
  },
  {
    hex: "#7E2811",
    color: "Brick",
  },
  {
    hex: "#A91B0D",
    color: "Apple",
  },
  {
    hex: "#420C09",
    color: "Mahogany",
  },
  {
    hex: "#710C04",
    color: "Blood",
  },
  {
    hex: "#5E1916",
    color: "Sangria",
  },
  {
    hex: "#7A1712",
    color: "Berry",
  },
  {
    hex: "#680C07",
    color: "Currant",
  },
  {
    hex: "#BC544B",
    color: "Blush",
  },
  {
    hex: "#D21404",
    color: "Candy",
  },
  {
    hex: "#9B1003",
    color: "Lipstick",
  },
  // Orange
  {
    hex: "#ED7014",
    color: "Orange",
  },
  {
    hex: "#FA8128",
    color: "Tangerine",
  },
  {
    hex: "#FCAE1E",
    color: "Marigold",
  },
  {
    hex: "#B56727",
    color: "Cider",
  },
  {
    hex: "#8D4004",
    color: "Rust",
  },
  {
    hex: " #BE5504",
    color: "Ginger",
  },
  {
    hex: "#FC6A03",
    color: "Tiger",
  },
  {
    hex: "#DD571C",
    color: "Fire",
  },
  {
    hex: "#B2560D",
    color: "Bronze",
  },
  {
    hex: "#FDA172",
    color: "Cantaloupe",
  },
  {
    hex: "#ED820E",
    color: "Apricot",
  },
  {
    hex: "#80400B",
    color: "Clay",
  },
  {
    hex: "#EC9706",
    color: "Honey",
  },
  {
    hex: "#ED7117",
    color: "Carrot",
  },
  {
    hex: "#C95B0C",
    color: "Squash",
  },
  {
    hex: "#7A3803",
    color: "Spice",
  },
  {
    hex: "#D16002",
    color: "Marmalade",
  },
  {
    hex: "#893101",
    color: "Amber",
  },
  {
    hex: "#D67229",
    color: "Sandstone",
  },
  {
    hex: "#CC5801",
    color: "Yam",
  },
  // Yellow
  {
    hex: "#E6DBAC",
    color: "Tan",
  },
  {
    hex: "#EEDC9A",
    color: "Beige",
  },
  {
    hex: "#F9E076",
    color: "Macaroon",
  },
  {
    hex: "#C9BB8E",
    color: "Hazel Wood",
  },
  {
    hex: "#6B85A",
    color: "Granola",
  },
  {
    hex: "#DFC98A",
    color: "Oat",
  },
  {
    hex: "#FAE29C",
    color: "Egg Nog",
  },
  {
    hex: "#C8A951",
    color: "Fawn",
  },
  {
    hex: "#F3EAAF",
    color: "Sugar Cookie",
  },
  {
    hex: "#D8B863",
    color: "Sand",
  },
  {
    hex: "#E3B778",
    color: "Sepia",
  },
  {
    hex: "#E7C37D",
    color: "Latte",
  },
  {
    hex: "#DCD7A0",
    color: "Oyster",
  },
  {
    hex: "#E3C565",
    color: "Biscotti",
  },
  {
    hex: "#FDE992",
    color: "Parmesan",
  },
  {
    hex: "#BDA55D",
    color: "Hazelnut",
  },
  {
    hex: "#DAC17C",
    color: "Sandcastle",
  },
  {
    hex: "#FDEFB2",
    color: "Buttermilk",
  },
  {
    hex: "#EDE8BA",
    color: "Sand Dollar",
  },
  {
    hex: "#FBE790",
    color: "Shortbread",
  },
  // Green
  {
    hex: "#3CB043",
    color: "Green",
  },
  {
    hex: "#B0FC38",
    color: "Chartreuse",
  },
  {
    hex: "#3A5311",
    color: "Juniper",
  },
  {
    hex: "#728C69",
    color: "Sage",
  },
  {
    hex: "#AEF359",
    color: "Lime",
  },
  {
    hex: "#5DBB63",
    color: "Fern",
  },
  {
    hex: "#98BF64",
    color: "Olive",
  },
  {
    hex: "#028A0F",
    color: "Emerald",
  },
  {
    hex: "#74B72E",
    color: "Pear",
  },
  {
    hex: "#466D1D",
    color: "Moss",
  },
  {
    hex: "#03AC13",
    color: "Shamrock",
  },
  {
    hex: "#3DED97",
    color: "Sea Foam",
  },
  {
    hex: "#234F1E",
    color: "Pine",
  },
  {
    hex: "#03C04A",
    color: "Parakeet",
  },
  {
    hex: "#99EDC3",
    color: "Mint",
  },
  {
    hex: "#354A21",
    color: "Seaweed",
  },
  {
    hex: "#597D35",
    color: "Pickle",
  },
  {
    hex: "#B2D3C2",
    color: "Pistachio",
  },
  {
    hex: "#32612D",
    color: "Basil",
  },
  {
    hex: "#607D3B",
    color: "Crocodile",
  },
  // Blue
  {
    hex: "#3944BC",
    color: "Blue",
  },
  {
    hex: "#757C88",
    color: "Slate",
  },
  {
    hex: "#63C5DA",
    color: "Sky",
  },
  {
    hex: "#0A1172",
    color: "Navy",
  },
  {
    hex: "#281E5D",
    color: "Indigo",
  },
  {
    hex: "#1338BE",
    color: "Cobalt",
  },
  {
    hex: "#48AAAD",
    color: "Teal",
  },
  {
    hex: "#016064",
    color: "Ocean",
  },
  {
    hex: "#022D36",
    color: "Peacock",
  },
  {
    hex: "#1520A6",
    color: "Azure",
  },
  {
    hex: "#0492C2",
    color: "Cerulean",
  },
  {
    hex: "#2832C2",
    color: "Lapis",
  },
  {
    hex: "#2C3E46",
    color: "Spruce",
  },
  {
    hex: "#59788E",
    color: "Stone",
  },
  {
    hex: "#1F456E",
    color: "Aegean",
  },
  {
    hex: "#241571",
    color: "Berry",
  },
  {
    hex: "#151E3D",
    color: "Denim",
  },
  {
    hex: "#051094",
    color: "Admiral",
  },
  {
    hex: "#52B2BF",
    color: "Sapphire",
  },
  {
    hex: "#82EEFD",
    color: "Arctic",
  },
  // Purple
  {
    hex: "#A32CC4",
    color: "Purple",
  },
  {
    hex: "#7A4988",
    color: "Mauve",
  },
  {
    hex: "#710193",
    color: "Violet",
  },
  {
    hex: "#630436",
    color: "Boysenberry",
  },
  {
    hex: "#E39FF6",
    color: "Lavender",
  },
  {
    hex: "#601A35",
    color: "Plum",
  },
  {
    hex: "#A1045A",
    color: "Magenta",
  },
  {
    hex: "#B65FCF",
    color: "Lilac",
  },
  {
    hex: "#663046",
    color: "Grape",
  },
  {
    hex: "#BE93D4",
    color: "Periwinkle",
  },
  {
    hex: "#4D0F28",
    color: "Sangria",
  },
  {
    hex: "#311432",
    color: "Eggplant",
  },
  {
    hex: "#67032F",
    color: "Jam",
  },
  {
    hex: "#9867C5",
    color: "Iris",
  },
  {
    hex: "#9E7BB5",
    color: "Heather",
  },
  {
    hex: "#A45EE5",
    color: "Amethyst",
  },
  {
    hex: "#290916",
    color: "Raisin",
  },
  {
    hex: "#AF69EF",
    color: "Orchid",
  },
  {
    hex: "#4C0121",
    color: "Mulberry",
  },
  {
    hex: "#2C041C",
    color: "Wine",
  },
  // Brown
  {
    hex: "#231709",
    color: "Brown Oil",
  },
  {
    hex: "#4B371C",
    color: "Roasted Coffee",
  },
  {
    hex: "#3C280D",
    color: "Mocha",
  },
  {
    hex: "#795C34",
    color: "Peanut Brown",
  },
  {
    hex: "#362511",
    color: "Carob",
  },
  {
    hex: "#371D10",
    color: "Hickory",
  },
  {
    hex: "#3F301D",
    color: "Wood",
  },
  {
    hex: "4A2511",
    color: "Pecan",
  },
  {
    hex: "#432616",
    color: "Walnut",
  },
  {
    hex: "#65350F",
    color: "Caramel",
  },
  {
    hex: "#5E2C04",
    color: "Gingerbread",
  },
  {
    hex: "#481F01",
    color: "Syrup",
  },
  {
    hex: "#2E1503",
    color: "Dark Chocolate",
  },
  {
    hex: "#9A7B4F",
    color: "Tortilla",
  },
  {
    hex: "#352315",
    color: "Umber",
  },
  {
    hex: "#80471C",
    color: "Tawny",
  },
  {
    hex: "#3B1E08",
    color: "Brunette",
  },
  {
    hex: "#652A0E",
    color: "Cinnamon Brown",
  },
  {
    hex: "#532915",
    color: "Penny",
  },
  {
    hex: "#4A3728",
    color: "Cedar Brown",
  },
  // Gray
  {
    hex: "#808080",
    color: "Gray",
  },
  {
    hex: "#373737",
    color: "Shadow",
  },
  {
    hex: "#594D5B",
    color: "Graphite",
  },
  {
    hex: "#322D31",
    color: "Iron",
  },
  {
    hex: "#696880",
    color: "Pewter",
  },
  {
    hex: "#C5C6D0",
    color: "Cloud",
  },
  {
    hex: "#ADADC9",
    color: "Silver",
  },
  {
    hex: "#59515E",
    color: "Smoke",
  },
  {
    hex: "#3E3D53",
    color: "Slate",
  },
  {
    hex: "#41424C",
    color: "Anchor",
  },
  {
    hex: "#564C4D",
    color: "Ash",
  },
  {
    hex: "#4D4C5C",
    color: "Porpoise",
  },
  {
    hex: "#7C6E7F",
    color: "Dove",
  },
  {
    hex: "#655967",
    color: "Fog",
  },
  {
    hex: "#7F7D9C",
    color: "Flint",
  },
  {
    hex: "#232023",
    color: "Charcoal Gray",
  },
  {
    hex: "#333333",
    color: "Pebble",
  },
  {
    hex: "#3F3F4E",
    color: "Lead",
  },
  {
    hex: "#9897A9",
    color: "Coin",
  },
  {
    hex: "#787276",
    color: "Fossil",
  },
];

const seedDB = async () => {
  await Swatch.deleteMany({});
  console.log("deleted");
  await Swatch.insertMany(swatches);
  console.log("seeded");
};

seedDB().then(() => {
  mongoose.connection.close();
});
