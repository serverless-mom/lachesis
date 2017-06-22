var twit = require('twit');
var config = require('./config.js');


var Twitter = new twit(config);

Twitter.post('statuses/update', { status: `now I'm putting the the whole thing on Heroku` },
function(err, data, response) {
  if (err){console.log(data)};
})
