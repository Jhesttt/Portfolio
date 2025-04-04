document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const sideNav = document.getElementById("sideNav");
  const overlay = document.querySelector(".overlay");

  // Ensure sideNav and overlay are hidden by default
  sideNav.classList.remove("display");
  overlay.classList.remove("display");

  menuIcon.addEventListener("click", () => {
    sideNav.classList.toggle("display");
    overlay.classList.toggle("display");
  });

  overlay.addEventListener("click", () => {
    sideNav.classList.remove("display");
    overlay.classList.remove("display");
  });

  // Define custom offsets for each section
  const offsets = {
    "#home": 100, // Offset for Home section
    "#stacks": 68, // Offset for Web Stacks section
    "#projects": 35, // Offset for Featured Projects section
    "#contact": 128, // Offset for Get in Touch section
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute("href"); // Get the target section ID
      const targetSection = document.querySelector(targetId);

      // Get the custom offset for the target section, default to 0 if not defined
      const offset = offsets[targetId] || 0;

      // Calculate the position with the offset
      const targetPosition = targetSection.offsetTop - offset;

      // Smoothly scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});
