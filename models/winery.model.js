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
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mail: {
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
    pictures: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Winery', winerySchema, 'winerys')