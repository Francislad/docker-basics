const { Client } = require('pg');

const client = new Client({
  database: 'dbDatabase',
  user: 'dbUser',
  password: 'dbPassword',
  host: 'postgres',
  port: 5432
});
client.connect()

async function getTime() {
  return client.query(`SELECT NOW()`).then(r => r.rows[0].now);
}

module.exports = {
  getTime,
};