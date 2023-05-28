const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://megan@localhost/biztime',
});


client.connect();



module.exports = client;




