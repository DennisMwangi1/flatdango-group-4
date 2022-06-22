document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });


//fetch data function
function fetchData(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then((movies)=>renderMovies(movies))
}
//render moviees function...
//deg dom contents
const movieList= document.querySelector('#films');
const movieTitle=document.getElementById('title');
const movieRuntime=document.getElementById('runtime');
const movieDescription=document.getElementById('film-info');
const movieShowTime=document.getElementById('showtime');
const movieTickets=document.getElementById('ticket-num');
const moviePoster=document.getElementById('poster');