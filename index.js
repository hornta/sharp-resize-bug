const sharp = require('sharp');

sharp('dog.jpg')

  // resize image to be 50px wide
  .resize({width: 50})

  // extract the upper quadrant of the image
  .extract({
    left: 0, 
    top: 0, 
    width: 25, 
    height: 25
  })

  // resize the image to be 1000px wide
  .resize(1000)

  // output 
  .toFile('bigDog.jpg');