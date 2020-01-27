const express = require("express");
const mothersMedRouter = express.Router();
const Herbs = require("../models/Herbs.js");

//This will be the Top Twenty Array!
const mothersMed = [
//   {
//     herbname: "Calendula",
//     location: "North America",
//     uses: "Skin",
//     other: "This plant is Edible",
//     popularUse: true
//   },
  {
    herbname: "Cayenne",
    location: "North America",
    uses: "Immune",
    other: "This plant can stop a heart attack!",
    popularUse: true
  },
  {
    herbname: "Chamomile",
    location: "North America",
    uses: "Sedative",
    other: "This is also a great Anti-Inflammatory!",
    popularUse: true
  },
  {
    herbname: "Chickweed",
    location: "North America",
    uses: "Skin",
    other: "This is also super great for Kidneys and Liver",
    popularUse: true
  },
  {
    herbname: "Dandelion",
    location: "North America",
    uses: "Diuretic",
    other: "Edible plant, Great Astringent Flavor!!",
    popularUse: true
  },
  {
    herbname: "FeverFew",
    location: "North America",
    uses: "Fever",
    other: "Great for Migraines!",
    popularUse: true
  },
  {
    herbname: "Garlic",
    location: "North America",
    uses: "Immune",
    other: "Stimulates digestive enzymes!",
    popularUse: true
  },
  {
    herbname: "Ginger",
    location: "North America",
    uses: "Immune",
    other: "Great in food as well",
    popularUse: true
  },
  {
    herbname: "Lavender",
    location: "North America",
    uses: "Relaxant",
    other: "Smells wonderful.",
    popularUse: true
  },
  {
    herbname: "Lemon Balm",
    location: "North America",
    uses: "Relaxant",
    other: "Delicious Lemony Taste",
    popularUse: true
  },
  {
    herbname: "Marshmallow",
    location: "North America",
    uses: "Anti-Inflammatory",
    other: "Great in food as well",
    popularUse: true
  },
  {
    herbname: "Mullein",
    location: "North America",
    uses: "Lungs",
    other: "If you have no toilet paper on a hike, use this soft leaf",
    popularUse: true
  },
  {
    herbname: "Oregano",
    location: "North America",
    uses: "Immune",
    other: "One of the greatest Culinary Herbs",
    popularUse: true
  },
  {
    herbname: "Peppermint",
    location: "North America",
    uses: "Digestive",
    other: "Very Cooling herb",
    popularUse: true
  },
  {
    herbname: "Plantain",
    location: "North America",
    uses: "Cleansing",
    other: "Great for detoxifying the blood as well.",
    popularUse: true
  },
  {
    herbname: "Rosemary",
    location: "North America",
    uses: "Circulatory",
    other: "Great for high blood pressure",
    popularUse: true
  },
  {
    herbname: "St. John's Wart",
    location: "North America",
    uses: "Depression",
    other: "Also great for neuralgia",
    popularUse: true
  },
  {
    herbname: "Thyme",
    location: "North America",
    uses: "Immune",
    other: "Great for the Thymus!",
    popularUse: true
  },
  {
    herbname: "Valerian",
    location: "North America",
    uses: "Relaxant",
    other: "Sleep aid, and stress relief as well",
    popularUse: true
  },
  {
    herbname: "Yarrow",
    location: "North America",
    uses: "Fever",
    other: "Induces sweating",
    popularUse: true
  },
  {
    herbname: "Echinacea",
    location: "North America",
    uses: "Immune",
    other: "Probably the greatest placebo outcome herb ever.",
    popularUse: false
  },
  {
    herbname: "Gingko",
    location: "North America",
    uses: "Anti-Inflammatory",
    other: "Helps preveny Dimentia as well!",
    popularUse: false
  },
  {
    herbname: "Goldenseal",
    location: "North America",
    uses: "Immune",
    other: "Great for infections",
    popularUse: false
  },
  {
    herbname: "Milk thistle",
    location: "North America",
    uses: "Immune",
    other: "Preventitive to Cancer!",
    popularUse: false
  },
  {
    herbname: "Saw palmetto",
    location: "North America",
    uses: "Digestive",
    other: "May be useful for BPH",
    popularUse: false
  },
  {
    herbname: "Aloe vera",
    location: "North America",
    uses: "Skin",
    other: "Great moisturizer",
    popularUse: false
  },
  {
    herbname: "Anise",
    location: "North America",
    uses: "Reproductive",
    other: "Can increase Libido in Women",
    popularUse: false
  },
  {
    herbname: "Annatto",
    location: "North America",
    uses: "Immune",
    other: "Comes crom the seed of the Anchiote tree",
    popularUse: false
  },
  {
    herbname: "Arrowroot",
    location: "North America",
    uses: "Infection",
    other: "Can boost the immune system as well.",
    popularUse: false
  },
  {
    herbname: "Asafoetida",
    location: "India",
    uses: "Asthma",
    other: "Also wonderful in aiding digestion",
    popularUse: false
  },
  {
    herbname: "Ashwaganda",
    location: "India",
    uses: "Thyroid",
    other: "Great for stress too!",
    popularUse: false
  },
  {
    herbname: "Astragalus Root",
    location: "China",
    uses: "Immune",
    other: "Powerful adaptogen",
    popularUse: false
  },
  {
    herbname: "Barberry",
    location: "North America",
    uses: "Immune",
    other: "Great for diabetics",
    popularUse: false
  },
  {
    herbname: "Basil",
    location: "North America",
    uses: "Immune",
    other: "Antibacterial monster!",
    popularUse: false
  },
  {
    herbname: "Berberine",
    location: "India",
    uses: "Anti-Inflammatory",
    other: "Natural Alkaloid",
    popularUse: false
  },
  {
    herbname: "Black Cohosh",
    location: "North America",
    uses: "Immune",
    other: "Part of the Goose-berry family.",
    popularUse: false
  },
  {
    // herbname: "Black Currant",
    // location: "North America",
    // uses: "Pathogenic",
    // other: "Great for cancer patients.",
    // popularUse: false
  },
  {
    herbname: "Burdock Root",
    location: "North America",
    uses: "Detoxify",
    other: "The leaves are wonderful for salads.",
    popularUse: false
  },
  {
    herbname: "Cardamom",
    location: "India",
    uses: "Circulatory",
    other: "Tastes great in sweeter dishes.",
    popularUse: false
  },
  {
    herbname: "Cat's Claw",
    location: "North America",
    uses: "Anti-Viral",
    other: "Improves damage to our DNA!",
    popularUse: false
  }
];

// mothersMedRouter.get("/:herbsId", (req, res, next) => {
//   if (err) {
//     res.status(500);
//     return next(errMsg);
//   }
//   res.status(200).send(mothersMed);
// });

mothersMedRouter.get("/", (req, res, next) => {
  Herbs.find((err, herbs) => {
    if (err) {
      response.status(500);
      return next(err);
    }
    return res.status(200).send(herbs);
  });
});

//if we end up posting to this...
mothersMedRouter.post("/", (req, res, next) => {
  const newHerb = new Herbs(req.body);
  newHerb.save((err, savedHerb) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedHerb);
  });
});

//Filter
mothersMedRouter.get("/search/popularUse", (req, res, next) => {
  Herbs.find({ popularUse: req.query.popularUse }, (err, herbs) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(herbs);
  });
});

//If we want to edit an entry
mothersMedRouter.put("/:herbsId", (req, res, next) => {
  Herbs.findOneAndUpdate(
    { _id: req.params.herbsId },
    req.body,
    { new: true },
    (err, updatedHerb) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedHerb);
    }
  );
});

module.exports = mothersMedRouter;