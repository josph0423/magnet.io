// 找出網頁中的 canvas 元素
var canvas = document.getElementById("sky");
// 取得 2D繪圖用的物件
var ctx = canvas.getContext("2d");


var planeImg = document.createElement("img");
planeImg.src = "images/plane.png";


var plane = {
  x: 0,
  y: 0,
  angle: 0
}

function draw() {
  updateWidthHeight();
  planeFun();


  ctx.fillStyle="#8becff";
  ctx.fillRect(0,0,sky.width,sky.height);



  ctx.save();
  ctx.translate(plane.x+planeImg.width/2,plane.y+planeImg.height/2);
  ctx.rotate(1*(Math.PI/180));
  ctx.drawImage(planeImg,planeImg.width/-2,planeImg.height/-2,100,100);
  ctx.restore();



}


var FPS = 30;
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
  plane.x = sky.width / 2;
  plane.y = sky.height / 2;


  plane.x -= planeImg.width/2;
  plane.y -= planeImg.height/2;
}



var mouse = {
  x: 0,
  y: 0
}
$("canvas").mousemove(function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});
