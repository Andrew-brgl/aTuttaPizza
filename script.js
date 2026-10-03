'use strict';

const navigation = document.querySelector('#site-navigation');
const navToggle = document.querySelector('.nav-toggle');
function closeNavigation() {
  navigation.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    closeNavigation();
    navToggle.focus();
  }
});

const menuSearch = document.querySelector('#menu-search');
const categoryButtons = [...document.querySelectorAll('.category-button')];
const groups = [...document.querySelectorAll('.menu-group')];
const items = [...document.querySelectorAll('.menu-item')];
const resultLabel = document.querySelector('#menu-result');
const emptyState = document.querySelector('#menu-empty');
const names = {classiche:'Pizze classiche',speciali:'Pizze speciali',bianche:'Pizze bianche',calzoni:'Calzoni',formati:'Formati da condividere',extra:'Aggiunte e patatine fritte'};
let activeCategory = 'classiche';
function normalize(value) {
  return value.toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}
items.forEach(item => { item.dataset.search = normalize(item.textContent); });
function updateMenu() {
  const query = normalize(menuSearch.value);
  let visibleCount = 0;
  groups.forEach(group => {
    let groupVisible = 0;
    group.querySelectorAll('.menu-item').forEach(item => {
      const visible = query ? item.dataset.search.includes(query) : group.dataset.category === activeCategory;
      item.hidden = !visible;
      if (visible) { groupVisible++; visibleCount++; }
    });
    group.hidden = groupVisible === 0;
    group.querySelector('.menu-group-heading').hidden = !query;
  });
  categoryButtons.forEach(button => {
    const selected = !query && button.dataset.category === activeCategory;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  resultLabel.textContent = query ? `${visibleCount} ${visibleCount === 1 ? 'risultato' : 'risultati'} nel menu completo` : names[activeCategory];
  emptyState.hidden = visibleCount !== 0;
}
categoryButtons.forEach(button => button.addEventListener('click', () => {
  activeCategory = button.dataset.category;
  menuSearch.value = '';
  updateMenu();
}));
menuSearch.addEventListener('input', updateMenu);
document.querySelector('#clear-search').addEventListener('click', () => {
  menuSearch.value = '';
  updateMenu();
  menuSearch.focus();
});
document.querySelectorAll('[data-show-category]').forEach(link => link.addEventListener('click', () => {
  activeCategory = link.dataset.showCategory;
  menuSearch.value = '';
  updateMenu();
}));
updateMenu();
