/**
 * church controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::church.church', ({ strapi }) => ({
  // Custom controller methods can be added here
  async findActive(ctx) {
    const { data, meta } = await super.find(ctx);
    
    // Filter to only show active churches
    const activeChurches = data.filter(church => church.attributes.isActive === true);
    
    return {
      data: activeChurches,
      meta
    };
  },

  async findByDenomination(ctx) {
    const { denomination } = ctx.query;
    
    if (!denomination || typeof denomination !== 'string') {
      return ctx.badRequest('Denomination parameter is required');
    }

    const { data, meta } = await super.find(ctx);
    
    // Filter by denomination
    const churchesByDenomination = data.filter(church => 
      church.attributes.denomination?.toLowerCase().includes(denomination.toLowerCase())
    );
    
    return {
      data: churchesByDenomination,
      meta
    };
  }
}));
