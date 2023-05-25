const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true
    },
    service: { type: String }, // Google, Facebook
    serviceId: { type: String }, //userId Google || Facebook
    password: { type: String },
    fullName: {
        type: String,
        required: true
    },
    // Nam: 0, Nữ 1
    gender: { type: Number, default: 0 },
    birthday: { type: String },
    phoneNumber: { type: String },
    avatar: { 
        url: { type: String, default: 'https://res.cloudinary.com/dtfsciqga/image/upload/v1684033250/no-avatar_kitran.png' },
        publicId: { type: String }
     },
    address: [{
        address: { type: String },
        provinceId: { type: Number, required: true },
        districtId: { type: Number, required: true },
        wardId: { type: String, required: true },
        isDefault: { type: Boolean, default: false}
    }],
    cart: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', require: true },
        quantity: { type: Number, default: 1 },
    }],
    role: { type: Number, default: 1 },
    status: { type: Number, default: 0 }
  
}, {
    timestamps: true
})

userSchema.index({email: 1, serviceId: -1})

module.exports = mongoose.model('User', userSchema)
