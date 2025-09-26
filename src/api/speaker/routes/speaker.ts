/**
 * speaker router
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::speaker.speaker', {
  config: {
    find: {
      middlewares: ['api::speaker.speaker-populate']
    },
    findOne: {
      middlewares: ['api::speaker.speaker-populate']
    }
  }
});

// Custom routes
export const customRoutes = {
  routes: [
    {
      method: 'GET',
      path: '/speakers/pastors',
      handler: 'speaker.findPastors',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/speakers/active',
      handler: 'speaker.findActive',
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
};
