const typed = new Typed('.typed',{
    stringsElement: '#text-typed',
    smartBackspace: true,
    typeSpeed: 70,
    backSpeed: 20,
    starDelay: 2000,
    shuffle: false,
    backDelay: 2000,
    loop: false,
    contentType: 'null',
});

window.onscroll = function() {
    let y = window.scrollY;
    let header = document.querySelector(".header");
    if(y>30){
        header.classList.add("header--fixed");
    }
    else{
        header.classList.remove("header--fixed");
    }
};

const menuLinks = document.querySelectorAll('.header-navbar__content-item-ref[href^="#"]');
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.header-navbar__content-item-ref[href="#${id}"]`);
  
        if (entry.isIntersecting) {
          document.querySelectorAll('.header-navbar__content-item-ref').forEach(
            (element)=>{element.classList.remove("ref--active");}
          )
          menuLink.classList.add("ref--active");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

menuLinks.forEach((menuLink) => {
    // menuLink.addEventListener("click", function () {
    //   menu.classList.remove("menu_opened");
    // });
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });