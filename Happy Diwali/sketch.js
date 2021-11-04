var g;
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  g = createVector(0,0.2);
}

var part = [];
function draw() {
  
  background(0);

  for(let i = 0; i < part.length; i++){
    if(part[i].life <= 0){
      part.splice(i,1);
    }
    else
    {
        part[i].update();
        // if(part[i].life < 25 && random(15) < 12)
        if(random(30) < 30 - 0.7*part[i].life)
        part[i].show(1);
        else part[i].show(0);
    }
  }

}

function Particle(x,y, life, col){
  this.pos = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.k = random(0,7)
  this.vel.x *= this.k;
  this.vel.y *= this.k;
  this.life = life;
  this.col = col;
  this.update = function(){
    this.vel.add(g);
    this.pos.add(this.vel);
    this.life--;
  }
  this.show = function(x){
    strokeWeight(6);
    stroke(col.x - x*col.x*0.5,col.y - x*col.y*0.5, col.z - x*col.z*0.5);
    point(this.pos.x,this.pos.y);
  }
}
function mousePressed(){
  
  var x = random(0,400);
  var y = random(0,100);
  var col = createVector(random(50,255),255,70);
  
  for(var i = 0; i < 1000; i++){
    part.push(new Particle(mouseX,mouseY,50,col));
  }

}
