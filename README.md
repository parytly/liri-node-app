# liri-node-app

- Language Interpretation and Recognition Interface
    - LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
    
    - SPOTIFY
        - putting in the command line "spotify-this-song" (name of song), will output:
            - Artist(s)
            - The song's name
            - A preview link of the song from Spotify
            - The album that the song is from
            ![](./liri-videos.spotify-example.mov)

    - BANDS IN TOWN 
        - Entering in the command line "concert-this" (artist/ band name), will output:
            - Name of the venue
            - Venue location
            - Date of the Event (use moment to format this as "MM/DD/YYYY")

    - OMDB 
        - Entering in the command line "movie-this" (name of movie), will output:
            -   Title of the movie.
            - Year the movie came out.
            - IMDB Rating of the movie.
            - Rotten Tomatoes Rating of the movie.
            - Country where the movie was produced.
            - Language of the movie.
            - Plot of the movie.
            - Actors in the movie.
    
    - FILE SYSTEM NODE PACKAGE
        - Using fs Node package, entering in the command line "do-what-it-says", will outut the text inside the random.txt file.
