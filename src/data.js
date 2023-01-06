const state = {
  movie: [],
};

function getMovies() {
  return state.movie;
}

function setMovies(movies) {
  state.movie = movies;
}

export default {
  getMovies,
  setMovies,
};
