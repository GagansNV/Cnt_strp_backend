module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'canteen_db'),
      user: env('DATABASE_USERNAME', 'admindb'),
      password: env('DATABASE_PASSWORD', 'Admin@!nd!a0ffice'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
