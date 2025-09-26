/**
 * speaker-populate middleware
 */

export default (config, { strapi }) => {
  return async (ctx, next) => {
    // Add population for related fields
    if (ctx.query.populate === undefined) {
      ctx.query.populate = {
        profileImage: true,
        church: true
      };
    }
    
    await next();
  };
};
