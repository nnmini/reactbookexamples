const colors = ["red","red","Blue","Blue"];

const uniqueColors=colors.reduce((uniqueColor,color)=> (
    uniqueColor.indexOf(color)>-1?uniqueColor:[...uniqueColor,color]
),[])




console.log("uniqueColors..........",uniqueColors)