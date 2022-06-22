
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });


    fetch('http://localhost:3000/films')
    .then((res)=>res.json())
    .then((data)=>{
        moviePoster.src = data[0].poster
        movieTitle.innerText = data[0].title
        runTime.innerText = `${data[0].runtime} minutes`
        movieInfo.innerText = data[0].description
        showTime.innerText = data[0].showtime
        ticketNum.innerText =data[0].tickets_sold
        let tickets = data[0].tickets_sold

        data.forEach(film=> {
            const filmList = document.createElement('li')
            filmList.innerText = film.title
            filmList.classList.add("film")
            movieTitles.appendChild(filmList)
            filmList.id = film.id
            filmList.style.cursor = 'pointer'

            filmList.addEventListener('click',(e)=>{
                e.preventDefault()
                moviePoster.src = film.poster
                movieTitle.innerText = film.title
                runTime.innerText = `${film.runtime} minutes`
                movieInfo.innerText = film.description
                showTime.innerText = film.showtime
                ticketNum.innerText =film.tickets_sold
                let tickets = film.tickets_sold
                buyBtn.addEventListener('click',(e)=>{
                    e.preventDefault()
                    tickets --
                    ticketNum.innerText = tickets
                    if (tickets === 0 ) {
                        buyBtn.disabled = 'true'
                        buyBtn.textContent = 'SOLD OUT'
                        
                    }
                })


            })

        });
    })

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

function renderMovies(movies){
    movies.forEach(movies=>{
        let list =document.createElement('li');
        list.innerText= movies.title;
        movieList.appendChild(list);
        
        //render spefic movie details
        list.addEventListener('click',()=>{
            movieTitle.textContent=movies.title;
            movieRuntime.textContent=movies.runtime;
            movieDescription.textContent=movies.description;
            movieShowTime.textContent=movies.showtime;
            moviePoster.src=movies.poster;
            //tickets remaining
            let capacity=movies.capacity;
            let soldTickets=movies.tickets_sold;
            movieTickets.textContent=(capacity-soldTickets);


        })

    })

}