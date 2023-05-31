const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const createSchema = new Schema({
    game: {type: String, required: true},
    title:{type: String, required: true},
    post:{type: String, required: true},
    timestamps: true,
})

module.exports = mongoose.model('Create', createSchema);