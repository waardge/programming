/* File name: toggle-details.js
      Author: Daniel Zhuo
   Student #: 301330354
        Date: Oct 5, 2023
*/

// Get references to the elements
const toggleLinks = document.querySelectorAll('.toggleLink');
const collapseAllButton = document.getElementById('collapseAllButton');
const expandAllButton = document.getElementById('expandAllButton');

// Add click event listeners to all "More Details" links
toggleLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior (navigation)

    // Get the target content element based on the data-target attribute
    const targetId = this.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    // Toggle the visibility of the target content
    if (targetContent.style.display === "none" || targetContent.style.display === "") {
      targetContent.style.display = "block"; // Show the content
      this.textContent = "Less Details"; // Update link text
    } else {
      targetContent.style.display = "none"; // Hide the content
      this.textContent = "More Details"; // Update link text
    }
  });

  // Set initial state to "hidden"
  const targetId = link.getAttribute('data-target');
  const targetContent = document.getElementById(targetId);
  targetContent.style.display = "none";
});

// Add click event listeners to "Collapse All" and "Expand All" buttons
collapseAllButton.addEventListener("click", function () {
  // Collapse all project details
  toggleLinks.forEach(link => {
    const targetId = link.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    targetContent.style.display = "none";
    link.textContent = "More Details";
  });
});

expandAllButton.addEventListener("click", function () {
  // Expand all project details
  toggleLinks.forEach(link => {
    const targetId = link.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    targetContent.style.display = "block";
    link.textContent = "Less Details";
  });
});



