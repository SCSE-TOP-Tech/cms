'use strict';

/**
 * leo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leo.leo');
