const getNameMovieAsync = async (movieTitle) => {
    try {
        const resTitle = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=8a5b424a`);
        const title = await resTitle.json()
        // const printTitle = Object.values(title)
        console.log(title)
        
    } catch (error) {
        console.log(error);
    }
   
},

getNameMovieAsync("titanic")