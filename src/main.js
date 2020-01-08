function getCard(movie) {
  return `<div class="wrap">
            <div class="card-wrap">
              <div class="card">
                <div class="front">
                  <h4>Title: ${movie.Title}</h4>
                  <img class="imagen" src="${movie.Poster}" alt="poster movie">
                </div>
                <div class="back"> 
                <lo> 
                  <li>${movie.Plot}</li>
                  <li>Genre: ${movie.Genre}</li>
                  <li>Actors: ${movie.Actors} </li>  
                  <li>Rating: ${movie.imdbRating}</li>
                </lo>
                </div>
              </div>
            </div>
          </div>`;
}

const getNameMovie = (movieTitle) => {
  fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=8a5b424a`)
    .then((res) => (res.json()))
    .then((movie) => {
      const containerMovies = document.getElementById('container');
      containerMovies.innerHTML += getCard(movie);
    })
    .catch((err) => {
      console.error(err);
    });
};
getNameMovie('Bombshell');
getNameMovie('The Irishman');
getNameMovie('Parasite');
getNameMovie('Marriage Story');
getNameMovie('1917');


const selectingMovie = document.getElementById('filterTitle');
selectingMovie.addEventListener('change', getTitleMovie);

function getTitleMovie() {
  const choosingMovie = document.querySelector('#filterTitle').value;
  console.log(choosingMovie);

  fetch(`http://www.omdbapi.com/?t=${choosingMovie}&apikey=8a5b424a`)
    .then((res) => (res.json()))
    .then((movieDB) => {
      // console.log(movieDB)
      const containerMovies = document.getElementById('container');
      containerMovies.innerHTML = '';
      containerMovies.innerHTML += getCard(movieDB);
    })
    .catch((err) => {
      console.error(err);
    });
}
