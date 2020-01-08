function getCard(movie) {
  return `<div class="card mb-3" style="max-width: 540px;"">
              <div "row no-gutters">
                <div "col-md-4">
                  <img class="card-img" src="${movie.Poster}" alt="poster movie">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Plot}</p>
                    <p class="card-text"><small class="text-muted">${movie.Genre}</small></p>
                    <p class="card-text"><small class="text-muted">${movie.Actors}</small></p>
                    <p class="card-text"><small class="text-muted">${movie.imdbRating}</small></p>
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
const movieNominated = () => {
  getNameMovie('Bombshell');
  getNameMovie('The Irishman');
  getNameMovie('Parasite');
  getNameMovie('Marriage Story');
  getNameMovie('1917');
}
movieNominated();

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

// function for none content
const btnFilter = document.getElementById('filterTitle');
btnFilter.addEventListener("click", () => {
  contenido.style.display = "none";
})

// function for return start
const btnInicio = document.getElementById('inicio');
btnInicio.addEventListener("click", () => {
  contenido.style.display = "flex";
  const containerMovies = document.getElementById('container');
  containerMovies.innerHTML = '';
  movieNominated();
})
