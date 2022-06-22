document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });

//fetch data function
function fetchData(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then((movies)=>renderMovies(movies))
}
