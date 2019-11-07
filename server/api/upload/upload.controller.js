'use strict';
var async_module = require('async');
var multer = require('multer');
const uuidv4 = require('uuid/v4');
const mime = require('mime-types')

exports.create = function (req, res, next) {
    console.log(req);

    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
};


// SET STORAGE
exports.storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadbucket/')
    },
    filename: function (req, file, cb) {
        let mimeType = mime.extension(file.mimetype)
        cb(null, uuidv4() + '.' + mimeType)
    }
})