require("dotenv").config();

var keys = require("./keys.js");

// SPOTIFY SECTION
//  <spotify-this-song> " song name"
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var song = process.argv[3]
spotify
    .search({ type: 'track', query: song, limit: 10 })
    .then(function (response) {
        if (process.argv[2] === 'spotify-this-song') {
            for (var s = 0; s < response.tracks.items.length; s++) {
                // PULLS ARTIST NAME
                console.log("Artist: " + response.tracks.items[s].artists[0].name)
                // PULLS NAME OF THE SONG
                console.log("Song: " + response.tracks.items[s].name);
                // PULLS ALBUM NAME
                console.log("Album: " + response.tracks.items[s].album.name)
                // PULLS PREVIEW OF THE SONG'S LINK FROM SPOTIFY
                console.log("Preview Url: " + response.tracks.items[s].external_urls.spotify, "\n")
            }
        } else if (process.argv[2] === 'concert-this') {
            //BANDS IN TOWN <concert-this>
            var artist = process.argv[3];
            var axios = require("axios");

            // MOMENT TIME/DATE CONVERTER
            var moment = require('moment');
            moment().format("MM Do YYYY");
            // BANDS IN TOWN LINK
            var bandsinTownQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

            axios.get(bandsinTownQueryUrl).then(
                function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                        // artist/band
                        console.log("Artist: " + process.argv[3])
                        // name of venue
                        console.log("Venue: " + response.data[i].venue.name)
                        // venue location
                        console.log("Location: " + response.data[i].venue.city)
                        // converts the time
                        var time = moment(response.data[i].datetime).format("MM Do YYYY");
                        // date of event
                        console.log("Time: " + time, "\n")
                        console.log("----------------------------------- \n")
                    }
                })
        } else if (process.argv[2] === "movie-this") {
            // MOVIE OMDB
            // movie-this
            var movieName = process.argv[3];

            var omdbQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=119e07e0"

            var axios = require("axios");

            axios.get(omdbQueryUrl).then(
                function (response) {
                    // * Title of the movie.
                    console.log("\nMovie: " + response.data.Title, "\n")
                    // * Year the movie came out.
                    console.log("Year: " + response.data.Year, '\n')
                    // * IMDB Rating of the movie.
                    console.log("IMDB Rating: " + response.data.imdbRating, "\n")
                    // * Rotten Tomatoes Rating of the movie.
                    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value, "\n")
                    // * Country where the movie was produced.
                    console.log("Country: " + response.data.Country, "\n")
                    // * Language of the movie.
                    console.log("Language: " + response.data.Language, "\n")
                    // * Plot of the movie.
                    console.log("Plot: " + response.data.Plot, "\n")
                    // * Actors in the movie.
                    console.log("Actors: " + response.data.Actors, "\n")
                }
            )
        } else if (process.argv[2] === 'do-what-it-says') {
            // PULL FROM RANDOM.TXT
            var fs = require("fs");
            fs.readFile("./random.txt", "utf8", function (error, data) {
                if (error) {
                    return console.log(error);
                } else if (process.argv[2] === "do-what-it-says") {
                    console.log(data);
                }
            })
        }
    })
    .catch(function (err) {
        console.log(err);
    });
