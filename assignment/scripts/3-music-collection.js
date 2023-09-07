console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// My Array
myCollection = [];

// Function to add albums to the array
function addToCollection(collection, title, artist, yearPublished) {
  let albumToAdd = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(albumToAdd);
  return albumToAdd;
}

// Albums added to array
addToCollection(myCollection, 'The Joshua Tree', 'U2', 1987);
addToCollection(myCollection, 'OK Computer', 'Radiohead', 1997);
addToCollection(myCollection, 'Whatever and Ever Amen', 'Ben Folds Five', 1997);
addToCollection(myCollection, "All That You Can't Leave Behind", 'U2', 2000);
addToCollection(myCollection, 'Yankee Hotel Foxtrot', 'Wilco', 2002);
addToCollection(myCollection, 'The Rising', 'Bruce Springsteen', 2002);
addToCollection(myCollection, 'The Second Gleam', 'The Avett Brothers', 2006);
addToCollection(myCollection, 'folklore', 'Taylor Swift', 2020);
addToCollection(myCollection, 'RTJ4', 'Run the Jewels', 2020);
addToCollection(myCollection, 'Mr. Morale & the Big Steppers', 'Kendrick Lamar', 2022);

console.log(myCollection);

// Function to iterate over the collection and return each album and its info
function showCollection(musicCollection) {
  for (let album of musicCollection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}
showCollection(myCollection);

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
