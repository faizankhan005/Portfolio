
// Modal functionality
      function openModal(modalId) {
        document.getElementById(modalId).classList.add("show");
      }

      function closeModal(modalId) {
        document.getElementById(modalId).classList.remove("show");
      }

      // Close modal when clicking outside
      window.onclick = function (event) {
        if (event.target.classList.contains("modal")) {
          event.target.classList.remove("show");
        }
      };

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Form submission handlers
      document.querySelectorAll("form").forEach((form) => {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Form submitted! (This is a demo)");
        });
      });

      