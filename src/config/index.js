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
    storage: {
      uploadDir: './uploads',
      maxFileSize: 5 * 1024 * 1024, // 5MB
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf']
    },
    auth: {
      jwtSecret: 'dev_secret_key',
      jwtExpiration: '1h',
      bcryptSaltRounds: 10
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
    storage: {
      uploadDir: process.env.UPLOAD_DIR || './uploads',
      maxFileSize: process.env.MAX_FILE_SIZE || 5 * 1024 * 1024,
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf']
    },
    auth: {
      jwtSecret: process.env.JWT_SECRET,
      jwtExpiration: process.env.JWT_EXPIRATION || '1h',
      bcryptSaltRounds: 12
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
    storage: {
      uploadDir: './test-uploads',
      maxFileSize: 1 * 1024 * 1024, // 1MB for testing
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf']
    },
    auth: {
      jwtSecret: 'test_secret_key',
      jwtExpiration: '1h',
      bcryptSaltRounds: 4 // Faster for testing
    },
    logLevel: 'debug'
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env];
