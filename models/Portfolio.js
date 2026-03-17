
const mongoose = require("mongoose");
const portfolioSchema = new mongoose.Schema({
    name: String,
    username:String,
    title:String,
    about:String,
    skills:String,

    projects: [
        {
            name: String,
            link: String
        }
    ],

    github: String,
    linkedin: String
});
module.exports = mongoose.model("Portfolio", portfolioSchema);