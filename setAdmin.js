//because setting the password through the website is too easy
const bcrypt = require('bcrypt')
const newAdminPassword = process.argv[3]
const Admin = require('./models/Admin.js')
const mongoose = require('mongoose')
require('dotenv').config()

const filter = {};
const update = { password: bcrypt.hashSync(newAdminPassword, 11)};


mongoose.connect(process.env.DB_LOCATION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    ()=> console.log("connected to database")
)

let result = bcrypt.compareSync(process.argv[2], '$2b$11$p2dcuXpn.7XpoPfcRM3yC.yr7xlQF4OCPW6PN6LDdyTFzCaRi9tPG') //What's this? You're approaching me?

if(result){
    Admin.findOneAndUpdate(filter, update, {
        useFindAndModify: false,
        new: true,
        upsert: true //basically makes this a singleton
    }, (err, res) => {
        console.log(err || 'Booyah!'); 
        res && console.log(res)
    })
} else {
    console.log('wrong server password')
}
