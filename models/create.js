const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const createSchema = new Schema({
    userName: {type: String, required: true},
    postTitle: {type: String, required: true},
    postBody: {type: String, required: true},
    timestamps: true,
})

module.exports = mongoose.model('Create', createSchema);