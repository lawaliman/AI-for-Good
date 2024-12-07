// JavaScript for Interactive Features

// Change navbar style on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for internal links
document.querySelectorAll('.nav-link, .btn').forEach(link => {
  link.addEventListener('click', function(e) {
      if (this.hash !== '') {
          e.preventDefault();
          const hash = this.hash;
          document.querySelector(hash).scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});


// JavaScript for About Section Animations

document.addEventListener('DOMContentLoaded', () => {
  const aboutCards = document.querySelectorAll('#about .card');

  // ScrollReveal Animations
  aboutCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';

      // Add animation on scroll
      window.addEventListener('scroll', () => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
              setTimeout(() => {
                  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
              }, index * 150); // Stagger animations
          }
      });
  });
});



// JavaScript for card hover animations
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
  });
  card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
  });
});

// JavaScript for Register Section Animations

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.register-card');

    // Add hover effect animations for cards
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Add smooth scrolling for links (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

