function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200);
  // add your drawing code here ...
  
ellipse(50,50,50)

// Body
fill(150);
ellipse(200, 300, 150, 100);

// Head
fill(150);
ellipse(200, 200, 100, 100);

// Eyes
fill(255);
ellipse(180, 180, 20, 20);
ellipse(220, 180, 20, 20);

// Nose
fill(0);
ellipse(200, 210, 10, 10);

// Mouth
noFill();
stroke(0);
strokeWeight(2);
arc(200, 220, 30, 20, 0, PI);

// Ears
fill(150);
triangle(155, 180, 143, 127, 190,150); // Left ear
triangle(246, 177, 250, 127, 200, 150); // Right ear

// Legs
fill(150);
rect(170, 300, 20, 50);
rect(210, 300, 20, 50);



  
}