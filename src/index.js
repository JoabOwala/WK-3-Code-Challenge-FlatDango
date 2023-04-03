document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOM is ready')

    //Delete existing <li> Movie titles will go here.</li>
    const rem = document.querySelector('li:first-child')
    rem.remove()
    
    const forPoster = document.getElementById('poster')
    const theTitle = document.getElementById('title')
    const theRuntime = document.getElementById('runtime')
    const thefilmInfo = document.getElementById('film-info')
    const theShowTime = document.getElementById('showtime')
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

    fetch('http://localhost:3000/myfilms')
    .then(res => res.json())
    .then(movies => movies.forEach(movie => renderAllMovies(movie)))

    //Click movie title to display movie data

    function handleEvents(e){
        e.preventDefault()
        if(e.target.id === 'movieName'){
            displayPoster(e.target.dataset.id)
        }
    }

    //Display Poster function

    function displayPoster(id){
        fetch(`http://localhost:3000/myfilms/${id}`)
        .then(res => res.json())
        .then(movie => {
            theTitle.innerHTML = movie.title
            forPoster.src = movie.poster
            theRuntime.innerHTML = movie.runtime + ' minutes'
            thefilmInfo.innerHTML = movie.description
            theShowTime.innerHTML = movie.showtime
        })
    }

})