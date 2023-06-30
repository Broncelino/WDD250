
function getDate() {
    const datefield = document.getElementById("date");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
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