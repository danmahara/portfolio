        // Function to generate a random color (excluding white)
        // function getRandomColor() {
        //     var letters = '0123456789ABCDEF';
        //     var color = '#';
        //     do {
        //         color = '#';
        //         for (var i = 0; i < 6; i++) {
        //             color += letters[Math.floor(Math.random() * 16)];
        //         }
        //     } while (color === '#FFFFFF'); // Keep generating until a non-white color is obtained
        //     return color;
        // }
        // setInterval(function() {
        //     var element = document.getElementById('changeColor');
        //     element.style.color = getRandomColor();
        //   }, 1100); 

        // Change text color on every click
        // document.addEventListener('click', function() {
        //     var element = document.getElementById('changeColor');
        //     element.style.color = getRandomColor();
        // });
        
        // Change text color on page load
        // document.addEventListener('DOMContentLoaded', function() {
        //     var element = document.getElementById('changeColor');
        //     element.style.color = getRandomColor();
        // });
        

        // var links = document.querySelectorAll('.nav-link');
        // // Add click event listeners to each link
        // links.forEach(function(link) {
        //   link.addEventListener('click', function() {
    
        //     // Remove the "selected" class from all links
        //     links.forEach(function(item) {
        //       item.classList.remove('selected');
        //       item.style.backgroundColor = '';
        //       item.style.color = ''; // Reset text color for all links
        //     });
    
        //     // Add the "selected" class to the clicked link
        //     link.classList.add('selected');
    
        //     // Change the text color to white for the clicked link
        //     link.style.backgroundColor = 'green';
        //     link.style.color = 'white';
          
        //   });
        // });
        // // Set the "selected" class for the Home link on page load
        // window.addEventListener('DOMContentLoaded', function() {
        //   var homeLink = document.getElementById('homeLink');
        //   homeLink.classList.add('selected');
        //   homeLink.backgroundColor='green'
        //   homeLink.style.color = 'white'; 
        // });