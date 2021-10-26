"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        // Generating Slug on the basis of character name and element on collection creation
        const eleName = await strapi
          .query("elements")
          .findOne({ id: data.element });

        data.slug = slugify(data.name + " " + eleName.name, {
          lower: true,
        });
        console.log(data);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.name) {
        // Generating Slug on the basis of character name and element on collection update
        const eleName = await strapi
          .query("elements")
          .findOne({ id: data.element });

        data.slug = slugify(data.name + " " + eleName.name, {
          lower: true,
        });
        console.log(data);
      }
    },
  },
};
