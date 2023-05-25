const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
   linkName: { type: String, },
   userId:{ type: String},  
   informationId: {type:String}
   
})
module.exports = mongoose.model('link', linkSchema)


