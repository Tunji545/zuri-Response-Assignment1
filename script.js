const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

console.log(toggleButton, navLinks);
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
  console.log(navLinks);
  console.log(toggleButton);
});
