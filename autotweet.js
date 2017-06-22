var twit = require('twit');
var dictionaries = require('./dictionaries');
var config = ({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

var Twitter = new twit(config);

var tweetText = ChooseRandom(dictionaries.starts) +
  ' ' + ChooseRandom(dictionaries.middles) +
  ' ' + ChooseRandom(dictionaries.endings)

Twitter.post('statuses/update', {
    status: tweetText
  },
  function(err, data, response) {
    if (err) {
      console.log(data)
    };
  })
