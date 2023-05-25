/** Database setup for BizTime. */

const { Client } = require('pg');

const client = new Client({
  user: 'megan',
  host: 'localhost',
  database: 'biztime',
  password: 'mego',
  port: 5432, // Default PostgreSQL port
});

client.connect();

module.exports = client;
