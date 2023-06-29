
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

function getYear() {
    const now = new Date().getFullYear();
    document.getElementById("year").innerHTML += now
}

function modify() {
    document.getElementById("mod").innerHTML += document.lastModified;
}