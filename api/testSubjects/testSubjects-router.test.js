const server = require('../server')
const request = require('supertest')
const db = require('../../data/dbConfig')


beforeAll(async()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async()=>{
    await db.seed.run()
})

afterAll(async()=>{
    await db.destroy()
})

describe('[GET] returns all testSubjects', ()=>{
    let res
    beforeEach(async () => {
    res = await request(server).get('/')
    })
    it('gets all(3) testSubjects from database', async ()=>{
    expect(res.body).toHaveLength(3)
    })
    it('responds with a status(200)', async()=>{
    expect(res.status).toBe(200)
    })
})

describe('[POST] Creates testSubject into database', ()=>{
    let res
    beforeEach(async () => {
        res = await request(server).post('/').send({name:'testSubject4'})
        })
    it('creates a new user', async()=>{
        const newTestSubjects = await db('testSubjects')
        expect(newTestSubjects).toHaveLength(4)
    })
    it('responds with the correct status(201)', async()=>{
        expect(res.status).toBe(201)
    })
})

describe('[DELETE] Deletes testSubject from database', ()=>{
    let res
    beforeEach(async () => {
        res = await request(server).delete('/1')
        })
    it('gets all remaining(2) testSubjects from database', async()=>{
        const testSubjects = await db('testSubjects')
        expect(testSubjects).toHaveLength(2)
    })
    it('responds with a status(200)', async()=>{
        expect(res.status).toBe(200)
    })
})


