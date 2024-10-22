const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  slideIndex = index;
}

function nextSlide() {
  showSlide((slideIndex + 1) % slides.length);
}

function prevSlide() {
  showSlide((slideIndex - 1 + slides.length) % slides.length);
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
  const countdowns = document.querySelectorAll('.countdown');

  countdowns.forEach(countdown => {
    const eventDate = new Date(countdown.getAttribute('data-event-date')).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdown.innerHTML = `<span>${days}</span> Days <span>${hours}</span> Hours <span>${minutes}</span> Minutes <span>${seconds}</span> Seconds`;

      if (timeLeft < 0) {
        countdown.innerHTML = "Event Started!";
      }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
}

// Slider Navigation Logic
let currentSlide = 0;
const slides1 = document.querySelectorAll('.event-slide');
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector('.upcoming-slider');
  const slideWidth = slides1[0].clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

document.getElementById('left-arrow').addEventListener('click', () => {
  currentSlide = (currentSlide <= 0) ? totalSlides - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

document.getElementById('right-arrow').addEventListener('click', () => {
  currentSlide = (currentSlide >= totalSlides - 1) ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Initialize countdown and slider on DOM load
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  showSlide(currentSlide);
});
