function getCard(movie) {
  return `<div class="row">
              
              <div class="col-md-4">
                <img class="imagen" src="${movie.Poster}" alt="poster movie">
                <div class="back"> 
                  <p class="genero">Genre: ${movie.Genre}</p>
                  <p class="actors">Actors: ${movie.Actors} </p>  
                  <p class="rating">Rating: ${movie.imdbRating}</p>
                </div>
              </div>
              <div class="col-md-8 plot"> 
                <h4 class="movie-title text-center">${movie.Title}</h4>
                <p class="resena">${movie.Plot}</p>
              </div>
            </div>
            <div class="spacing"></div>
          </div>`;
}

function getCardLeft(movie) {
  return `<div class="row">
              
              <div class="col-md-4">
                <img class="imagen" src="${movie.Poster}" alt="poster movie">
                <div class="back"> 
                  <p class="genero">Genre: ${movie.Genre}</p>
                  <p class="actors">Actors: ${movie.Actors} </p>  
                  <p class="rating">Rating: ${movie.imdbRating}</p>
                </div>
              </div>
              <div class="col-md-8 plot"> 
                <h4 class="movie-title text-center">${movie.Title}</h4>
                <p class="resena">${movie.Plot}</p>
              </div>
            </div>
            <div class="spacing"></div>
          </div>`;
}

function getCardRight(movie) {
  return `<div class="row">
              <div class="col-md-8 plot"> 
                <h4 class="movie-title text-center">${movie.Title}</h4>
                <p class="resena">${movie.Plot}</p>
              </div>
              <div class="col-md-4">
                <img class="imagen" src="${movie.Poster}" alt="poster movie">
                <div class="back"> 
                  <p class="genero">Genre: ${movie.Genre}</p>
                  <p class="actors">Actors: ${movie.Actors} </p>  
                  <p class="rating">Rating: ${movie.imdbRating}</p>
                </div>
              </div>
            </div>
            
            <div class="spacing"></div>
          </div>`;
}

const getNameMovie = async (movieTitle, align) => {
  await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=8a5b424a`)
    .then((res) => (res.json()))
    .then((movie) => {
      const containerMovies = document.getElementById('container');
      if (align === 'left') {
        containerMovies.innerHTML += getCardLeft(movie);
      } else {
        containerMovies.innerHTML += getCardRight(movie);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
const movieNominated = async () => {
  await getNameMovie('Bombshell', 'left');
  await getNameMovie('The Irishman', 'right');
  await getNameMovie('Parasite', 'left');
  await getNameMovie('Marriage Story', 'right');
  await getNameMovie('1917', 'left');
}
movieNominated();

const selectingMovie = document.querySelectorAll('.filterTitle');
selectingMovie.forEach((movie) => movie.addEventListener('click', getTitleMovie));

function getTitleMovie() {
  const choosingMovie = document.querySelector('#filterTitle').value;
  console.log(choosingMovie);

  fetch(`https://www.omdbapi.com/?t=${choosingMovie}&apikey=8a5b424a`)
    .then((res) => (res.json()))
    .then((movieDB) => {
      const containerMovies = document.getElementById('container');
      containerMovies.innerHTML = '';
      containerMovies.innerHTML += getCard(movieDB);
    })
    .catch((err) => {
      console.error(err);
    });

  // function for none content
  const contenido = document.getElementById('contenido');
  contenido.style.display = 'none';
};

// function for return start
const btnInicio = document.getElementById('inicio');
btnInicio.addEventListener('click', () => {
  contenido.style.display = 'flex';
  const containerMovies = document.getElementById('container');
  containerMovies.innerHTML = '';
  movieNominated();
});
