


const hello = function(){
    console.log("Hello Function no argumenets")
}

const fullName = function(firstname, lastname){
    console.log(`${firstname} ${lastname}`)
}

const fullNamedefault = function(firstname="Hello", lastname="World"){
    console.log(`${firstname} ${lastname}`)
}

const returnObject = (firstname,lastname)=>
     ({
        firstname: firstname,
        lastname: lastname
    
    })
hello()
fullName("Joe","Smith")
fullNamedefault();

console.log("returnObject....",returnObject("hello","world"))