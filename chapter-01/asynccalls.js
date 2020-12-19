const fetch = require('node-fetch');
fetch("https://randomuser.me/api/?nat=US&results=1")
.then(res=> res.json())
.then(json=>json.results)
.then(console.log)
.catch(console.error)