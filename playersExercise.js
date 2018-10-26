var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

const playersNamedMike = players.find(function(player){
  return player.firstName === 'Mike';
});

console.log(playersNamedMike);

const runningbacks = players.filter(function(player){
  return player.position === 'RB';
});

console.log(runningbacks);

const playerLastNames = players.map(function(player){
  return player.lastName;
});

console.log(playerLastNames);

const runningbacksWithFiveTDs = players.filter(function(player){
  if (player.position === 'RB' && player.touchdowns > 5){
    return player;
  }
});

const runningbacksWithFiveTDsNames = runningbacksWithFiveTDs.map(function(player){
  return player.firstName + ' ' + player.lastName;
});

console.log(runningbacksWithFiveTDsNames);

const runningBackTouchdowns = players.reduce(function(total,player){
  if (player.position === 'RB'){
    return total + player.touchdowns;
  } else {
    return total;
  }
},0);

console.log(runningBackTouchdowns);
