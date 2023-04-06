AOS.init();
new PureCounter();

// Or you can customize it for override the default config.
// Here is the default configuration for all element with class 'filesizecount'
new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".purecounter", // HTML query selector for spesific element

    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    end: 100, // End number [uint]
    duration: 2, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});
let navbarItems = document.querySelectorAll("#nav-components");

navbarItems.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("active");
    // console.log(element.textContent);
    navbarItems.forEach((other) => {
      if (element !== other) {
        other.classList.remove("active");
      }
    });
  });
});

var owl = $(".owl-carousel.my-carousel");
owl.owlCarousel({
  //   items: 3,
  nav: false,
  loop: true,
  dots: true,
  margin: 2,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

let owl2 = $(".owl-carousel.other-carousel")
console.log('owl2', owl2);
owl2.owlCarousel({
  center: true,
    items: 5,
  nav: false,
  loop: true,
  dots: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 5,
    },
  },
  
});

const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});


