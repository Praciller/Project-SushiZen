// Navbar module
class Navbar {
  constructor() {
    this.navMenu = document.getElementById('nav-menu');
    this.navToggle = document.getElementById('nav-toggle');
    this.navClose = document.getElementById('nav-close');

    if (this.navToggle) {
      this.navToggle.addEventListener('click', this.toggleMenu.bind(this));
    }

    if (this.navClose) {
      this.navClose.addEventListener('click', this.hideMenu.bind(this));
    }

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => link.addEventListener('click', this.hideMenu.bind(this)));
  }

  toggleMenu() {
    this.navMenu.classList.toggle('show-menu');
  }

  hideMenu() {
    this.navMenu.classList.remove('show-menu');
  }
}

// Header module
class Header {
  constructor() {
    this.header = document.getElementById('header');
    window.addEventListener('scroll', this.scrollHeader.bind(this));
    window.addEventListener('scroll', this.showScrollUp.bind(this));
  }

  scrollHeader() {
    this.header.classList.toggle('bg-header', window.scrollY >= 50);
  }

  showScrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    scrollUp.classList.toggle('show-scroll', window.scrollY >= 350);
  }
}

// Theme module
class Theme {
  constructor() {
    this.themeButton = document.getElementById('theme-button');
    this.darkTheme = 'dark-theme';
    this.iconTheme = 'ri-sun-line';

    this.loadTheme();
    this.themeButton.addEventListener('click', this.toggleTheme.bind(this));
  }

  loadTheme() {
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](this.darkTheme);
    this.themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](this.iconTheme);
  }

  toggleTheme() {
    document.body.classList.toggle(this.darkTheme);
    this.themeButton.classList.toggle(this.iconTheme);
    const currentTheme = document.body.classList.contains(this.darkTheme) ? 'dark' : 'light';
    localStorage.setItem('selected-theme', currentTheme);
    localStorage.setItem('selected-icon', this.themeButton.classList.contains(this.iconTheme) ? 'ri-moon-line' : 'ri-sun-line');
  }
}

// Scroll reveal module
class ScrollRevealAnimation {
  constructor() {
    this.revealElements();
  }

  revealElements() {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.home__img, .newsletter__container, 
           .footer__logo, .footer__description, 
           .footer__content, .footer__info`);

    sr.reveal(`.home__data`, {
      origin: 'bottom'
    });

    sr.reveal(`.about__data, .recently__data`, {
      origin: 'left'
    });

    sr.reveal(`.about__img, .recently__img`, {
      origin: 'right'
    });

    sr.reveal(`.popular__card`, {
      interval: 100
    });
  }
}

// Initialize modules
document.addEventListener('DOMContentLoaded', () => {
  new Navbar();
  new Header();
  new Theme();
  new ScrollRevealAnimation();
});
