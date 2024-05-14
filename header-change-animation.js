const element = document.getElementById("1");
const changeElement = document.getElementsByClassName("sub-header")[0]
const chiRoIcon = document.getElementById("chi_ro_icon")

// Define the style to apply when the element is in view
const styleInView = "color: rgb(51, 50, 50); background-color: #d4a017;";
const styleOutView = "color: #d4a017; background-color: none;";  // Optional: Style for out of view

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        changeElement.style.cssText = styleInView; // Apply style when in view
        chiRoIcon.style.cssText = "opacity: 1;"
    } else {
      // Optional: Apply a different style when out of view
        changeElement.style.cssText = styleOutView; 
    }
  });
});

// Observe the element for visibility changes
observer.observe(element);