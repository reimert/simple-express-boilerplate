exports.up = function up(knex) {
  return knex.schema.createTable('batches', (table) => {
    table.increments('id').primary();
    table.uuid('batchId').index().unique();
    table.string('fileName').notNullable();
    table.integer('numberOfRows').unsigned().default(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTable('batches');
};
