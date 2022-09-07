class CelNavbar {
    constructor(celMenu, navList, navLinks) {
      this.celMenu = document.querySelector(celMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.celMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.celMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.celMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const celNavbar = new CelNavbar(
    ".cel-Menu",
    ".nav-list",
    ".nav-list li",
  );
  celNavbar.init();

