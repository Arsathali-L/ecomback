module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_SECRET'),
  },
  url: env('ADMIN_URL'),
});
