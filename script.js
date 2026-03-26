const apiKey = '4aebbe1b';


async function searchMovies(movie) {

  const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
  const data = await res.json()
   console.log(data)

   const movieData = data.Search[0];
   
   document.getElementById('movie-img').src = movieData.Poster;
   document.getElementById('Search-movie-title').innerHTML = movieData.Title;
   document.getElementById('Search-movie-year').innerHTML = movieData.Year
   document.getElementById('Search-movie-rating').innerHTML = `IMDB : ${movieData.Rating}`


}

  const input = document.getElementById('input-box')
  input.addEventListener('keydown', function (e) {
    if(e.key === 'Enter'){
      const movie = input.value;
      searchMovies(movie)
    }
    
  })