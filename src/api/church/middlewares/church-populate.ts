/**
 * church-populate middleware
 */

export default (config, { strapi }) => {
  return async (ctx, next) => {
    // Add population for related fields
    if (ctx.query.populate === undefined) {
      ctx.query.populate = {
        logo: true,
        speakers: true
      };
    }
    
    await next();
  };
};
