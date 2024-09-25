let button;

button = document.getElementById("button");

button.addEventListener("click", 
    function() {
        // console.log("Working");
        fetch("banned_books.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data.title);
            let booksArray = data.results;
            let randomNumber = Math.floor(Math.random()*booksArray.length);
    
            let nameElement = document.getElementById('book_name');
            nameElement = booksArray[randomNumber].title;
        })
       
    })