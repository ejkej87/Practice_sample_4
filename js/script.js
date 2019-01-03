function toggleMenu(visible) {
   document.querySelector('.sidenav').classList.toggle('show', visible)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
   e.preventDefault();
   toggleMenu()
});