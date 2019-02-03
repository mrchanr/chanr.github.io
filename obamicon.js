var image = null;

function upload() {
  //Get input from file input
  var fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  image = new SimpleImage(fileinput);
  //Get canvas
  var canvas = document.getElementById("can");
  //Draw image on canvas
  image.drawTo(canvas);
}

function makeGray() {
  //change all pixels of image to gray
  for (var pixel of image.values()) {
    var grey_val = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (grey_val > 180){
      pixel.setRed(252)
      pixel.setGreen(227)
      pixel.setBlue(166)
    }
     else if (grey_val > 120){
      pixel.setRed(112)
      pixel.setGreen(150)
      pixel.setBlue(158)
    }
     else if (grey_val > 60){
      pixel.setRed(217)
      pixel.setGreen(26)
      pixel.setBlue(33)
    }
    else{
      pixel.setRed(0)
      pixel.setGreen(51)
      pixel.setBlue(76)
    }
    
    //pixel.setRed(avg);
    //pixel.setGreen(avg);
    //pixel.setBlue(avg);
  }
  //display new image
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}
