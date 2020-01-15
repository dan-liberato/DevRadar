const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    gitgub_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);