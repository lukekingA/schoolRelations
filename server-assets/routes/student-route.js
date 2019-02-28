let Students = require('../models/student')
let router = require('express').Router()

//GET

router.get('', (req, res, next) => {
    Students.find({})
        .then(students => {
            res.status(200).send(students)
        })
        .catch(err => {
            res.status(400).send('error' + err)
        })
})


router.get('/:id', (req, res, next) => {
    Students.findById(req.params.id).populate('teacher')
        .then(student => res.send(student))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})

router.post('', (req, res, next) => {
    Students.create(req.body)
        .then(student => res.send(student))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})

router.put('/:id', (req, res, next) => {
    Students.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(student => res.send(student))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})

router.delete('/:id', (req, res, next) => {
    Students.findOneAndDelete(req.params.id)
        .then(() =>
            res.send('Student has been banished!!!'))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})



module.exports = router