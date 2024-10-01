/**
 * Attach tooltip functionality to tooltip elements.
 * Tooltip elements are defined in HTML via the [data-tooltip]
 * attribute.
 */
const tooltips = (function() {
  const tooltipComponents = document.querySelectorAll('[data-tooltip]');
  
  function handleShowTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = this.getAttribute('data-tooltip');

    // Render the tooltip to the document after a delay
    const showingTooltip = setTimeout(function() {
      if (!document.querySelector('body').querySelector('.tooltip')) {
        const body = document.querySelector('body');
        body.appendChild(tooltip);

        // Position the tooltip
        let x = event.clientX + 10;
        let y = event.clientY - tooltip.offsetHeight / 2;

        if (x + tooltip.offsetWidth >= window.innerWidth) {
          x = event.clientX - 10 - tooltip.offsetWidth;
        }

        if (y < 0) {
          y = 0;
        }

        tooltip.setAttribute('style', `top: ${y}px; left: ${x}px;`);
      }
    }, 700);

    event.target.addEventListener('mouseleave', function() {
      // Prevent tooltip from showing if mouse has already left the tooltip element
      // before the timeout has fired
      clearTimeout(showingTooltip);

      // Remove tooltip from body
      const tooltip = document.querySelector('.tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  }

  tooltipComponents.forEach(function(tooltip) {
    tooltip.addEventListener('mouseenter', handleShowTooltip);
  });
})();

export default tooltips;