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

const courses = [
    {
        id: 1,
        img: "/images/fashion.png",
        title: "Tailoring",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 2,
        img: "/images/coding.png",
        title: "Coding & Web Design",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 3,
        img: "/images/fish-farming.png",
        title: "Fish Farming",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 4,
        img: "/images/gele.png",
        title: "Makeup & Gele Tying",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 5,
        img: "/images/graphics.png",
        title: "Graphics Design",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 6,
        img: "/images/catering.png",
        title: "Catering",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 7,
        img: "/images/decoration.png",
        title: "Outdoor Decoration",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 8,
        img: "/images/ux:ui.png",
        title: "UX/UI Design",
        description: "Learn the art of tailoring and create custom garments.",
      },
];
const container = document.getElementById("course-container");

function displayCourses(courseArray) {
  container.innerHTML = "";

  courseArray.forEach((course) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col";

    card.innerHTML = `
      <div class="relative w-full aspect-video overflow-hidden">
        <img 
          src="${course.img}" 
          alt="${course.title}"
          class="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div class="p-5 flex flex-col gap-3 flex-1">
        <h2 class="text-lg md:text-xl font-bold text-gray-800">${course.title}</h2>
        <p class="text-gray-500 text-sm md:text-base leading-relaxed flex-1">${course.description}</p>
        <a href="contact.html" class="enroll-btn block text-center w-full bg-[#078928] text-white py-2.5 rounded-lg text-sm md:text-base font-medium hover:bg-green-700 transition cursor-pointer mt-auto" data-id="${course.id}">
          Enroll Now →
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}
displayCourses(courses);


const input = document.getElementById("inputCourse");

function handleSearch() {
    
        const searchCourse = input.value.toLowerCase();
        const filteredCourses = courses.filter(course =>
            course.title.toLowerCase().includes(searchCourse)
        );
        displayCourses(filteredCourses);
        if(searchCourse === "") {
            displayCourses(courses);
        } else if(filteredCourses.length === 0) {
            container.innerHTML = "<p class='text-center text-gray-500'>No courses found.</p>";
        }
}
function debounce(callback, delay) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
input.addEventListener("input", debounce(handleSearch, 300));