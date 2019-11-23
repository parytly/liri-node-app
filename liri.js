require("dotenv").config();

console.log(process.env.SPOTIFY_ID)

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});
spotify
    .search({ type: 'track', query: 'tupac' })
    .then(function (response) {
        console.log(response.items);
    })
    .catch(function (err) {
        console.log(err);
    });

// var artist = process.argv[2];

// var movieName = process.argv[3];

// var axios = require("axios");

// var bandsinTownQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// // name of venue
// // venue location
// // date of event
// var omdbQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=119e07e0"


// axios.get(bandsinTownQueryUrl).then(
//     function (response) {
//         for (var i = 0; i < response.data.length; i++) {
//             console.log(response.data[i].venue.name)
//             console.log(response.data[i].venue.city)
//             console.log(response.data[i].datetime, "\n")
//         }


//     })