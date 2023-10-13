var Express = require('express');
var cors = require('cors');
const usersController = require('./controllers/users.controller');

var app = Express();
app.use(cors());

app.use('/api', usersController);

app.listen(5038, () => {
  console.log('CORS-enabled web server listening on port 5038');
});
