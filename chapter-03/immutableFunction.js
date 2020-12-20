let movie ={
    name: "Elf",
    rating:"0"
 }
 
 
 function addratings(movie,ratings){
    return( {

         ...movie,
         rating: ratings
     })
 
 }
 
 console.log("function call...",addratings(movie,1))
 
 console.log("orginal....",movie)