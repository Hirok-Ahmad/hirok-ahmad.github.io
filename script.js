//========================For Nav ber ========================
document.addEventListener('DOMContentLoaded', function () {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(function(skillLevel) {
      const skillPercentage = skillLevel.getAttribute('data-skill');
      skillLevel.style.width = skillPercentage;
    });
  });
//========================For Nav ber ========================



// ++++++++++++++++++++++++ protfolio carosel Start +++++++++++++++++++++++++++++++++++++++++++

let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (n >= totalSlides) index = 0;
    if (n < 0) index = totalSlides - 1;

    document.querySelector('.carousel-inner').style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

// Optionally, you can set an interval for auto-sliding
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// +++++++++++++++++++++++++ protfolio carosel End  ++++++++++++++++++++++++++++++++++++++++++++++




// ++++++++++++++++++++++++++++++testimonial start++++++++++++++++++++++++++++++++++++
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.testimonial-slides');
    const totalSlides = document.querySelectorAll('.testimonial-slide').length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.testimonial-prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.testimonial-next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});

// +++++++++++++++++++++++++++++++++++++ testimonial End ++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++ Contact Form Start ++++++++++++++++++++++++++++
function toggleAdditionalInfo() {
    var additionalInfoSection = document.getElementById('additional-info');
    if (additionalInfoSection.style.display === "none") {
      additionalInfoSection.style.display = "block";
    } else {
      additionalInfoSection.style.display = "none";
    }
  }
// +++++++++++++++++++++++++++++ Contact Form End ++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++ Nav ber Start ++++++++++++++++++++++++++++
// document.querySelector('.tmenu-toggle').addEventListener('click', function() {
//     document.querySelector('.tnav-links').classList.toggle('active');
// });

// +++++++++++++++++++++++++++++ Nav ber End ++++++++++++++++++++++++++++


        // Disable right-click on the whole document
        // document.addEventListener('contextmenu', function(event) {
        //     event.preventDefault(); // Disable right-click menu
        //     alert("Right-click is disabled on this page!");
        // });
