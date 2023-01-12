'use strict';

/**
 * food-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-main.food-main');
