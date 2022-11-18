const convas = document.getElementById("canvas1");
const ctx = convas.getContext("2d");
const CONVAS_WIDTH = convas.width = 600;
const CONVAS_HEIGHT = convas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let framex = 0;
let framey = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animate(){
    ctx.clearRect(0, 0, CONVAS_WIDTH, CONVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    framex = spriteWidth * position;
    ctx.drawImage(playerImage, framex * spriteWidth, framey * spriteHeight, spriteWidth,
    spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate)
};
animate();