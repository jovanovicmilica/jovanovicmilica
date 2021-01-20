  window.onscroll = function() {scrollFunction()};
            
            function scrollFunction() {
              if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("strelica").style.display = "block";
              } else {
                document.getElementById("strelica").style.display = "none";
              }
            }
            
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
              $("html, body").animate({ scrollTop: 0 }, "slow");
 
             }
