
exports.up = function(knex) {
  return knex.schema.createTable('Security', table => {
      table.increments('id');
      table.string('level').notNullable();
      table.integer('cvss').notNullable();
      table.string('title').unique().notNullable();
      table.string('vulnerability').unique().notNullable();
      table.string('Solution').unique().notNullable();
      table.string('reference').unique().notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Security');
};
