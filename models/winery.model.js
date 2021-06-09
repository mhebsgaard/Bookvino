const mongoose = require('mongoose');

const winerySchema = new mongoose.Schema({

    country: {
        type: String,
        
    },
    name: {
        type: String,
        
    },
    location: {
        type: Number,
        
    },
    description: {
        type: String,
        
    },
    pictures: {
        type: String,
        
    },
    icons: {
        type: String,
        
    },
    mapcoords: {
        type: Number,
        
    },
    price: {
        type: Number,
        
    },
    adress: {
        type: String,
        
    },
    phone: {
        type: Number,
        
    },
    mail: {
        type: String,
        
    },
    nearby: {
        type: String,
        
    },
    openinghrs: {
        type: String,
       
    },
    website: {
        type: String,
        
    },
    ratings: {
        type: String,
        
    }
})

module.exports = mongoose.model('Winery', winerySchema, 'winerys')