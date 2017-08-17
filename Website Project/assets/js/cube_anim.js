/*var degs = ["90deg", "-90deg", "180deg", "-180deg", "270deg", "-270deg"];
var rots = ["rotateX", "rotateY", "rotate"];

var rnddeg = Math.floor(Math.random() * degs.length);
var rndrot = Math.floor(Math.random() * rots.length);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getClick(obj, name) {
  rotSide(name, rots, degs);

  console.log(name);
}

function rotSide(side, rot, deg) {
  $(side).css("-webkit-transform", rot+"("+deg+")");
};*/

function animate(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var back = new Image();
  back.src = 'assets/img/back.png';
  back.onload = function(){
    context.drawImage(back, centerX, centerY);
  };
}


animate();
