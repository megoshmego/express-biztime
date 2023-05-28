const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://megan:mego@localhost/biztime',
});

client.connect();

module.exports = client;



