require('dotenv').config()
module.exports = {
  development: {
    database: 'Sportify-API',
    dialect: 'postgres'
  },
  test: {
    database: 'Sportify-API',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
