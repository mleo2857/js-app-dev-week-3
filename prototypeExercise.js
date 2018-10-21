var time = 0;

var gravity = 0.5;

function Particle(startX, startY){
  this.x = startX;
  this.y = startY;
  //this.velocity = {x:0,y:0};
}

Particle.prototype = {
  getVelocity: function(){return time * gravity},

  move: function(){
    //console.log(this.y);
    this.y += this.getVelocity();

    if (this.y >= 500){
      console.log('bottom');
    }
    // else {
    //   this.y += this.getVelocity();
    // }
  },
}

var particleArray = [];

for(i = 0; i < 100; i++){
  particleArray.push(new Particle(i,(Math.random()*500)));
}
//console.log(particleArray.getVelocity());
setInterval(function(){
  time++;
  particleArray.map(function(particle){
    console.log(particle.x);
  });

  particleArray.filter(function(particle){
    //console.log(particle.y)
    return particle.y < 500;
  }).map(function(particle){
    particle.move();
  })
}.bind(this), 1000);
