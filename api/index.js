var Express = require('express');
var cors = require('cors');
const usersController = require('./controllers/users.controller');

var app = Express();
app.use(cors());

app.use('/api', usersController);

app.listen(5038, () => {
  console.log('CORS-enabled web server listening on port 5038');
});

// app.get('/api/getUsers', (req, res, next) => {
//   res.json({ msg: 'This is CORS-enabled for all origins!' });
// });
