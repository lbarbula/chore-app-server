
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
  })
  .then(function(){
    return knex.schema.createTable('chores', function(table){
      table.increments('id');
      table.string('chore name');
      table.integer('assignment').references('id').inTable('users').onDelete('cascade');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
  .then(function(){
    return knex.schema.dropTableIfExists('chores')
  })
};
