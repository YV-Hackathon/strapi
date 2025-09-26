/**
 * church router
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::church.church', {
  config: {
    find: {
      middlewares: ['api::church.church-populate']
    },
    findOne: {
      middlewares: ['api::church.church-populate']
    }
  }
});

// Custom routes
export const customRoutes = {
  routes: [
    {
      method: 'GET',
      path: '/churches/active',
      handler: 'church.findActive',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/churches/by-denomination',
      handler: 'church.findByDenomination',
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
};
