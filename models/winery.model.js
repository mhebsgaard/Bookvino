const mongoose = require('mongoose');

const winerySchema = new mongoose.Schema({

    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pictures: {
        type: String,
        required: true
    },
    icons: {
        type: String,
        required: true
    },
    mapcoords: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    nearby: {
        type: String,
        required: true
    },
    openinghrs: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Winery', winerySchema, 'winerys')