const mongoose = require('mongoose')
const Schema = mongoose.Schema

// blueprint for the herb form
const herbsSchema = new Schema(
    {
        herbname: {
            type: String,
            required: true //this will be applied to the searches
        },
        location: {
            type: String,
        },
        uses: {
            type: String,
            required: true // this will be applied to the searches
        },
        other: {
            type: Object
        },
        popularUse:{
            type: Boolean,
            required: true // this will be applied to top 20 most popular
        }
    }
)

module.exports = mongoose.model("Herbs", herbsSchema)
//Hopefully this fulfills the needs of our Schema!