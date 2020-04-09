const express = require('express');

const router = express.Router();

const studentController = require('../student/studentController');

router.post('/student',studentController.insertStudent);

router.get('/student',studentController.getallStudent);

router.get('/student/:userId',studentController.getStudentById);

router.delete('/student/delete/:userId',studentController.deleteStudentById);

router.put('/student/update/:userId',studentController.findByIdAndUpdate);

module.exports = router; 