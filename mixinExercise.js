const prompt = require('prompt');

var userProfile = {
  name: 'Mike',
  address: '1172 Burnham Dr',
  city: 'Columbus',
  state: 'Ohio',
  zipcode: '43228',
  avatar: 'mleo',
}

function performUpdate(object, key, value){
  var newProfileValues = {};
  newProfileValues[key] = value;
  var updatedProfile = Object.assign(object,newProfileValues);
  return updatedProfile;
}

var newProfile = performUpdate(userProfile,'age','30');
console.log(newProfile);

function updateProfile(object){
  prompt.start();

  prompt.get(['fieldToUpdate', 'value'], function(err, answers){
    console.log(answers);
    var updatedProfile = performUpdate(object, answers.fieldToUpdate, answers.value);
    console.log(updatedProfile);
  })

}

updateProfile(userProfile);
