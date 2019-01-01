function toggleMenu(visible) {
   document.querySelector('.sidenav').classList.toggle('show', visible)
}

ducment.querySelector('.hamburger').addEventListener('click', function(e) {
   e.preventDefault();
   toggleMenu()
});