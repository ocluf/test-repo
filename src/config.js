/**
 * Application configuration
 */

const config = {
  development: {
    db: {
      host: 'localhost',
      port: 5432,
      database: 'testdb',
      user: 'devuser',
      password: 'devpassword'
    },
    redis: {
      host: 'localhost',
      port: 6379
    },
    logLevel: 'debug'
  },
  production: {
    db: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT || 6379
    },
    logLevel: 'info'
  },
  test: {
    db: {
      host: 'localhost',
      port: 5432,
      database: 'testdb_test',
      user: 'testuser',
      password: 'testpassword'
    },
    redis: {
      host: 'localhost',
      port: 6379
    },
    logLevel: 'debug'
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env];
