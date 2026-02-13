// Shared nav: year, mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var mobileToggle = document.getElementById('mobileToggle');
  var mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      var display = getComputedStyle(mainNav).display;
      mainNav.style.display = (display === 'flex') ? 'none' : 'flex';
    });
  }
});
