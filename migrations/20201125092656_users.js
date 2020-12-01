exports.up = function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().unique();
    table.string('email').unique().index();
    table.string('hash').unique().index();
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTable('users');
};
