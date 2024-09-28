
exports.up = function(knex) {
    return knex.schema.createTable('testSubjects', tbl =>{
        tbl.increments()
        tbl.string('name', 20)
            .unique()
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('testSubjects')
};