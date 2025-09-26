/**
 * speaker controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::speaker.speaker', ({ strapi }) => ({
  // Custom controller methods can be added here
  async findPastors(ctx) {
    const { data, meta } = await super.find(ctx);
    
    // Filter to only show pastors
    const pastors = data.filter(speaker => speaker.attributes.isPastor === true);
    
    return {
      data: pastors,
      meta
    };
  },

  async findGuestSpeakers(ctx) {
    const { data, meta } = await super.find(ctx);
    
    // Filter to only show guest speakers (no church relationship)
    const guestSpeakers = data.filter(speaker => !speaker.attributes.church);
    
    return {
      data: guestSpeakers,
      meta
    };
  }
}));
