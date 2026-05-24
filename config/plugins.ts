import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

export default () => ({
  upload: {
    config: {
      responsiveDimensions: false,
      breakpoints: {},

    },
  },
});