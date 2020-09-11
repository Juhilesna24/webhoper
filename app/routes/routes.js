module.exports = app => {
    const mypro = require("../controller/mypro.controller.js");
    var router = require("express").Router();
    router.post("/create", mypro.create);
    // router.post("/userprofile", mypro.userprofiles);
    // router.post("/changePassword", mypro.changePassword);
    // router.post("/login", mypro.login);
    // router.post("/updateprofile", mypro.updateProfile);
    app.use('/api/mypro', router);
};