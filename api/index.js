var Express = require('express');
var cors = require('cors');

var app = Express();
app.use(cors());

app.listen(5038, () => {
  console.log('CORS-enabled web server listening on port 5038');
});

app.get('/api/hello', (req, res, next) => {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});
