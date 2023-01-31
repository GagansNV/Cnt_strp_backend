'use strict';

/**
 * people-count controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::people-count.people-count');
