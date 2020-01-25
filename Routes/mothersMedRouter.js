const express = require('express')
const mothersMedRouter = express.Router()
const mothersMed = require('..models/Herbs.js')
const uuid = require(uuid/v4)


//This will be the Top Twenty Array!

const mothersMed = [
    {
        herbname: "Calendula",
        location: "North America",
        uses: "Skin",
        other:"This plant is Edible",
        popularUse: true,
        _id: uuid()

    },
    {
        herbname: "Cayanne",
        location: "North America",
        uses: "Immune",
        other: "This plant can stop a heart attack!",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Chamomile",
        location: "North America",
        uses: "Sedative",
        other: "This is also a great Anti-Inflammatory!",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Chickweed",
        location: "North America",
        uses: "Skin",
        other: "This is also super great for Kidneys and Liver",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Dandelion",
        location: "North America",
        uses: "Diuretic",
        other: "Edible plant, Great Astringent Flavor!!",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "FeverFew",
        location: "North America",
        uses: "Fever",
        other: "Great for Migranes!",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Garlic",
        location: "North America",
        uses: "Immune",
        other: "Stimulates digestive enzymes!",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Ginger",
        location: "North America",
        uses: "Immune",
        other: "Great in food as well",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Lavender",
        location: "North America",
        uses: "Relaxant",
        other: "Smells wonderful.",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Lemon Balm",
        location: "North America",
        uses: "Relaxant",
        other: "Delicious Lemony Taste",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Marshmallow",
        location: "North America",
        uses: "Anti-Inflammatory",
        other: "Great in food as well",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Mullein",
        location: "North America",
        uses: "Lungs",
        other: "If you have no toilet paper on a hike, use this soft leaf",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Oregano",
        location: "North America",
        uses: "Immune",
        other: "One of the greatest Culinary Herbs",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Peppermint",
        location: "North America",
        uses: "Digestive",
        other: "Very Cooling herb",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Plantain",
        location: "North America",
        uses: "Cleansing",
        other: "Great for detoxifying the blood as well.",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Rosemary",
        location: "North America",
        uses: "Circulatory",
        other: "Great for high blood pressure",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "St. John's Wart",
        location: "North America",
        uses: "Depression",
        other: "Also great for neuralgia",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Thyme",
        location: "North America",
        uses: "Immune",
        other: "Great for the Thymus!",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Valerian",
        location: "North America",
        uses: "Relaxant",
        other: "Sleep aid, and stress relief as well",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Yarrow",
        location: "North America",
        uses: "Fever",
        other: "Induces sweating",
        popularUse: true,
        _id: uuid()
    },
    {
        herbname: "Echinacea",
        location: "North America",
        uses: "Immune",
        other: "Probably the greatest placebo outcome herb ever.",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Gingko",
        location: "North America",
        uses: "Anti-Inflammatory",
        other: "Helps preveny Dimentia as well!",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Goldenseal",
        location: "North America",
        uses: "Immune",
        other: "Great for infections",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Milk thistle",
        location: "North America",
        uses: "Immune",
        other: "Preventitive to Cancer!",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Saw palmetto",
        location: "North America",
        uses: "Digestive",
        other: "May be useful for BPH",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Aloe vera",
        location: "North America",
        uses: "Skin",
        other: "Great moisturizer",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Anise",
        location: "North America",
        uses: "Reproductive",
        other: "Can increase Libido in Women",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Annatto",
        location: "North America",
        uses: "Immune",
        other: "Comes crom the seed of the Anchiote tree",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Arrowroot",
        location: "North America",
        uses: "Infection",
        other: "Can boost the immune system as well.",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Asafoetida",
        location: "India",
        uses: "Asthma",
        other: "Also wonderful in aiding digestion",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Ashwaganda",
        location: "India",
        uses: "Thyroid",
        other: "Great for stress too!",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Astragalus Root",
        location: "China",
        uses: "Immune",
        other: "Powerful adaptogen",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Barberry",
        location: "North America",
        uses: "Immune",
        other: "Great for diabetics",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Basil",
        location: "North America",
        uses: "Immune",
        other: "Antibacterial monster!",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Berberine",
        location: "India",
        uses: "Anti-Inflammatory",
        other: "Natural Alkaloid",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Black Cohosh",
        location: "North America",
        uses: "Immune",
        other: "Part of the Goose-berry family.",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Black Currant",
        location: "North America",
        uses: "Pathogenic",
        other: "Great for cancer patients.",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Burdock Root",
        location: "North America",
        uses: "Detoxify",
        other: "The leaves are wonderful for salads.",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Cardamom",
        location: "India",
        uses: "Circulatory",
        other: "Tastes great in sweeter dishes.",
        popularUse: false,
        _id: uuid()
    },
    {
        herbname: "Cat's Claw",
        location: "North America",
        uses: "Anti-Viral",
        other: "Improves damage to our DNA!",
        popularUse: false,
        _id: uuid()
    },
    {
        
    }


]

mothersMedRouter.get("/", (req, res, next) => {
    if(err){
        res.status(500)
        return next(errMsg)
    }
    res.status(200).send(mothersMed)
})
//if we end up posting to this...
mothersMedRouter.post("/", (req, res, next) => {
    const newHerb = req.body
    newHerb._id = uuid()
    mothersMed.push(newHerb)
    res.status(201).send(`You've successfully added ${ newHerb.herbname } to the DataBase`)
})

module.exports = mothersMedRouter