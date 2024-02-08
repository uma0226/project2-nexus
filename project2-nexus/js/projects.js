const idea_item = document.querySelector('.idea_item');

idea_item.addEventListener('click', (event) => {
  const project_form = document.querySelector('.project_form');
  project_form.classList.remove('not_displayed');
  project_form.scrollIntoView();
});
