'use strict';

/**
 * food-inventory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-inventory.food-inventory');
