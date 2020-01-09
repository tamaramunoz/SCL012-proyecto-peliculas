function getCard(movie) {
   return `<div class="card-wrap">
            <div class="card">
               <div class="front">
                 <h4 class="movie-title">${movie.Title}</h4>
                 <img class="imagen" src="${movie.Poster}" alt="poster movie">
               </div>
               <div class="back">
                 <p class="resena">${movie.Plot}</p>
                 <p class="genero">Genre: ${movie.Genre}</p>
                 <p class="actors">Actors: ${movie.Actors} </p>
                 <p class="rating">Rating: ${movie.imdbRating}</p>
               </div>
               </div>
             </div>
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

const movieNominated = () => {
  getNameMovie('Bombshell');
  getNameMovie('The Irishman');
  getNameMovie('Parasite');
  getNameMovie('Marriage Story');
  getNameMovie('1917');
}
movieNominated();

document.addEventListener('DOMContentLoaded', () => {
  const selectingMovie = document.querySelectorAll('.filterTitle');
  selectingMovie.forEach((movie) => movie.addEventListener('click', getTitleMovie));

  // selectingMovie.addEventListener('click', getTitleMovie);
}, false);

const getTitleMovie = async (e) => {
  const choosingMovie = e.target.innerText;
  // const choosingMovie = document.querySelector('.filterTitle').innerHTML;
  console.log(choosingMovie);

  await fetch(`https://www.omdbapi.com/?t=${choosingMovie}&apikey=8a5b424a`)
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

  // function for none content
  const contenido = document.getElementById('contenido');
  contenido.style.display = "none";
}

// function for return start
const btnInicio = document.getElementById('inicio');
btnInicio.addEventListener("click", () => {
  contenido.style.display = "flex";
  const containerMovies = document.getElementById('container');
  containerMovies.innerHTML = '';
  movieNominated();
})
