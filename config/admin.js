module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  url: env('PUBLIC_URL') + '/admin',
});
