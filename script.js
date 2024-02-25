function toggleMenu() {
  console.log("Toggle menu function called");
  const menu = document.querySelector(".menu-links"); // Change this line
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
