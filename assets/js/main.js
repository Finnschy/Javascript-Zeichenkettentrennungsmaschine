// zeichenkettentrennungsmaschine 

let toCutString = document.getElementById("toCutString")
let posString = document.getElementById("posString")
let beforeCut = document.getElementById("beforeCut")
let afterCut = document.getElementById("afterCut")

const cutString = () => {
    event.preventDefault()
    if (beforeCut.checked) {
        console.log("Davor");
        
    } else if (afterCut.checked) {
        console.log("Danach");
    } 
}