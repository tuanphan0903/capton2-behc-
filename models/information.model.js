const mongoose = require('mongoose')
const Schema = mongoose.Schema

const informationSchema = new Schema({
  userId:{ type: String},  
  informationName: { type: String, },
    informationPhone: { type: String },
    informationNote: { type: String, },
    informationAvatar: { 
      url: { type: String, default: 'https://res.cloudinary.com/dtfsciqga/image/upload/v1684033250/no-avatar_kitran.png' },
      publicId: { type: String }
   },
   informationLink: [{
      title: { type: String},
      url: { type: String },
   }],
   Theme: {
      color: {type: String},
      background:{type: String},
      backgroundColor: {type: String},
   },
})
module.exports = mongoose.model('Information', informationSchema)


