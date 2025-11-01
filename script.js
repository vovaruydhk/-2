let dark = true;

document.getElementById('themeBtn').onclick = function() {
    if (dark){
        document.body.style.background = "orange";
        document.body.style.color = "red";
        dark = false;

    }   else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        dark = true;
    }
};
console.log("Нажатия клавиши Enter");

const player = document.getElementById("player");
    let x = 400; // позиция по X
    let y = 800; // позиция по Y
    const speed = 20; // скорость движения

    document.addEventListener("keydown", (e) => {
      if (e.key === "w" || e.key === "W") y -= speed; // вверх
      if (e.key === "s" || e.key === "S") y += speed; // вниз
      if (e.key === "a" || e.key === "A") x -= speed; // влево
      if (e.key === "d" || e.key === "D") x += speed; // вправо

         
    player.style.left = x + "px";
    player.style.top = y + "px";
});