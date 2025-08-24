"use strict";

var APi_KEY = '2c274082';

function searchMovie(search) {
  var type,
      year,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function searchMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
          year = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(APi_KEY, "&s=").concat(search, "&type=").concat(type, "&y=").concat(year)));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;

          if (!(data.Response === "False")) {
            _context.next = 11;
            break;
          }

          alert(data.Error);
          return _context.abrupt("return");

        case 11:
          showMoviesList(data.Search);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showMoviesList(movies) {
  var list = '';
  movies.forEach(function (movie) {
    var poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image";
    list += "\n        <div class=\"card m-2\" style=\"width: 18rem;\">\n            <img src=\"".concat(poster, "\" class=\"card-img-top\" alt=\"").concat(movie.Title, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(movie.Title, "</h5>\n                <p class=\"card-text\"><b>Year: </b>").concat(movie.Year, "</p>\n                <button class=\"btn btn-primary details-btn\" data-id=\"").concat(movie.imdbID, "\">Detailed</button>\n            </div>\n        </div>\n        ");
  });
  document.getElementById('movies-list').innerHTML = list;
  document.querySelectorAll('.details-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      getMovieDetails(this.dataset.id);
    });
  });
}

function getMovieDetails(id) {
  var response, movie, poster, modal;
  return regeneratorRuntime.async(function getMovieDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(APi_KEY, "&i=").concat(id, "&plot=full")));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          movie = _context2.sent;
          poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image";
          document.getElementById('movieTitle').textContent = "".concat(movie.Title, " (").concat(movie.Year, ")");
          document.getElementById('movieDetails').innerHTML = "\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <img src=\"".concat(poster, "\" class=\"img-fluid rounded\" alt=\"").concat(movie.Title, "\">\n            </div>\n            <div class=\"col-md-8\">\n                <p><b>Genre:</b> ").concat(movie.Genre, "</p>\n                <p><b>Director:</b> ").concat(movie.Director, "</p>\n                <p><b>Actors:</b> ").concat(movie.Actors, "</p>\n                <p><b>IMDB Rating:</b> ").concat(movie.imdbRating, "</p>\n                <p>").concat(movie.Plot, "</p>\n            </div>\n        </div>\n    ");
          modal = new bootstrap.Modal(document.getElementById('movieModal'));
          modal.show();

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var form = document.getElementById('search-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var search = document.getElementById('search-inp').value.trim();
  var type = document.getElementById('type').value;
  var year = document.getElementById('year').value;

  if (search === '') {
    return alert('Enter movie name for search');
  }

  searchMovie(search, type, year);
});
document.getElementById('year').setAttribute('max', new Date().getFullYear());