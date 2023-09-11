console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


// My Array
myCollection = [];

// Function to add albums to the array
function addToCollection(collection, title, artist, yearPublished, tracks) {
  let albumToAdd = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(albumToAdd);
  return albumToAdd;
}

// Albums added to array
addToCollection(myCollection, 'The Joshua Tree', 'U2', 1987, [{trackName: 'Where the Streets Have No Name', duration: '5:38'}, 
{trackName: "I Still Haven't Found What I'm Looking For", duration: '4:38'}, 
{trackName: 'With or Without You', duration: '4:56'},
{trackName: 'Bullet the Blue Sky', duration: '4:32'},
{trackName: 'Running to Stand Still', duration: '4:18'},
{trackName: 'Red Hill Mining Town', duration: '4:52'},
{trackName: "In God's Country", duration: '2:57'},
{trackName: 'Trip Through Your Wires', duration: '3:33'},
{trackName: 'One Tree Hill', duration: '5:23'},
{trackName: 'Exit', duration: '4:13'},
{trackName: 'Mothers of the Disappeared', duration: '5:12'}]);
addToCollection(myCollection, 'OK Computer', 'Radiohead', 1997, [{trackName: 'Airbag', duration: '4:44'},
{trackName: 'Paranoid Android', duration: '6:23'},
{trackName: 'Subterranean Homesick Alien', duration: '4:27'},
{trackName: 'Exit Music', duration: '4:24'},
{trackName: 'Let Down', duration: '4:59'},
{trackName: 'Karma Police', duration: '4:21'},
{trackName: 'Fitter Happier', duration: '1:57'},
{trackName: 'Electioneering', duration: '3:50'},
{trackName: 'Climbing Up the Walls', duration: '4:45'},
{trackName: 'No Surprises', duration: '3:48'},
{trackName: 'Lucky', duration: '4:19'},
{trackName: 'The Tourist', duration: '5:24'}]);
addToCollection(myCollection, 'Whatever and Ever Amen', 'Ben Folds Five', 1997, [{trackName: 'One Angry Dwarf', duration: '3:52'},
{trackName: 'Fair', duration: '5:55'},
{trackName: 'Brick', duration: '4:43'},
{trackName: 'Song for the Dumped', duration: '3:41'},
{trackName: 'Selfless, Cold and Composed', duration: '6:10'},
{trackName: 'Kate', duration: '3:14'},
{trackName: 'Smoke', duration: '4:52'},
{trackName: 'Cigarette', duration: '1:38'},
{trackName: "Steven's Last Night in Town", duration: '3:27'},
{trackName: 'Battle of Who Could Care Less', duration: '3:16'},
{trackName: 'Missing the War', duration: '4:19'},
{trackName: 'Evaporated', duration: '4:28'}]);
addToCollection(myCollection, 'Yankee Hotel Foxtrot', 'Wilco', 2002, [{trackName: 'I Am Trying to Break Your Heart', duration: '6:57'},
{trackName: 'Kamera', duration: '3:29'},
{trackName: 'Radio Cure', duration: '5:08'},
{trackName: 'War on War', duration: '3:47'},
{trackName: 'Jesus, Etc.', duration: '3:50'},
{trackName: 'Ashes of American Flags', duration: '4:43'},
{trackName: 'Heavy Metal Drummer', duration: '3:08'},
{trackName: "I'm the Man who Loves You", duration: '3:55'},
{trackName: 'Pot Kettle Black', duration: '4:00'},
{trackName: 'Poor Places', duration: '5:15'},
{trackName: 'Reservations', duration: '7:22'}]);
addToCollection(myCollection, 'The Rising', 'Bruce Springsteen', 2002, [{trackName: 'Lonesome Day', duration: '4:08'},
{trackName: 'Into the Fire', duration: '5:04'},
{trackName: "Waitin' on a Sunny Day", duration: '4:18'},
{trackName: 'Nothing Man', duration: '4:23'},
{trackName: 'Countin on a Miracle', duration: '4:44'},
{trackName: 'Empty Sky', duration: '3:34'},
{trackName: 'Worlds Apart', duration: '6:07'},
{trackName: "Let's Be Friends", duration: '4:21'},
{trackName: 'Further On (Up the Road)', duration: '3:52'},
{trackName: 'The Fuse', duration: '5:37'},
{trackName: "Mary's Place", duration: '6:03'},
{trackName: "You're Missing", duration: '5:10'},
{trackName: 'The Rising', duration: '4:50'},
{trackName: 'Paradise', duration: '5:39'},
{trackName: 'My City of Ruins', duration: '5:00'}]);
addToCollection(myCollection, 'The Second Gleam', 'The Avett Brothers', 2006, [{trackName: 'Tear Down the House', duration: '3:04'},
{trackName: 'Murder in the City', duration: '3:12'},
{trackName: "Bella Donna", duration: '3:03'},
{trackName: 'The Greatest Sum', duration: '3:20'},
{trackName: 'Black, Blue', duration: '4:27'},
{trackName: "St Joseph's", duration: '3:23'},
{trackName: 'Souls Like the Wheel', duration: '4:38'},
{trackName: "The Greatest Sum (electric)", duration: '3:13'}]);
addToCollection(myCollection, 'Mr. Morale & the Big Steppers', 'Kendrick Lamar', 2022, [{trackName: 'United in Grief', duration: '4:15'},
{trackName: 'N95', duration: '3:15'},
{trackName: "Worldwide Steppers", duration: '3:23'},
{trackName: 'Die Hard', duration: '3:59'},
{trackName: 'Father Time', duration: '3:42'},
{trackName: "Rich (Interlude)", duration: '1:43'},
{trackName: 'Rich Spirit', duration: '3:22'},
{trackName: "We Cry Together", duration: '5:41'},
{trackName: 'Purple Hearts', duration: '5:29'},
{trackName: 'Count Me Out', duration: '4:43'},
{trackName: "Crown", duration: '4:24'},
{trackName: "Silent Hill", duration: '3:40'},
{trackName: 'Savior (Interlude)', duration: '2:32'},
{trackName: 'Savior', duration: '3:44'},
{trackName: 'Auntie Diaries', duration: '4:41'},
{trackName: 'Mr. Morale', duration: '3:30'},
{trackName: 'Mother I Sober', duration: '6:46'},
{trackName: 'Mirror', duration: '4:16'}]);

//console.log(myCollection[0]);

// Function to iterate over the collection and return each album and its info
function showCollection(musicCollection) {
  let tracks = [];
  for (let album of musicCollection) {
    let trackNumber = 0
    for (let track of album.tracks) {
      // Loop through the tracks of each album, adding them to the tracks array along with
      // appropriate punctuation as required by the assignment.
      trackNumber++;
      tracks.push(trackNumber, `. `);
      tracks.push(track.trackName, `: `);
      tracks.push(track.duration); 
      // \n adds a line break.
      tracks.push(`\n`);
   } 
   console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:
  ${tracks.join('')} \n`);
    tracks = []; // Resets the track list to zero for the next album.
  }
    
}
showCollection(myCollection);

// Function to search for specific artist
function findByArtist(musicCollection, artist) {
  let matchingArtist = [];
  for (let album of musicCollection) {
    if (album.artist == artist) {
      matchingArtist.push(album);
    }
  } if (matchingArtist.length != 0) {
    console.log(`Here's what we found that matched ${artist}:`, matchingArtist); 
    return matchingArtist;
  } else {
    console.log("The collection doesn't contain your selected artist", artist);
    return matchingArtist;
  }
}
console.log(`Did you find U2? ${findByArtist(myCollection, 'U2')}`);
findByArtist(myCollection, 'Run the Jewels');

// Stretch - Search Function
let searchVariable = {
  artist: 'Radiohead',
  yearPublished: 1997
};
let searchVariable2 = {
  artist: 'Prince',
  yearPublished: 1995
};
let searchNotFound = {
  yearPublished: 2024
}

function search(musicCollection, searchCriteria) {
  let matchingArtist = [];
  for (let i = 0; i < musicCollection.length; i++) {
    if (musicCollection[i].artist == searchCriteria.artist && musicCollection[i].yearPublished == searchCriteria.yearPublished) {
      matchingArtist.push(searchCriteria);
    } else if (searchCriteria == undefined || searchCriteria.artist == undefined || searchCriteria.yearPublished == undefined) {
      console.log('Your search encountered an error');
      return musicCollection;
    } 
   } console.log('The matching artist is', matchingArtist); 
    return matchingArtist;
  
}
console.log(`Here's what we found for ${searchVariable.artist} in ${searchVariable.yearPublished}`, search(myCollection, searchVariable)); // Should find OK Computer
search(myCollection, searchVariable2); // Should return empty array
console.log(`Your search encountered an error. Here's the music we have:`, search(myCollection, searchNotFound)); // Should return entire collection

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}