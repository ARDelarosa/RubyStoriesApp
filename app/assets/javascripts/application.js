// app/assets/javascripts/application.js

// wrap code in an IIFE so don't leak variables globally.

(function() {
  function setupSidebarToggle() {
    var toggleBtn = document.getElementById("menuToggle");
    var sidebar   = document.getElementById("sidebar");
    var pageWrap  = document.getElementById("pageContent");

    // If any of these don’t exist on the page, just stop.
    if (!toggleBtn || !sidebar || !pageWrap) {
      return;
    }

    toggleBtn.addEventListener("click", function() {
      sidebar.classList.toggle("open");     // slide menu in/out
      pageWrap.classList.toggle("shifted"); // push page content
      toggleBtn.classList.toggle("active"); // button style change
    });
  }

  // Need to handle both normal page loads AND Rails' client-side nav.
  // Older Rails uses Turbolinks; if Turbolinks is there, it fires `turbolinks:load`.
  // Listen to BOTH to be safe.

  document.addEventListener("DOMContentLoaded", setupSidebarToggle);
  document.addEventListener("turbolinks:load", setupSidebarToggle);
})();
