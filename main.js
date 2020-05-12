var mainContainer = document.querySelector('.main-container')
var upcomingContainer = document.querySelector('.upcoming-container')
var popularContainer = document.querySelector('.popular-container')
var searchedContainer = document.querySelector('.search-result-container')
var searchField = document.getElementById('search')
var movieModal = document.querySelector('modal')
var app = new App(mainContainer, popularContainer, upcomingContainer, searchedContainer, searchField, movieModal, myApikey1)
app.getPopularMovies()
app.getUpcomingMovies()
