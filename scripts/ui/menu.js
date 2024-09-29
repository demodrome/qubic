const menu = (function() {
  const menus = document.querySelectorAll('[data-menu]');
  
  menus.forEach(function(menu) {
    const menuHead = menu.children[0];
    
    menuHead.addEventListener('click', function(event) {
      const menuComponent = this.parentElement;
      const toggleIcon = menuComponent.children[0].children[1];
      const menuBody = menuComponent.children[1];

      menuBody.classList.toggle('hidden');
      toggleIcon.classList.toggle('fa-chevron-down');
      toggleIcon.classList.toggle('fa-chevron-up');
    });
  });
})();

export default menu;
