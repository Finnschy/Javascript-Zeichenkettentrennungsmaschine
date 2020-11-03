// zeichenkettentrennungsmaschine 


function cutString() {
    event.preventDefault()
    let toCutString = document.getElementById("toCutString");
    let posString = document.getElementById("posString");
    let beforeCut = document.getElementById("beforeCut");
    let beforeOutput = document.getElementById("beforeOutput");
    let afterOutput = document.getElementById("afterOutput");
    let stringSplit = toCutString.value.split(posString.value)
    let positionStringLength = posString.value.length;


    if ((toCutString.value.indexOf(posString.value) == -1) || positionStringLength <= 0){
        beforeOutput.innerHTML = "Das Zeichen konnte leider nicht gefunden werden"
        afterOutput.innerHTML = toCutString.value
    } else if (beforeCut.checked) {
        beforeOutput.innerHTML = stringSplit[0] + posString.value;
        afterOutput.innerHTML = stringSplit[1]
    } else {
        afterOutput.innerHTML = posString.value + stringSplit[1];
        beforeOutput.innerHTML = stringSplit[0]
    }
}

