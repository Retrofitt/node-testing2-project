const router = require('express').Router()
const TestSubjects = require('./testSubjects-model')

router.get('/', (req, res)=>{
    TestSubjects.getAll()
        .then(testSubjects =>{
            res.status(200).json(testSubjects)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
})

router.post('/', async (req, res)=>{
    const newSubject = await TestSubjects.add(req.body)
    res.status(201).json(newSubject)
})

router.delete('/:id', async (req, res)=>{
    try{
        const removedSubject = await TestSubjects.remove(req.params.id)
        res.status(200).json(removedSubject)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router