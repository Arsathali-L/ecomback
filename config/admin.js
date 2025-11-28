module.exports = ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  url: env('ADMIN_URL'),
});
