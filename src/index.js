import ui from './ui';
import data from './data';
import api from './api';

/* ui.renderPage();
api.getPopularMovies().then((movies) => {
  data.setMovies(movies.meals);
  ui.renderMeals(data.getMovies());
}); */

function updateMeals(movies) {
  data.setMovies(movies);
  ui.renderMeals(data.getMovies());
}

ui.renderPage({
  onSearch: (searchTerm) => {
    api.searchMeals(searchTerm).then(updateMeals);
  },
});

api.getPopularMovies().then(updateMeals);
