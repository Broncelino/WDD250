
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
    // gridbut.addEventListener("click", () => {
    //     let group = document.querySelector("main").getElementsByTagName("div")
    //     group = Array.from(group);
    //     group.forEach(element => {
    //         element.classList.add("box");
    //         element.classList.remove("list");
    //     })
    // })
    // listbut.addEventListener("click", () => {
    //     let group = document.querySelector("main").getElementsByTagName("div")
    //     group = Array.from(group);
    //     group.forEach(element => {
    //         element.classList.add("list");
    //         element.classList.remove("box")
    //     });
    // })
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