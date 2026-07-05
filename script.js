document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    // Set initial text based on the current theme
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      themeToggle.textContent = '☀️ Light Mode';
    } else {
      themeToggle.textContent = '🌙 Dark Mode';
    }

    themeToggle.addEventListener('click', () => {
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
      }
    });
  }
});
