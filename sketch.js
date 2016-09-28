
var counter = 0;

function setup() {
  createCanvas(500,500);
  for(var counterA = 0; counterA< 300; counterA++){
    fill(random(255), random(255), random(255), random(255));
   rect(random(width), random(height), random(width), random(height));
  }
}

function draw() {
  
 frameRate(20);
//background(255);
  
  
  for(var counterA = 2; counterA< 10; counterA++){
    fill(random(255), random(255), random(255), random(255));
   rect(random(width), random(height), random(width),random(height));
    
    
  counter = counter+1;
   ellipse(counter, 100, 30,30);
   ellipse(counter, 200, 30,30);
   ellipse(counter, 300, 30,30);
   ellipse(counter, 400, 30,30);
   if(counter >= width){
    counter = 0;
  }
  
  }
  

}
 