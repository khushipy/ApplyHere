const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    company: String,
    position: String,
    status: { type: String, default: "Applied" },
    dateApplied: { type: Date, default: Date.now },
    source: String,
    notes: String
});

module.exports = mongoose.model('Application', applicationSchema);
