/* Toggle Mobile Navigation */
function toggleMobileMenu() {
  const burger = document.getElementById('nav-toggle')
  const menu = document.getElementById('nav-menu')

  if(menu.classList.contains('is-active')) {
    menu.classList = 'nav-right nav-menu'
  } else {
    menu.classList = 'nav-right nav-menu is-active'
  }
}