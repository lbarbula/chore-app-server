// Update with your config settings.

module.exports = {

development: {
  client: 'pg',
  connection: 'postgres://localhost/' + process.env.DATABASE_NAME
}

};
