function toggleMenu() {
  console.log("Toggle menu function called");
  const menu = document.querySelector(".menu-links"); // Change this line
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// //*dark mode buuton
// let icon = document.getElementById("icon");
// icon.onclick = function () {
//   document.body.classList.toggle("dark-theme");
//   if (document.body.classList.contains("dark-theme")) {
//     icon.src = "assets/sun.png";
//   } else {
//     icon.src = "assets/moon.png";
//   }
// };
