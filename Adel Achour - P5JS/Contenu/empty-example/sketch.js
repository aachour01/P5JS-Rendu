var bg;
var y = 0;
var img = [];
var bg, esd;



function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('music.mp3');
}




function setup() {
// Load the image
  bg = loadImage("fond.jpg");
createCanvas(960, 640);

img[0]=loadImage("1.jpg");
img[1]=loadImage("2.jpg");
img[2]=loadImage("3.jpg");
img[3]=loadImage("4.jpg");
img[4]=loadImage("5.jpg");
img[5]=loadImage("6.jpg");
img[7]=loadImage("8.jpg");
img[8]=loadImage("9.jpg");
img[9]=loadImage("10.jpg");
img[10]=loadImage("11.jpg");
img[11]=loadImage("12.jpg");
img[12]=loadImage("13.jpg");
img[14]=loadImage("15.jpg");
img[15]=loadImage("16.jpg");
img[16]=loadImage("17.jpg");
img[17]=loadImage("18.jpg");
img[18]=loadImage("19.jpg");
img[19]=loadImage("20.jpg");


esd = loadImage("souris.png");

noCursor();

mySound.setVolume(0.1);
mySound.play();

}




function draw() {

  background(bg);

      stroke(226, 204, 0);
      line(0, y, width, y);
      y++;
      if (y > height) {
        y = 0;
      }

      image(img[0], 30, 165, 100,100);
    image(img[1], 190, 165, 100,100);
    image(img[2], 350, 165, 100,100);
    image(img[3], 510, 165, 100,100);
    image(img[4], 670, 165, 100,100);
    image(img[5], 830, 165, 100,100);
    image(img[7], 30, 325, 100,100);
    image(img[8], 190, 325, 100,100);
    image(img[9], 350, 325, 100,100);
    image(img[10], 510, 325, 100,100);
    image(img[11], 670, 325, 100,100);
    image(img[12], 830, 325, 100,100);
    image(img[14], 30, 485, 100,100);
    image(img[15], 190, 485, 100,100);
    image(img[16], 350, 485, 100,100);
    image(img[17], 510, 485, 100,100);
    image(img[18], 670, 485, 100,100);
    image(img[19], 830, 485, 100,100);


  image(esd, mouseX, mouseY);

}
