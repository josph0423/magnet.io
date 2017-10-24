// 找出網頁中的 canvas 元素
var canvas = document.getElementById("sky");
// 取得 2D繪圖用的物件
var ctx = canvas.getContext("2d");


var planeImg = document.createElement("img");
planeImg.src = "images/plane.png";


var plane = {
  x: 0,
  y: 0,
  displayX:0,
  displayY:0,
  angle: 0,
  speed:150
}

function draw() {
  updateWidthHeight();
  planeFun();


  ctx.fillStyle="#8becff";
  ctx.fillRect(0,0,sky.width,sky.height);



  ctx.save();
  ctx.translate(plane.displayX,plane.displayY);
  ctx.rotate(plane.angle*(Math.PI/180));
  ctx.drawImage(planeImg,planeImg.width/-2,planeImg.height/-2,planeImg.width,planeImg.height);
  ctx.restore();



}


var FPS = 100;
setInterval(draw,1000/FPS);



function updateWidthHeight() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  if (w != width) {
    sky.width = w;
  }
  if (h != height) {
    sky.height = h;
  }
  var width = sky.widthl;
  var height = sky.height;
}



function planeFun() {
  plane.displayX = sky.width / 2;
  plane.displayY = sky.height / 2;


  if (keyboard=="laft") {
    plane.angle += plane.speed/FPS*-1;
  }else if (keyboard=="right") {
    plane.angle += plane.speed/FPS*1;
  }
}


var keyboard = null;
$(document).ready(function() {
  $(window).keydown(function(event) {
    if (event.keyCode==37&&keyboard!="laft") {
      keyboard = "laft";
    }
    if (event.keyCode==39&&keyboard!="right") {
      keyboard = "right";
    }
  });
  $(window).keyup(function(event) {
    if (event.keyCode==37&&keyboard=="laft") {
      keyboard = null;
    }else if (event.keyCode==39&&keyboard=="right") {
      keyboard = null;
    }
  });
});
