module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_SECRET'),
  },
  url: env('PUBLIC_URL') + '/admin',
});
