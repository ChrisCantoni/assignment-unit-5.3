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
console.log(addToCollection(myCollection, 'The Joshua Tree', 'U2', 1987, [{name: 'Where the Streets Have No Name', duration: '3:37'}, {track: 'Bullet the Blue Sky', duration: '3:24'}]));
// addToCollection(myCollection, 'OK Computer', 'Radiohead', 1997);
// addToCollection(myCollection, 'No Longer OK Computer', 'Radiohead', 1997);
// addToCollection(myCollection, 'Whatever and Ever Amen', 'Ben Folds Five', 1997);
// addToCollection(myCollection, "All That You Can't Leave Behind", 'U2', 2000);
// addToCollection(myCollection, 'Yankee Hotel Foxtrot', 'Wilco', 2002);
// addToCollection(myCollection, 'The Rising', 'Bruce Springsteen', 2002);
// addToCollection(myCollection, 'The Second Gleam', 'The Avett Brothers', 2006);
// addToCollection(myCollection, 'folklore', 'Taylor Swift', 2020);
// addToCollection(myCollection, 'RTJ4', 'Run the Jewels', 2020);
// addToCollection(myCollection, 'Mr. Morale & the Big Steppers', 'Kendrick Lamar', 2022);

//console.log(myCollection[0]);

// Function to iterate over the collection and return each album and its info
function showCollection(musicCollection) {
  for (let album of musicCollection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}
    ${album.tracks.length - 1}. ${album.tracks[0]}`);
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
  } console.table("You found it", matchingArtist); 
  return matchingArtist;
}
findByArtist(myCollection, 'U2');
//findByArtist(myCollection, 'Run the Jewels');

// Stretch - Search Function
// let searchVariable = {
//   artist: 'Radiohead',
//   yearPublished: 1997
// };

// function search(musicCollection, searchCriteria) {
//   let matchingArtist = [];
//   for (let i = 0; i < musicCollection.length; i++) {
//     if (musicCollection[i].artist == searchCriteria.artist && musicCollection[i].yearPublished == searchCriteria.yearPublished) {
//       matchingArtist.push(searchCriteria);
//     } else if (searchCriteria == undefined || searchCriteria.artist == undefined || searchCriteria.yearPublished == undefined) {
//       console.log('Your search is broken');
//       return musicCollection;
//     } 
//    } console.log('The matching artist is', matchingArtist); 
//     return matchingArtist;
  
// }
// search(myCollection, searchVariable);

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
