class Navbar {
  constructor() {
    this.asideIcon = document.querySelector('#aside-menu');
    this.navIcon = document.querySelector('#nav-menu');
    this.asideMenu = document.querySelector('aside');
    this.navMenu = document.querySelector('nav');
    this.main = document.querySelector('main');
    this.aside();
    this.nav();
    this.close();
  }

  aside() {
    this.asideIcon.addEventListener('click', _ => {
      this.navMenu.style.right = '-100%';
      this.asideMenu.style.left = 0;
      this.main.classList.add('over');
    });
  }
  
  nav() {
    this.navIcon.addEventListener('click', _ => {
      this.asideMenu.style.left = '-100%';
      this.navMenu.style.right = 0;
      this.main.classList.add('over');
    });
  }
  
  close() {
    this.main.addEventListener('click', _ => {
      this.asideMenu.style.left = '-100%';
      this.navMenu.style.right = '-100%';
      this.main.classList.remove('over');
    });
  }
}

new Navbar();