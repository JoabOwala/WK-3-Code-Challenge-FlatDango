document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOM is ready')

    //Delete existing <li> Movie titles will go here.</li>
    const rem = document.querySelector('li:first-child')
    rem.remove()

    //list a movie
    function renderAllMovies(movie){

    let movieList = document.createElement('li')
    movieList.className = "film item"
    movieList.innerHTML = `
    <div id=movieName data-id =${movie.id}>
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
        // if(e.target.id ===)
    }

})