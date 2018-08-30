function map (array, callback) {
  var outputArray = [];
  for (var i = 0; i < array.length; i++) {
    outputArray.push(callback(array[i]));
  }
  console.log(outputArray);
}



// ## Testing Zone ##



var words = ["ground", "control", "to", "major", "tom"];


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});