var player;

function preload()  {
 // Here we add images
}

function setup() {
    //This runs once
    createCanvas(400,400);
    
    player = createSprite(200,200,10,10); 
}

function draw() {
    //This runs again and again
drawSprite();
}