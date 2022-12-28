// file has functions which handle the dark mode implementation on the website

const darkModeSwitch = $("#dark-mode-switch")

function darkModeToggle(){
    $("body").toggleClass("dark-body")
    $("a.link").toggleClass("dm-link")
    $(".middle-bg").toggleClass("dark-middle")
    $(".light-bg").toggleClass("border-dark dark-light")
    $("nav > a, nav > div > ul > li > a").toggleClass("white-text")
    $("nav > div > ul > li > a").toggleClass("opacity")
    $("a.active").toggleClass("text-light active-link") // bootstrap overwrites my CSS for.. some reason, so I need to put in this toggle to make the active links white on dark mode
    $("button.primary-bg, a.primary-bg").toggleClass("dark-primary")
    $("button.secondary-bg, a.secondary-bg").toggleClass("dark-secondary hover-light")
    $(".primary-btn").toggleClass("dm-primary-btn")
    $(".secondary-btn").toggleClass("dm-secondary-btn")
    $("input.form-control").toggleClass("dark-light border-dark")
    $(".dark-color").toggleClass("dm-text")
    $(".abilities").toggleClass("dm-border")
    $(".progress").toggleClass("dark-light")
    $("#dark-mode-icon").toggleClass("fas fa-moon") // changes dark mode icon
    darkModeSwitch.attr("checked", true); // keeps switch checked even between pages if dark mode is toggled
}

// Localstorage code to store dark mode preference. Thank you stackoverflow user sbgib.
      $(document).ready(function() {
        //check for localStorage, add as browser preference if missing
        if (!localStorage.getItem("mode")) {
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.setItem("mode", "dark-theme");
          } else {
            localStorage.setItem("mode", "light-theme");
          }
        }
      
        //set interface to match localStorage
        if (localStorage.getItem("mode") == "dark-theme") { 
          darkModeToggle()
          darkModeSwitch.checked = true;
        } else {
          darkModeSwitch.checked = false; 
        }

         //add toggle
  darkModeSwitch.on("click", function() {
    if ($("body").hasClass("dark-body")) {
      darkModeToggle()
      localStorage.setItem("mode", "light-theme");
      
    } else {
      darkModeToggle()
      localStorage.setItem("mode", "dark-theme");
    }
  });
});
