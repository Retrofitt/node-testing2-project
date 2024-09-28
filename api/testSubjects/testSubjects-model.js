const db = require('../../data/dbConfig')


function getAll() {
    return db('testSubjects')
}

function findById(id) {
    return db('testSubjects')
        .where('id', id)
        .first()
}

async function add(testSubject) {
    const [id] = await db('testSubjects').insert(testSubject)
    return findById(id)
}

async function remove(id) {
    const removed = await findById(id)
    await db('testSubjects')
        .where('id', id)
        .delete()
    return removed
}

module.exports = {
    getAll,
    findById,
    add,
    remove
}