// As a space enthusiast, you eagerly send a message out to the galaxy. 
// The only response you receive is: “Quiet, they can hear you.”

let button;

button = document.getElementById("button");

button.addEventListener("click", 
    function() {
        document.body.style.background = "#000000";
        // alert ("do not ansWEr...i repeAt...do not answeR...thEy Can hear yOu...Must not engage...I repeat...must Not enGage");
        setTimeout(function() {
            alert("do not ansWEr...i repeAt...do not answeR...thEy Can hear yOu...Must not engage...I repeat...must Not enGage");
          }, 500)
    }
)
