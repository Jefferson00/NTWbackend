
exports.up = function(knex) {
    return knex.schema.createTable('atas', function(table){
        table.increments('id');
        table.integer('id_produtos').notNullable();
        table.foreign('id_produtos').references('id').inTable('produtos');

        table.string('orgao').notNullable();
        table.integer('quantidade').notNullable();
        table.string('garantia').notNullable();
        table.string('validade').notNullable();
        table.decimal('valor').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('atas');
};
