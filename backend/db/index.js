const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false, // don't check for SSL cert
  },
});

module.exports = {
  query: (query) => pool.query(query),
};
