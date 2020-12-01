exports.up = function up(knex) {
  return knex.schema.createTable('instructions', (table) => {
    table.increments('id').primary();
    table.uuid('instructionId').index().unique();
    table.integer('batch_id').unsigned();
    table.foreign('batch_id').references('batches.id');
    table.string('recipientNumber').notNullable().index();
    table.string('recipientReference');
    table.decimal('recipientAmount', 13, 2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTable();
};
