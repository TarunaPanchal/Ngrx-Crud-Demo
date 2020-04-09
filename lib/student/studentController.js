var mongoose = require('mongoose');
const studentModel = require('./studentModel')

class Studentcontroller {
    async insertStudent(req, res) {
        var { name, phone, std, school } = req.body;
        let id = '0';

        var userData = {
            name: name,
            phone: phone,
            std: std,
            school: school
        };
        await studentModel.find({}).sort({ id: -1 }).then(async (data) => {

            if (data.length) {
                id = parseInt(data[0].id) + 1;
            } else {
                id = "0";
            }
            userData.id = await id;
            studentModel.create(userData, (err, data) => {
                if (err) {
                    res.send({ status: 400, message: err.message });
                }
                else {
                    let obj = {
                        name: data.name,
                        phone: data.phone,
                        std: data.std,
                        school: data.school,
                        id: data.id
                    }
                    res.send(obj);
                }
            });

        })


    }

    getallStudent(req, res) {

        let query = {
            isDelete: false
        };

        studentModel.find(query).then((data) => {
            res.send(data)
        }).catch((err) => {
            res.send({ status: 400, message: err.message });
        });
    }

    getStudentById(req, res) {

        studentModel.findOne({ id: req.params.userId }).then((data) => {
            let obj = {
                name: data.name,
                phone: data.phone,
                std: data.std,
                school: data.school,
                id: data.id
            }
            res.send(obj);
        }).catch((err) => {
            res.send({ status: 400, message: err.message });
        });
    }


    deleteStudentById(req, res) {
        studentModel.findOneAndUpdate({ id: req.params.userId }, { $set: { isDelete: true } }, { new: true }).then((data) => {
            let obj = {
                name: data.name,
                phone: data.phone,
                std: data.std,
                school: data.school,
                id: data.id
            }
            res.send(obj);
        }).catch((err) => {
            res.send({ status: 400, message: err.message });
        });
    }

    findByIdAndUpdate(req, res) {
        var { name, phone, std, school } = req.body;

        var userData = {
            name: name,
            phone: phone,
            std: std,
            school: school
        };

        studentModel.findOneAndUpdate({ id: req.params.userId }, { $set: userData }, { new: true }).then((data) => {
            let obj = {
                name: data.name,
                phone: data.phone,
                std: data.std,
                school: data.school,
                id: data.id
            }
            res.send(obj);
        }).catch((err) => {
            res.send({ status: 400, message: err.message });
        })
    }

}

var user = new Usercontroller();

module.exports = user;