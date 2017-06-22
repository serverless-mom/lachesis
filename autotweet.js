var twit = require('twit');
var config = ({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});


var Twitter = new twit(config);

Twitter.post('statuses/update', { status: `now I'm putting the the whole thing on Heroku` },
function(err, data, response) {
  if (err){console.log(data)};
})
