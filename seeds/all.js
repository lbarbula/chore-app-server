
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, first_name: 'Lucas', last_name: 'Barbula'}),
        knex('users').insert({id: 2, first_name: 'Leslie', last_name:'Smail'})
      ]);
    });
};
