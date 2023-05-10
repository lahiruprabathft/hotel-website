// script.js

// Define an array of background images
var backgroundImages = [
    'src/hotel/1.jpg',
    'src/hotel/2.jpg',
    'src/hotel/3.jpg',
    'src/hotel/4.jpg',
    'src/hotel/5.jpg',
  ];
  

  var currentIndex = 0;
  var heroSection = document.querySelector('.hero-section');
  
  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    heroSection.style.opacity = 0; /* Set opacity to 0 for fade-out effect */
    
    // Wait for fade-out transition to complete before changing background image and triggering fade-in
    setTimeout(function() {
      heroSection.style.backgroundImage = 'url(' + backgroundImages[currentIndex] + ')';
      heroSection.style.opacity = 1; /* Set opacity to 1 for fade-in effect */
    }, 500); // Set timeout to match transition duration (0.5s in this case)
  }
  
  changeBackgroundImage();
  
  setInterval(changeBackgroundImage, 6000);

//   navbar JS CODE from here


  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
      navbar.style.backgroundColor = '#160a499b'; // Change to desired background color
    } else {
      navbar.style.backgroundColor = '#160a499b'; // Change to desired background color
    }
  });


//   Room Pop Up

// Get the modal element
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btns = document.querySelectorAll('.see-more');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Loop through each "See More" button and attach a click event listener
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var roomId = this.dataset.roomId; // Get the room ID from the data attribute
    var popup = document.getElementById('popup-room' + roomId); // Get the corresponding popup content
    modal.style.display = 'block'; // Display the modal
    popup.style.display = 'block'; // Display the popup content
  });
});

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
  modal.style.display = 'none'; // Hide the modal
  // Hide all the popup contents
  var popups = document.querySelectorAll('.popup-content');
  popups.forEach(function(popup) {
    popup.style.display = 'none';
  });
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'; // Hide the modal
    // Hide all the popup contents
    var popups = document.querySelectorAll('.popup-content');
    popups.forEach(function(popup) {
      popup.style.display = 'none';
    });
  }
});


// small gallery for room feature


