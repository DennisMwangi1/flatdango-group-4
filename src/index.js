document.addEventListener('DOMContentLoaded',()=>{
    const movieTitles = document.getElementById("films")
    const moviePoster = document.getElementById("poster")
    const movieTitle = document.getElementById("title")
    const runTime = document.getElementById("runtime")
    const movieInfo = document.getElementById("film-info")
    const showTime = document.getElementById('showtime')
    const ticketNum = document.getElementById("ticket-num")
    const buyBtn = document.getElementById("buy-ticket")

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
    })




    
})