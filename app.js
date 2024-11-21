function showContent(contentId) {
  // Hide all content boxes
  document.querySelectorAll(".content-box").forEach((box) => {
    box.style.display = "none";
  });

  // Show the selected content
  const selectedBox = document.getElementById(contentId);
  selectedBox.style.display = "block";
}

// Adjust height on page load
window.onload = function () {
  showContent("about"); // Show the "About" section initially
};
