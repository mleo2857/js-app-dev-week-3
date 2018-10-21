function Person(){
  this.brain = true;
};

function Student(){
  this.computer = true;
};

function Graduate(){
  this.skillz = 'Mad';
}

var p = Object.create(new Person);
Student.prototype = p;

var s = Object.create(p);

var g = Object.create(new s);

console.log(g.skillz, g.computer, g.brain);
