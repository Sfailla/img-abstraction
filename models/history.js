const mongoose = require('mongoose');


const historySchema = new mongoose.Schema({
    term: {
        type: String
    },
    when: {
        type: Date,
        default: Date.now
    }
},{ collection: 'history' });

const History = mongoose.model('History', historySchema);

module.exports = History;