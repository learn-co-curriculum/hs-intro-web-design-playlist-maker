# Playlister

<img src="https://s3.amazonaws.com/after-school-assets/music.gif"width="300" hspace="10" align="right">

We all use music streaming apps, Spotify, Itunes, Apple Music. So how do all of those apps work? How do they let you add and remove songs whenever you want? Well the best thing is that you're a developer now. You can build your own playlister!


### Get To Work

You'll be coding your solution in `js/playlister.js`. You'll want to have `index.html` open in the browser in order to test your work. 

+ **Step 1:** declare a variable `playlist` to store your playlist. You'll want this variable to store an empty array, which will contain your list of songs.

+ **Step 2:** Using the `prompt` method, prompt the user for if they would like to add or delete a song from the playlist. Remember, a user shouldn't be able to delete a song if there aren't songs on the playlist yet.

+ **Step 3:** If a user selects to add a song, they should be prompted to enter a song title, and the song should be added to the `playlist` array. 

+ **Step 4:** If a user selects to delete a song, they should be prompted to enter a song title to delete. The song should then be removed from the `playlist` array.

+ **Step 5:** Every time a user adds a song or deletes a song from the playlist, they should receive an alert that lists all the songs on their playlist.


**BONUS**
+ Add an `alert` if a user tries to delete a song that isn't on the Playlist

+ Once a user adds a song, the alerts stop. See if you can build in a loop so the user will continually be prompted to add or a delete a song until they say they're done editing their playlist.

**DOUBLE BONUS**

+ We haven't covered functions in this class, but see if you can compartmentalize the code into functions. Remember, each function should do one thing and one thing only (i.e: an addSong function, a deleteSong function etc,)
<p data-visibility='hidden'>View <a href='https://learn.co/lessons/hs-intro-web-design-playlist-maker' title='Playlister'>Playlister</a> on Learn.co and start learning to code for free.</p>
