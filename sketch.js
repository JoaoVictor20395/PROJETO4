let Imagem;
let Musica;
function setup() {
  createCanvas(1000, 800);
  palavra=empada();
  musica.loop();
}
function preload(){
  imagem=loadImage("imagem.jfif");
  musica=loadSound("Musica.mp3");
}

function draw() {
  background("gray");
  image(imagem,0,0,1000,800);
  cachaça();
  coxinha();
  empada();
}
  
  function cachaça(){
    let minimo=0;
    let maximo=width;
    let seguir=map(mouseX,0,width,1 ,palavra.length);
    let inicio=palavra.substring(0,seguir);
    text(inicio,500,400);
  
}
function coxinha(){
   fill("lightblue");
  textSize(30);
  textAlign(CENTER,CENTER);
}
function empada(){
  let palavra=["hambúrguer","tata é foda","vo nada","chico bento no shopping"];
  return random(palavra);
}