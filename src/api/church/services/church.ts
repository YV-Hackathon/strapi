/**
 * church service
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreService('api::church.church', ({ strapi }) => ({
  // Custom service methods can be added here
  async findActiveChurches() {
    return await strapi.entityService.findMany('api::church.church', {
      filters: {
        isActive: true
      },
      sort: { sortOrder: 'asc', name: 'asc' }
    });
  },

  async findByDenomination(denomination: string) {
    return await strapi.entityService.findMany('api::church.church', {
      filters: {
        isActive: true,
        denomination: {
          $containsi: denomination
        }
      },
      sort: { sortOrder: 'asc', name: 'asc' }
    });
  },

  async getChurchesWithSpeakers() {
    return await strapi.entityService.findMany('api::church.church', {
      filters: {
        isActive: true
      },
      populate: {
        speakers: true
      },
      sort: { sortOrder: 'asc', name: 'asc' }
    });
  }
}));
