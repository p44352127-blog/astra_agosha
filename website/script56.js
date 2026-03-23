document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('blogContainer');
    const cards = document.querySelectorAll('.blog-card');
    
    // Scroll distance = Card width (350) + Gap (60)
    const scrollAmount = 430;

    // Navigation Click Events
    document.getElementById('nextBtn').onclick = () => {
        container.scrollLeft += scrollAmount;
    };

    document.getElementById('prevBtn').onclick = () => {
        container.scrollLeft -= scrollAmount;
    };

    // Toggle Flip and Slide on Click
    cards.forEach(card => {
        card.onclick = function(e) {
            // Prevent flip if clicking the 'Read More' link
            if (e.target.tagName === 'A') return;
            this.classList.toggle('active');
        };
    });
});






loadPosts()

const form = document.getElementById("my-contact-form");
const status = document.getElementById("status-message");

async function handleSubmit(event) {
  event.preventDefault(); // Prevents the page from reloading
  const data = new FormData(event.target);
  
  // Show a loading state
  status.innerHTML = "Sending...";
  status.style.color = "#2a9d8f";

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks! Your message has been sent. ✨";
      form.reset(); // Clears the form fields
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form.";
          status.style.color = "red";
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem connecting to the server.";
    status.style.color = "red";
  });
}

form.addEventListener("submit", handleSubmit);

document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentItem = button.parentElement;

            // Optional: Close other open questions when one is clicked
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                    item.querySelector('.icon').textContent = '+';
                }
            });

            // Toggle current item
            currentItem.classList.toggle('active');
            
            // Update icon
            const icon = button.querySelector('.icon');
            icon.textContent = currentItem.classList.contains('active') ? '+' : '+'; 
            // Note: The CSS handles the rotation of the '+', so text stays '+'
        });
    });
});