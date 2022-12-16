const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventMongo = new Schema({
    eventname: {
        type: String,
        unique: true,
    },
}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventMongo);

module.exports = Event;