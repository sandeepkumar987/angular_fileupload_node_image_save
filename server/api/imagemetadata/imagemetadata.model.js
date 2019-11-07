'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mongoose = require('mongoose');

var ImagesMetadataSchema = new Schema({
    metadata: {},
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
}, { versionKey: false, strict: false, timestamps: true });


module.exports = mongoose.model('ImagesMetadata', ImagesMetadataSchema);