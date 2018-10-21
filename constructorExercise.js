function Particle(startX, startY){
  this.x = startX;
  this.y = startY;
  //this.velocity = {x:0,y:0};

}


var particleArray = [];

for(i = 0; i < 100; i++){
  particleArray.push(new Particle(i,Math.random()*500));
}

console.log(particleArray);


const objectLiteral = {
  keyOne: 'foo',
  keyTwo: 2,
}

console.log(objectLiteral);

const constructedObject = new Object({
  keyOne: 'foo',
  keyTwo: 2,
})

console.log(constructedObject);

function normalFunc(keyOne, keyTwo){
  console.log('keyOne is ' + keyOne);
  console.log('keyTwo is ' + keyTwo);
}

normalFunc('foo', 2);

function MyClass(keyOne, keyTwo){
  this.keyOne = keyOne;
  this.keyTwo = keyTwo;
}

const classObject = new MyClass('foo', 2);

console.log(MyClass('foo', 2));
