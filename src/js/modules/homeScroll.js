const homeScroll = () => {
  const nav = document.querySelector('nav');
  const headerBtn = document.querySelector('.header__btn');
  const headerList = document.querySelector('.header__list');
  const upBtn = document.querySelector('.up');

  const hamburger = () => {
    const headerBtn = document.querySelector('.header__btn');
    const menu = document.querySelector('.header__list');

    headerBtn.addEventListener('click', () => {
      if (headerBtn.classList.contains('header__btn--active')) {
        headerBtn.classList.remove('header__btn--active');
        menu.classList.remove('header__list--active')
      } else if (headerBtn.classList.contains('header__btn')) {
        headerBtn.classList.add('header__btn--active');
        menu.classList.add('header__list--active')
      }
    })
  }
  hamburger();

  window.onscroll = () => {
    if (window.scrollY >= 930) {
      upBtn.classList.add('up--active')
    } else if (window.scrollY < 930) {
      upBtn.classList.remove('up--active')
    }
  };

  upBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })

  nav.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('ul>li>a')) {
      const id = e.target.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      headerList.classList.remove('header__list--active');
      headerBtn.classList.remove('header__btn--active');
    };
  });
};

export default homeScroll;