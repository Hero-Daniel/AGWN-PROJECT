const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".hidden-scroll").forEach((el) => {
  observer.observe(el);
});

const sponsorBtn = document.getElementById("sponsorBtn");
const sponsorModal = document.getElementById("sponsorModal");
const closebtn = document.querySelectorAll(".closeBtn");
const modal = document.querySelectorAll(".modal");
const enrollBtn = document.getElementById("enrollBtn");
const enrollModal = document.getElementById("enrollModal");

sponsorBtn.addEventListener("click", () =>
  sponsorModal.classList.replace("hidden", "flex")
);

enrollBtn.addEventListener("click", () => 
  enrollModal.classList.replace("hidden", "flex"));

  closebtn.forEach((btn) => { 
    if(btn.closest("#enrollModal")) {
      btn.addEventListener("click", () => {
        enrollModal.classList.replace("flex", "hidden");
      });
    } else if(btn.closest("#sponsorModal")) {
      btn.addEventListener("click", () => {
        sponsorModal.classList.replace("flex", "hidden");
      });
    }
  });

modal.forEach((modalElement) => {
  modalElement.addEventListener("click", (event) => {
    if (event.target === modalElement) {
      modalElement.classList.replace("flex", "hidden");
    }
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,

  freeMode: {
    enabled: true,
    momentum: false,
  },

  speed: 15000, // lower = faster feel (tweak this)

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },

    1024: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    },
  },
});

