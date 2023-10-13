const users = require('../data/user');

module.exports = {
  getUsers: (req, res) => {
    console.log(users);
    return res.json(users);
  },
};
