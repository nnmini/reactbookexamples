let movie ={
   name: "Elf",
   rating:"0"
}


function addratings(movie,ratings){
     movie.rating=ratings;
     return movie
}

console.log("function call...",addratings(movie,1))

console.log("orginal....",movie)