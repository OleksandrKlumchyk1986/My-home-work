const APi_KEY = '2c274082'


async function searchMovie(search, type = '', year = '') {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${APi_KEY}&s=${search}&type=${type}&y=${year}`)
    const data = await response.json()

    if (data.Response === "False") {
        alert(data.Error)
        return
    }

    showMoviesList(data.Search)
}


function showMoviesList(movies) {
    let list = ''
    movies.forEach(movie => {
        const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image";

        list += `
        <div class="card m-2" style="width: 18rem;">
            <img src="${poster}" class="card-img-top" alt="${movie.Title}">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text"><b>Year: </b>${movie.Year}</p>
                <button class="btn btn-primary details-btn" data-id="${movie.imdbID}">Detailed</button>
            </div>
        </div>
        `
    })
    document.getElementById('movies-list').innerHTML = list

    
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            getMovieDetails(this.dataset.id)
        })
    })
}


async function getMovieDetails(id) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${APi_KEY}&i=${id}&plot=full`)
    const movie = await response.json()

    const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image";

    document.getElementById('movieTitle').textContent = `${movie.Title} (${movie.Year})`
    document.getElementById('movieDetails').innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${poster}" class="img-fluid rounded" alt="${movie.Title}">
            </div>
            <div class="col-md-8">
                <p><b>Genre:</b> ${movie.Genre}</p>
                <p><b>Director:</b> ${movie.Director}</p>
                <p><b>Actors:</b> ${movie.Actors}</p>
                <p><b>IMDB Rating:</b> ${movie.imdbRating}</p>
                <p>${movie.Plot}</p>
            </div>
        </div>
    `

    const modal = new bootstrap.Modal(document.getElementById('movieModal'))
    modal.show()
}


const form = document.getElementById('search-form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const search = document.getElementById('search-inp').value.trim()
    const type = document.getElementById('type').value
    const year = document.getElementById('year').value

    if (search === '') {
        return alert('Enter movie name for search')
    }

    searchMovie(search, type, year)
})

document.getElementById('year').setAttribute('max', new Date().getFullYear())