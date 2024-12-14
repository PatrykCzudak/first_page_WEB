function addMovie() {
    var movieTitle = document.getElementById("title-input").value;
    var movieDate = document.getElementById("date-input").value;
    var movieActors = document.getElementById("actors-input").value;

    if (movieTitle=="" ||  movieDate=="" || movieActors=="") {
        alert("Enter values")
    }

    const movieList = document.getElementById('movie-list');
    var newMovie = document.createElement("li");
    newMovie.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieDate + ", " + movieActors;
    movieList.appendChild(newMovie);

    document.getElementById("title-input").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("actors-input").value = "";
}

function deleteSelected() {
    const movieList = document.getElementById('movie-list');
    const movies = movieList.querySelectorAll('li');

    movies.forEach(movie => {
        const checkbox = movie.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            movieList.removeChild(movie);
        }
    });
}

