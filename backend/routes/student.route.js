const router = require('express').Router()
let student = require('../models/student.model')

router.route('/show').get((req, res) => {
    console.log('inside the route')
    student.find()
      .then(students => res.json(students))
      .catch(err => res.status(400).json(err))
})
router.route('/').post((req, res) => {
    console.log("inside the entry route")
    const name = req.body.name
    const branch = req.body.branch
    const batch = req.body.batch
    const newStudent = new student({name, batch, branch})

    newStudent.save()
      .then(() => res.json('Student Added'))
      .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router