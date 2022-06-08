//URL Schema using mongoose
const mongoose = require("mongoose")
const urlSchema = new mongoose.Schema({
    sourceUrl:{type:String,required:true},
    urlId:{type:String,required:true},
})

module.exports = mongoose.model("Url",urlSchema)