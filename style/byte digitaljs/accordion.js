var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//     var icon = this.querySelector(".accordion-icon");
//     icon.classList.toggle("rotate180");
//   });
// }
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("panel-active");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("panel-active");
    }
  });
}
const accordions = document.querySelectorAll(".accordion");
        
            accordions.forEach(accordion => {
                accordion.addEventListener("click", function() {
                    // Toggle the "active" class for the clicked accordion
                    this.classList.toggle("active");
        
                    // Get the panel associated with the clicked accordion
                    const panel = this.nextElementSibling;
        
                    // Toggle the "show" class for the panel
                    panel.classList.toggle("show");
        
                    // Close other panels if open
                    accordions.forEach(item => {
                        if (item !== this) {
                            item.classList.remove("active");
                            item.nextElementSibling.classList.remove("show");
                        }
                    });
                });
            });