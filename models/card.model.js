const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    cardFullName: { type: String },
    cardFront: { 
      urlFront: { type: String },
      publicIdFront: { type: String }
   },
   cardBack: { 
    urlBack: { type: String },
    publicIdBack: { type: String }
 },
    user: { type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },
})
module.exports = mongoose.model('Card', cardSchema)


