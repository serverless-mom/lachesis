var twit = require('twit');
var dictionaries = require('./dictionaries');
var config = ({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
if (!process.env.BOT_CONSUMER_KEY) {
  config = require('./config');
}

var numberOfSavedTweets = 5;

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

var Twitter = new twit(config);

function MakeRandomText() {
  var returnText = chooseRandom(dictionaries.starts) +
    ' ' + chooseRandom(dictionaries.middles) +
    ' ' + chooseRandom(dictionaries.endings)
  if (returnText.length < 140) {
    return returnText
  } else {
    return MakeRandomText()
  }
}

//delete the previous tweet
// Twitter.get('statuses/user_timeline', {
//     screen_name: 'LogoffBot',
//     count: 'numberOfSavedTweets'
//   },
//   function(err, data, response) {
//     if (err) {
//       console.log('error!' + err)
//     } else if (data && data[(numberOfSavedTweets - 1)].id_str) { //check that there really was a tweet to delete
//       var deleteID = data[(numberOfSavedTweets - 1)].id_str;
//       Twitter.post('statuses/destroy/' + deleteID, {
//           'id': deleteID
//         },
//         function(err, data, response) {
//           if (err) {
//             console.log(err)
//           }
//         })
//     }
//   })

var tweetText = MakeRandomText();
console.log(tweetText);

Twitter.post('statuses/update', {
    status: tweetText
  },
  function(err, data, response) {
    if (err) {
      console.log(err)
    };
  })
