'use strict';

/**
 * people-count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::people-count.people-count');
