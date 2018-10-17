const superHeroes = [
  ['Batman','Bruce Wayne'],
  ['Spiderman', 'Peter Parker'],
  ['The Flash', 'Barry Allen'],
];


var secretIdentity = superHeroes.map(function(revealArray){
  return revealArray[0] + ' is ' + revealArray[1];
});

console.log(secretIdentity.join('\n'));
