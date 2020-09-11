// import * as dbs from 'mysql';
const db = require("../models");
const mypros = db.mypros;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req || !req.body) {
        console.log('not')
        res.status(400).send({
            message: "Content can not be empty"
        });
    }

const mypros = {
    name: 'juhi',
    email: 'jlesna66@gmail.com',
    phone: '9585094960',
    password: '@12345'
}
    // connection.query(`INSERT into mypros values ('juhi', 'email', '9585094960', '@12345')`, (error, results, fields) => {
    //     if (error) throw error;
    //     console.log(results);
    // });
    mypros.create(mypros).then(data => {
    console.log(mypros, 'myprosss')
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating mypros"
    })
});
};

exports.login = (res, req) => {
    req.body = {
        email: 'jlesna66@gmail.com',
        password: '@12345'
    }
    if (!req || !req.body) {
        console.log('not found');
        res.status(400).send({
            message: "data not found"
        });
    } else {
        mypros.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then((mypros) => {
            const resp = JSON.parse(JSON.stringify(mypros));
            res.send(resp);
            console.log(resp, 'response');
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating mypros"
            })
        });
    }
}

exports.userprofile = (res, req) => {
    var mypros = {
        email: 'jlesna66@gmail.com'
    }
    console.log("mypros")
    if (!res || !res) {
        console.log('not found');
        res.status(400).send({
            message: err.message || "Some error occurred while creating mypros"
        });
    } else {
        mypros.findOne({
            attributes: ['name', 'email', 'phone'],
            where: {
                email: mypros.email
            }
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating mypros"
            })
        });
    }
}

exports.updateProfile = (res, req) => {
    var mypros = {
        phone: '9585094953',
        name: 'lesna',
        email: 'jlesna66@gmail.com'
    }
    if (!req || !req.body) {
        console.log('not found');
        res.status(400).send({
            message: err.message || "Some error occurred while creating mypros"
        });
    } else {
        mypros.update({
            phone: mypros.phone,
            name: mypros.name,
            where: {
                email: mypros.email
            }
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating mypros"
            })
        });
    }
}

exports.changePassword = (res, req) => {
    req.body = {
        email: 'jlesna66@gmail.com',
        currpassword: '@1234',
        newPassword: '@juhi'
    }
    if (!req || !req.body) {
        console.log('not found');
        res.status(400).send({
            message: err.message || "Some error occurred while creating mypros"
        });
    } else {
        mypros.findOne({
            where: {
                email: req.body.email,
                password: req.body.currpassword
            }
        }).then(datafound => {
          if (datafound) {
            mypros.update({
                password: res.body.password,
                where: {
                    email: res.body.email
                }
            }).then(data => {
                res.send(data);
                console.log(data, 'data')
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating mypros"
                })
            });
          }  
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating mypros"
            })
        });
    }
}