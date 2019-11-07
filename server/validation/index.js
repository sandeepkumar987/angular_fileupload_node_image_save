'use strict';
var Joi = require('joi');

exports.ServicePutSchemaTemplate = {
    body: {
        name: Joi.string().required(),
        _id: Joi.string().required()
    }
};

exports.ServiceDeleteSchemaTemplate = {
    query: {
        id: Joi.string().required().error((errors) => {
            return {
                template: 'Missing id Parameter',
                context: {
                    errors: errors.length,
                    codes: errors.map((err) => err.type)
                }
            };
        })
    }
};