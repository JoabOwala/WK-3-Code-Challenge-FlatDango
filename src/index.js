document.addEventListener('DOMContentLoaded', () =>{

    const url = `http://localhost:3000/films`
    
    //Delete existing <li> Movie titles will go here.</li>
    const rem = document.querySelector('li:first-child')
    rem.remove()
    
    const forPoster = document.getElementById('poster')
    const theTitle = document.getElementById('title')
    const theRuntime = document.getElementById('runtime')
    const thefilmInfo = document.getElementById('film-info')
    const theShowTime = document.getElementById('showtime')
    const ticketNo = document.getElementById('ticket-num')

    document.addEventListener('click',handleEvents)

    //list a movie
    function renderAllMovies(movie){

    let movieList = document.createElement('li')
    movieList.className = "film item"
    movieList.innerHTML = `
    <div id = movieName data-id =${movie.id}>
    ${movie.title}
    </div>
    `
    document.querySelector('#films').appendChild(movieList)
    }


    //Itterate through renderAllMovies to display
    //a list of all movies

    fetch(url)
    .then(res => res.json())
    .then(movies => movies.forEach(movie => renderAllMovies(movie)))

    //Click movie title to display movie data

    function handleEvents(e){
        e.preventDefault()
        if(e.target.id === 'movieName'){
            movieInfo(e.target.dataset.id)
        }
    }

    //CLick Movie title to show details

    function movieInfo(id){
        fetch(url + `/${id}`)
        .then(res => res.json())
        .then(movie => {
            theTitle.innerHTML = movie.title
            forPoster.src = movie.poster
            theRuntime.innerHTML = movie.runtime + ' minutes'
            thefilmInfo.innerHTML = movie.description
            theShowTime.innerHTML = movie.showtime

            //Buy ticket button click 
            let availableTicket = (movie.capacity - movie.tickets_sold)
            ticketNo.innerHTML = availableTicket
            document.querySelector('#buy-ticket').addEventListener('click',() =>{
                
                if(availableTicket > 0){
                    ticketNo.innerHTML = --availableTicket
                }
            })
        })
    }

})