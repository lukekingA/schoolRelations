let Students = require('../models/student')
let Teachers = require('../models/teacher')
let router = require('express').Router()

//GET

router.get('', (req, res, next) => {
    Teachers.find({})
        .then(teachers => {
            res.status(200).send(teachers)
        })
        .catch(err => {
            res.status(400).send('error' + err)
        })
})


router.get('/:id', (req, res, next) => {
    Teachers.findById(req.params.id).populate('classroom')
        .then(teacher => res.send(teacher))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})

router.get('/:id/students', (req, res, next) => {
    Students.find({
            teacher: req.params.id
        }).populate('classroom')
        .then(students => res.send(students))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})


router.post('', (req, res, next) => {
    Teachers.create(req.body)
        .then(teacher => res.send(teacher))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})

router.put('/:id', (req, res, next) => {
    Teachers.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(teacher => res.send(teacher))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})

router.delete('/:id', (req, res, next) => {
    Teachers.findOneAndDelete({
            _id: req.params.id
        })
        .then(() =>
            res.send('Teacher has been banished!!!'))
        .catch(err => {
            res.status(400).send('error' + err)
        })
})



module.exports = router