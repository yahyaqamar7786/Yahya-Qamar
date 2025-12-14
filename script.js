// --- JAVASCRIPT FOR IMAGE CAROUSEL/SLIDER (index.html) ---

let slideIndex = 1;

// Only run carousel code if slides exist (i.e., on index.html)
if (document.getElementsByClassName("carousel-slide").length > 0) {
    showSlides(slideIndex);
    // Auto-play feature (5000ms = 5 seconds)
    setInterval(() => plusSlides(1), 5000); 
}

// Function to move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Main function to display the correct slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  
  if (slides.length === 0) return; 

  // Wrap around logic
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Display the current slide
  slides[slideIndex-1].style.display = "block";  
}


// --- JAVASCRIPT FOR FORM VALIDATION (contact-us.html) ---

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            
            e.preventDefault(); 
            
            if (validateForm()) {
                alert('Form Submitted Successfully! (Validation Passed)');
                // If using PHP later, uncomment: form.submit();
            }
        });
    }
});

function validateForm() {
    let isValid = true;
    
    const clearError = (id) => document.getElementById(id).textContent = '';
    const setError = (id, message) => { 
        document.getElementById(id).textContent = message; 
        isValid = false; 
    };

    // 1. Validate Name
    const name = document.getElementById('name');
    clearError('nameError');
    if (name.value.trim() === '') {
        setError('nameError', 'Name is required.');
    }

    // 2. Validate Email
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    clearError('emailError');
    if (!emailPattern.test(email.value)) {
        setError('emailError', 'Enter a valid email address.');
    }

    // 3. Validate Service Selection
    const service = document.getElementById('service');
    clearError('serviceError');
    if (service.value === '') {
        setError('serviceError', 'Please select a service.');
    }
    
    // 4. Validate Message
    const message = document.getElementById('message');
    clearError('messageError');
    if (message.value.trim().length < 10) {
        setError('messageError', 'Message must be at least 10 characters.');
    }

    return isValid;
}