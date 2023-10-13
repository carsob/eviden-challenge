const express = require('express');
const router = express.Router();
const usersService = require('../services/users.service');

router.get('/getUsers', usersService.getUsers);

module.exports = router;
