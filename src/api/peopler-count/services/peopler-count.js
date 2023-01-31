'use strict';

/**
 * peopler-count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::peopler-count.peopler-count');
