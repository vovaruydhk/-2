//input
function checkName() {
    let name = document.getElementById("name").Value;
    let surname = document.getElementById("surname").value;
    if (name ==="") {
        alert("Ведите свое имя!");
     } else {
        alert("Привет, " + name + ',' +surname+'!');
     }
    }
    console.log("Нажатия клавиши Enter");
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Нажатия клавиши Enter");
    }
});
