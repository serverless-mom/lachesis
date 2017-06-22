var twit = require('twit');
var dictionaries = require('./dictionaries');
var config = ({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
config = require('./config.js');

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

var Twitter = new twit(config);

//delete the previous tweet
Twitter.get('statuses/user_timeline', {
    screen_name: 'LogoffBot',
    count: '1'
  },
  function(err, data, response) {
    if (err) {
      console.log('error!' + err)
    } else if (data && data[0].id_str) { //check that there really was a tweet to delete
      var deleteID = data[0].id_str;
      Twitter.post('statuses/destroy/' + deleteID, {
          'id': deleteID
        },
        function(err, data, response) {
          if (err) {
            console.log(err)
          }
        })
    }
  })

var tweetText = chooseRandom(dictionaries.starts) +
  ' ' + chooseRandom(dictionaries.middles) +
  ' ' + chooseRandom(dictionaries.endings)

Twitter.post('statuses/update', {
    status: tweetText
  },
  function(err, data, response) {
    if (err) {
      console.log(err)
    };
  })
