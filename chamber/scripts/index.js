
function getDate() {
    const datefield = document.getElementById("date");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
    datefield.innerHTML = fulldate
}
getDate()
function getYear() {
    const now = new Date().getFullYear();
    document.getElementById("year").innerHTML += now
}
getYear()
function modify() {
    document.getElementById("mod").innerHTML += document.lastModified;
}
modify()

function toggleMenu() {
    document.getElementById('primarynav').classList.toggle('open');
    
}
let x;
x = document.getElementById("hambutton")
x.addEventListener("click", () => {
    toggleMenu()
})

function banner() {
    const day = new Date().getDay();
    if (day == 1 || day == 2) {
        document.getElementById('banner').classList.toggle('open');
    }
}
banner()

function formtime() {
    let x = document.getElementById('formtime')
    if (x != 'undefined' && x != null) {
        time = new Date()
        console.log(time)
        x.innerHTML = time
    }
}
formtime()
let gridbut = document.getElementById('grid')
let listbut = document.getElementById('list')
if (gridbut != 'undefined' && gridbut != null){
    gridbut.addEventListener("click", () => {
        let element = document.querySelector("main")
            element.classList.add("grid");
            element.classList.remove("list");
            })
        listbut.addEventListener("click", () => {
            let element = document.querySelector("main")
                element.classList.add("list");
                element.classList.remove("grid");
                })
        
}

let weat = document.getElementById("weather")
if (weat != 'undefined' && weat != null){
    let y = "https://api.openweathermap.org/data/2.5/weather?lat={36.269539}&lon={-95.854713}&appid={4c6f63225122693219492986505e64b4}"
    tem = y.main.temp * (9/5) -459.67
    speed = y.wind.speed
    desc = y.weather.description
    icon = y.weather.icon
    document.getElementById('tempnum').innerHTML = ~~temp
    document.getElementById('speed').innerHTML = ~~speed
    document.getElementById('desc').innerHTML = desc
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    // console.log(y)
}