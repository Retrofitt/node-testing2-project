
exports.seed = function(knex) {
  return knex('testSubjects')
    .truncate()
    .then(function () {
      return knex('testSubjects').insert([
        {name: 'testSubject1'},
        {name: 'testSubject2'},
        {name: 'testSubject3'}
      ]);
    });
};