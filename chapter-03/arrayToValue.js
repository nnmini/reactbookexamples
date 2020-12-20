const ages = [10,20,50,40]

const maxValue=ages.reduce((max,age)=>{
    if(age>max) return age;
    else return max;

},0);

console.log("maxValue.....",maxValue)