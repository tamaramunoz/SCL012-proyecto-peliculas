/*
const getNameMovieAsync = async (movieTitle) => {
    try {
        const resTitle = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=8a5b424a`)
        const title = await resTitle.json()
        console.log(title)
        
        const resGenre = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=8a5b424a`)
        const movie = await resGenre.json()
        console.log(movie.Genre)
        document.getElementById('container').innerHTML += movie.Genre
        
    } catch (error) {
        console.log(error);
    }
   
} 
getNameMovieAsync("titanic")
*/