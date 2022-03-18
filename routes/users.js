var express = require('express');
var router = express.Router();
const usersModel = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  usersModel.find({}, function (err, users) {
    if (err) {
      res.json({
        status: 'failure',
        message: 'Cannot find users',
        error_message: err
      })
    } else {
      res.json({ status: 'success', message: users });
    }
  });
});

router.post('/', function(req, res, next) {
  const { username, password, poin } = req.body;
  userLower = username.toLowerCase()
  let user = new usersModel({
    userLower,
    password,
    poin
  });

  user.save(function (err) {
    if (err) {
      res.json({ status: 'failure', message: 'Unable to reserve user', errorMessage: err })
    } else {
      res.json({ status: 'success', message: "User Saved Successfully." });
    }
  });
});

module.exports = router;
