function windchill() {
    let temp = document.getElementById("tempnum").innerHTML
    let speed = document.getElementById("speed").innerHTML
    if (temp <= 40 && speed >= 5) {
        let chill = 35.74 + (.6215*temp) - (35.75*(speed**.16)) +(.4275*temp*(speed**.16))
        document.getElementById("chill").innerHTML = ~~chill
    }
    else {
        document.getElementById("chill").innerHTML = "N/A"
    }
    
}
windchill()