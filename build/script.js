var body = document.querySelector('body');

if (body) {
  body.addEventListener('click', eventParser);
}

function eventParser(evt) {
  evt.preventDefault();
  var target = evt.target;
  var switchElement = target.closest('.onoffswitch');
  var accordeonElement = target.closest('.e-accordion')

  if (switchElement) {
    toggleThemeMode(switchElement);
  }
  if (accordeonElement) {
    toggleAccordionVisible(accordeonElement);
  }
}

function toggleThemeMode(switchElement) {
  var page = document.querySelector('.page');
  if (page.classList.contains('theme_color_project-default')) {
    switchElement.classList.remove('onoffswitch_checked');
    page.classList.remove('theme_color_project-default');
    page.classList.add('theme_color_project-inverse');
  } else {
    switchElement.classList.add('onoffswitch_checked');
    page.classList.remove('theme_color_project-inverse');
    page.classList.add('theme_color_project-default');
  }
}

function toggleAccordionVisible(accordeonElement) {
  var accordeonItem = accordeonElement.querySelector('.e-accordion__more');
  var accordeonBlock = accordeonElement.parentElement;

  accordeonBlock.querySelectorAll('.e-accordion__more').forEach(function(item) {
    if (!item.classList.contains('history__hide') && accordeonItem !== item) {
      item.classList.add('history__hide')
    }
  })
  
  if (accordeonItem.classList.contains('history__hide')) {
    accordeonElement.querySelector('.e-accordion__more').classList.remove('history__hide')
  } else {
    accordeonElement.querySelector('.e-accordion__more').classList.add('history__hide')
  }
}