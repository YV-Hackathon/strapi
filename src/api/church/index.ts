/**
 * church API
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/churches',
      handler: 'church.find',
      config: {
        policies: [],
        middlewares: ['api::church.church-populate']
      }
    },
    {
      method: 'GET',
      path: '/churches/:id',
      handler: 'church.findOne',
      config: {
        policies: [],
        middlewares: ['api::church.church-populate']
      }
    },
    {
      method: 'POST',
      path: '/churches',
      handler: 'church.create',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'PUT',
      path: '/churches/:id',
      handler: 'church.update',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'DELETE',
      path: '/churches/:id',
      handler: 'church.delete',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/churches/active',
      handler: 'church.findActive',
      config: {
        policies: [],
        middlewares: ['api::church.church-populate']
      }
    },
    {
      method: 'GET',
      path: '/churches/by-denomination',
      handler: 'church.findByDenomination',
      config: {
        policies: [],
        middlewares: ['api::church.church-populate']
      }
    }
  ]
};
