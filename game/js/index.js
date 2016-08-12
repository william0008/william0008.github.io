var lives = 10;
var score = 0;
// alert(document.getElementById("body").style.width);
document.getElementById("zombie0").style.display = "none";
document.getElementById("zombie1").style.display = "none";
document.getElementById("zombie2").style.display = "none";
document.getElementById("gun").style.display = "none";
document.getElementById("playButton").onclick = function () {
  document.getElementById("body").style.cursor = "url('http://image.flaticon.com/icons/png/128/19/19914.png'), auto";
  document.getElementById("playButton").style.display = "none";
  document.getElementById("gameTitle").style.display = "none";
  document.getElementById("rulesTitle").style.display = "none";
  document.getElementById("rules").style.display = "none";
  // document.getElementById("body").style.backgroundImage = "url(\"http://digitalblasphemy.com/graphics/previews/portals1_preview.jpg\")";
  document.getElementById("zombie0").style.display = "inline-block";
  document.getElementById("zombie1").style.display = "inline-block";
  document.getElementById("zombie2").style.display = "inline-block";
  document.getElementById("gun").style.display = "inline-block";
  var lifeInterval = setInterval(function () {
    // Take away one life every five seconds
    lives = lives - 1;
    document.getElementById("lives").innerHTML = lives;
    // lives -= 1;
    // lives--;
    if (lives <= 0) {
      clearInterval(lifeInterval);
      for (var i = 0; i < 3; i++) {
        document.getElementById("zombie" + i).onclick = function () {};
      }
    }
  }, 5000);
  var zombie0Interval = setInterval(function () {
    // Code here
  }, 1000);
}

for (var z=0; z<3;z++) {
  $("#zombie"+z).click(function() {
    // Increase score by 500
    // score = score + 500;
    score += 500;
    document.getElementById("score").innerHTML = score;
  var count = 0;
  while (count<4) {
  var ranNum = (0.5-Math.random())*1000;
  $(this).animate({left: "+=" + ranNum + "px"});
  count +=1;
}
  });
}

/*for (var i = 0; i < 3; i++) {
  document.getElementById("zombie" + i).onclick = function () {
    // Increase score by 500
    // score = score + 500;
    score += 500;
    document.getElementById("score").innerHTML = score;
    
    
    document.getElementById("zombie" + i).style.marginTop = (1000 * Math.random()) + "px";
    document.getElementById("zombie" + i).style.marginLeft = (1000 * Math.random()) + "px";
  }
*/

document.onmousemove = function (event) {
  document.getElementById("gun").style.left = event.clientX + "px";
  document.getElementById("gun").style.top = event.clientY + "px";
}