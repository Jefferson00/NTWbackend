
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table){
        table.increments('id');

        table.string('categoria').notNullable();
        table.string('modelo').notNullable();
        table.string('fabricante').notNullable();
        table.string('caracteristica').notNullable();
        table.string('imagem').notNullable();
        table.boolean('isEOL').notNullable();
    })
};

exports.down = function(knex) {
       return knex.schema.dropTable('produtos');
};
