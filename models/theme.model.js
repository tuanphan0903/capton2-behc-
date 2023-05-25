const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThemeSchema = new Schema({
   //  themeName: { type: String, },
   //  theme: { 
   //    url: { type: String },
   //    publicId: { type: String }
   // },
   color: {type: String},
   background: {type: String},
   box: {type: String},
   border: {type: String},
})
module.exports = mongoose.model('Theme', ThemeSchema)