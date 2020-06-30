var database;
var drawing=[];
var currentPath=[];
function setup() {
canvas.mousePressed(startPath);
canvas.mouseReleased(endPath);
  createCanvas(800,400);
  var saveButton = select('#saveButton');
  saveButton.mousePressed(saveDrawing);
 database=firebase.database();
}
 function startPath(){
   currentPath  =  [];

 }

 function endPath(){
  drawing.push(currentPath);
 }
function draw() {
  background(0);  
  drawSprites();
 if(mouseIsPressed){
   var point={
     x:mouseX,
     y:mouseY
   }
   currentPath.push(point);
  }   

stroke(255);
strokeWeight=4;
noFill();
 for(var i =0 ; i<drawing.length;i++){
var path =[1];
beginShape();
 for(var j =0 ; j<drawing.length;j++){
 {
   vertex(drawing[j].x,drawing[j].y)
 }
 endShape();
}
}
}