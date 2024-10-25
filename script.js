const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function showCarouselSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  slideIndex = index;
}

function nextSlide() {
  showCarouselSlide((slideIndex + 1) % slides.length);
}

function prevSlide() {
  showCarouselSlide((slideIndex - 1 + slides.length) % slides.length);
}

// Automatically cycle through slides (adjust the interval as needed)
setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1 // Trigger when 10% of the element is in view
  };

  const pastEventsSection = document.querySelector(".description-container");

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class when the section is in view
        entry.target.classList.add("animate-visible");
      } else {
        // Remove the animation class when the section leaves view
        entry.target.classList.remove("animate-visible");
      }
    });
  }, observerOptions);

  observer.observe(pastEventsSection);
});

function startCountdown() {
  const countdownElements = document.querySelectorAll('.countdown');

  countdownElements.forEach(el => {
      const eventDate = new Date(el.dataset.eventDate).getTime();

      const updateCountdown = () => {
          const now = new Date().getTime();
          const distance = eventDate - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          if (distance < 0) {
              el.innerHTML = "Event has passed";
          } else {
              el.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
          }
      };

      updateCountdown();
      setInterval(updateCountdown, 1000);
  });
}


// Slider Navigation Logic
let currentSlide = 0;
const eventSlides = document.querySelectorAll('.event-slide');
const totalSlides = eventSlides.length;

function showEventSlide(index) {
  const slider = document.querySelector('.upcoming-slider');
  const slideWidth = eventSlides[0].clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

document.getElementById('left-arrow').addEventListener('click', () => {
  currentSlide = (currentSlide <= 0) ? totalSlides - 1 : currentSlide - 1;
  showEventSlide(currentSlide);
});

document.getElementById('right-arrow').addEventListener('click', () => {
  currentSlide = (currentSlide >= totalSlides - 1) ? 0 : currentSlide + 1;
  showEventSlide(currentSlide);
});

// Initialize countdown and slider on DOM load
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.upcoming-events, .about-us, .events-list');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target); // Once visible, stop observing
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  sections.forEach(section => {
    section.classList.add('fade-in'); // Initially hide the section
    observer.observe(section); // Observe each section
  });
});
