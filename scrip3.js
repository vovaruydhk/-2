console.log("Нажатия клавиши Enter");
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Нажатия клавиши Enter");
    }
});
const playet = document.getElementById("player")
    let x = 100; //позиция по X
    let y = 100; //позиция по Y
    const speed = 20; //скорость движения

    document.addEventListener("keydown", (e) => {
        if ( e.key === "w" || e.key === "W") y -= speed; //вверх
        if ( e.key === "s" || e.key === "S") y += speed; //вниз
        if ( e.key === "a" || e.key === "A") x -= speed; //влево
        if ( e.key === "d" || e.key === "D") x += speed; //вправо

        player.dtyle.left = x + "px"
        player.dtyle.top = y + "px"
    })