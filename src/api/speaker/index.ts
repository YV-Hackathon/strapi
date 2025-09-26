/**
 * speaker API
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/speakers',
      handler: 'speaker.find',
      config: {
        policies: [],
        middlewares: ['api::speaker.speaker-populate']
      }
    },
    {
      method: 'GET',
      path: '/speakers/:id',
      handler: 'speaker.findOne',
      config: {
        policies: [],
        middlewares: ['api::speaker.speaker-populate']
      }
    },
    {
      method: 'POST',
      path: '/speakers',
      handler: 'speaker.create',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'PUT',
      path: '/speakers/:id',
      handler: 'speaker.update',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'DELETE',
      path: '/speakers/:id',
      handler: 'speaker.delete',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/speakers/pastors',
      handler: 'speaker.findPastors',
      config: {
        policies: [],
        middlewares: ['api::speaker.speaker-populate']
      }
    },
    {
      method: 'GET',
      path: '/speakers/guest',
      handler: 'speaker.findGuestSpeakers',
      config: {
        policies: [],
        middlewares: ['api::speaker.speaker-populate']
      }
    }
  ]
};
