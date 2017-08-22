var twit = require('twit');
var corpora = require('corpora-project');
var deck = corpora.getFile('divination', 'tarot_interpretations');

// var dictionaries = require('./dictionaries');
// var config = ({
//   consumer_key: process.env.BOT_CONSUMER_KEY,
//   consumer_secret: process.env.BOT_CONSUMER_SECRET,
//   access_token: process.env.BOT_ACCESS_TOKEN,
//   access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
// });
// if (!process.env.BOT_CONSUMER_KEY) {
//   config = require('./config');
// }
// var Twitter = new twit(config);


function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}


function MakeRandomText() {

}


console.log(chooseRandom(deck.tarot_interpretations));

// Twitter.post('statuses/update', {
//     status: tweetText
//   },
//   function(err, data, response) {
//     if (err) {
//       console.log(err)
//     };
//   })
