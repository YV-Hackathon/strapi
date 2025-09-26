/**
 * speaker service
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreService('api::speaker.speaker', ({ strapi }) => ({
  // Custom service methods can be added here
  async findPastors() {
    return await strapi.entityService.findMany('api::speaker.speaker', {
      filters: {
        church: {
          $not: null
        }
      },
      populate: {
        church: true
      },
      sort: { sortOrder: 'asc', name: 'asc' }
    });
  },

  async findAllSpeakers() {
    return await strapi.entityService.findMany('api::speaker.speaker', {
      populate: {
        church: true
      },
      sort: { sortOrder: 'asc', name: 'asc' }
    });
  },

  async findGuestSpeakers() {
    return await strapi.entityService.findMany('api::speaker.speaker', {
      filters: {
        church: null
      },
      populate: {
        church: true
      },
      sort: { sortOrder: 'asc', name: 'asc' }
    });
  },

}));
