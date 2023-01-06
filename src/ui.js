import './styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = '<input type="search" name="searchTerm"><button>Search</button>';

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });
  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<h1 class = "title">The meal</h1>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function createMeal(list) {
  const mealElement = document.createElement('div');
  mealElement.classList.add('list');
  mealElement.innerHTML = `<h2>${list.strMeal}</h2>`;
  const img = `${list.strMealThumb}`;
  mealElement.style.backgroundImage = `url(${img})`;
  return mealElement;
}

function renderPage({ onSearch }) {
  appContainer.innerHTML = '';
  appContainer.appendChild(createHeader({ onSearch }));
  mainContainer = createMain();
  appContainer.appendChild(mainContainer);
}

function renderMeals(meals = [1, 2, 3, 4, 5]) {
  mainContainer.innerHTML = '';
  meals.forEach((meal) => {
    mainContainer.appendChild(createMeal(meal));
  });
}

export default {
  renderPage,
  renderMeals,
};
