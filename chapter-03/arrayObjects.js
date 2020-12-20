const schools ={
    beaverton: 10,
    hillsboro: 20,
    Tigard: 30
}

const schoolObjects=Object.keys(schools).map(key=>({
 name: key,
 win: schools[key]
}))

console.log("schoolObjects,,,,,,,,,,,,,,,,,",schoolObjects)