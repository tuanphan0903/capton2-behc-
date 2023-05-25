const nodemailer = require('nodemailer')
const { google } = require('googleapis')
require('dotenv').config()

const OAuth2 = google.auth.OAuth2

const OAuth2Client = new OAuth2(
    YOUR_CLIENT_ID = '1076648790118-3jrpn4hssgn0lssefskmlptdgfmhbbe9.apps.googleusercontent.com',
    YOUR_CLIENT_SECRET = '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',
    YOUR_REDIRECT_URI = 'https://developers.google.com/oauthplayground'
);

OAuth2Client.setCredentials({
    refresh_token: YOUR_REFRESH_TOKEN = '1//04N0mfj4LQ8ZnCgYIARAAGAQSNwF-L9IrCZWWGiGOa_D2-9yBtvj4aiGbWN1oz4yGBkghfnH2NneuHsKP8ly_MLKZlK7VN3Q7uAo'
})

const accessToken = new Promise((resolve, reject) => {
    OAuth2Client.getAccessToken((err, token) => {
        if (err) reject(err)
        resolve(token)
    })
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        type: 'OAuth2',
        user: YOUR_EMAIL_ADDRESS = "trandangdinhvt1@gmail.com",
        clientId: YOUR_CLIENT_ID,
        clientSecret: YOUR_CLIENT_SECRET,
        refreshToken: YOUR_REFRESH_TOKEN,
        accessToken: accessToken
    }
})

module.exports = { transporter }