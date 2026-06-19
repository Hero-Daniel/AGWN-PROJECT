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
        img: "/images/fashion.png",
        title: "Coding & Web Design",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 3,
        img: "/img/Full Stack Development.png",
        title: "Fish Farming",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 4,
        img: "/img/Full Stack Development.png",
        title: "Makeup & Gele Tying",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 5,
        img: "/img/Full Stack Development.png",
        title: "Graphics Design",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 6,
        img: "/img/Full Stack Development.png",
        title: "Catering",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 7,
        img: "/img/Full Stack Development.png",
        title: "Outdoor Decoration",
        description: "Learn the art of tailoring and create custom garments.",
      },
      {
        id: 8,
        img: "/img/Full Stack Development.png",
        title: "UX/UI Design",
        description: "Learn the art of tailoring and create custom garments.",
      },
];
const container = document.getElementById("course-container");

function displayCourses(courseArray) {
    container.innerHTML = ""; 

    courseArray.forEach((course) => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow-md overflow-hidden";

        card.innerHTML = ` 
            <img src="${course.img}"
                alt="${course.title}"
                class="w-full h-48 object-cover">
            
            <div class="p-6 space-y-4">
                <h2 class="text-2xl font-bold text-gray-800">${course.title}</h2>
                <p class="text-gray-400 text-lg">${course.description}</p>

                <button class="enroll-btn w-full bg-[#078928] text-white py-2 rounded-lg transition cursor-pointer"
                    data-id="${course.id}">
                    Enroll Now
                </button>
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