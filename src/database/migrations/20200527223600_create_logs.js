
exports.up = function(knex) {
    return knex.schema.createTable('logs', function(table){
        table.increments('id');

        table.integer('id_user').notNullable();
        table.foreign('id_user').references('id').inTable('users');

        table.string('acao').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('logs');
};
