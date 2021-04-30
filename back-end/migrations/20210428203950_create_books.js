
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments('userid').primary();
      table.string('lastname');
      table.string('firstname');
    })
    .then(() => {
      return knex.schema.createTable('books', table => {
        table.increments('bookid').primary();
        table.string('title');
        table.string('author');
        table.integer('isbn');
        table.boolean('checkedout');
        table.integer('userid');
        table.foreign('userid').references('userid').inTable('users')
      })
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('books')
  .dropTableIfExists('users')
};
