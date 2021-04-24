
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['8a96cKYY4cJUv4WxHbqu7x'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  