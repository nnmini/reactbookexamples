const rivers = {
    mountains: ["Mountwood","Reel","Silver Falls"],
    print: function(delay=1000){
        setTimeout(()=>{
            
            console.log(this.mountains.join(","))

        },delay)
    }
}

rivers.print()