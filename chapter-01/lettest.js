let condition = false;
if(condition){
    let var1 = "local scope";
    console.log("Local: "+var1);
}
//console.log("Global: "+var1); // Error

for(let i = 0;i<5;i++){
    console.log("For: "+i);
}

console.log("OutSide For: "+i);
