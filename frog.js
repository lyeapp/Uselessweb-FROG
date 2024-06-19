
// document.addEventListener("DOMContentLoaded", function() {
//   const frog = document.getElementById("frog");
//   const windowHeight = window.innerHeight;

//   function jumpFrog(mouseEvent) {
//     // Jump to the top
//     frog.style.bottom = '0px';

//     // Wait for 1 second (adjustable)
//     setTimeout(function() {
//       // Jump to the height of the mouse pointer from the bottom
//       frog.style.bottom = (windowHeight - mouseEvent.clientY) + 'px';
      
//     }, 1000); // Adjust delay as needed for the jumping speed
//   }

//   // Attach the jumpFrog function to the mousemove event
//   document.addEventListener('mousemove', function(event) {
//     jumpFrog(event);
//   });
// });




document.addEventListener("DOMContentLoaded", function() {
  const frog = document.getElementById("frog");
  const windowHeight = window.innerHeight;

  // Create a new audio element and load the crying sound
  const cryingSound = new Audio('frog-qua-cry-36013.mp3');

  function jumpFrog(mouseEvent) {
    // Jump to the top
    frog.style.bottom = '0px';

    // Play the crying sound
    cryingSound.play();

    // Wait for 1 second (adjustable)
    setTimeout(function() {
      // Jump to the height of the mouse pointer from the bottom
      frog.style.bottom = (windowHeight - mouseEvent.clientY) + 'px';
      
    }, 1000); // Adjust delay as needed for the jumping speed
  }

  // Attach the jumpFrog function to the mousemove event
  document.addEventListener('mousemove', function(event) {
    jumpFrog(event);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const frog = document.getElementById("frog");
  const windowHeight = window.innerHeight;

  // Create a new audio element and load the crying sound
  const cryingSound = new Audio('frog-qua-cry-36013.mp3');





  function jumpFrog(mouseEvent) {
    // Jump to the top
    frog.style.bottom = '0px';

    // Play the crying sound
    cryingSound.play();

    // Wait for 1 second (adjustable)
    setTimeout(function() {
      // Jump to the height of the mouse pointer from the bottom
      frog.style.bottom = (windowHeight - mouseEvent.clientY) + 'px';
      
    }, 1000); // Adjust delay as needed for the jumping speed
    
  }
  
  // Attach the jumpFrog function to the mousemove event
  document.addEventListener('mousemove', function(event) {
    jumpFrog(event);
  });
});



  
  
  