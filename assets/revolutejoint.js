//Developed by Cory Chang 02/04/2021
//Mr. Mills | Robotics II

function calculate() {
  //Collect information from values
  var lengthOne = parseInt(document.getElementById("lengthOne").value);
  var lengthTwo = parseInt(document.getElementById("lengthTwo").value);
  var lengthThree = parseInt(document.getElementById("lengthThree").value);
  var angleOne = parseInt(document.getElementById("angleOne").value);
  var angleTwo = parseInt(document.getElementById("angleTwo").value);
  var angleThree = parseInt(document.getElementById("angleThree").value);
  var velocityOne = parseInt(document.getElementById("velocityOne").value);
  var velocityTwo = parseInt(document.getElementById("velocityTwo").value);
  var velocityThree = parseInt(document.getElementById("velocityThree").value);
  console.log(lengthOne);
  console.log(lengthTwo);
  console.log(lengthThree);
  console.log(angleOne);
  console.log(angleTwo);
  console.log(angleThree);
  console.log(velocityOne);
  console.log(velocityTwo);
  console.log(velocityThree);

  //Calculate configuration
  var configX = lengthOne * Math.cos((angleOne) * (Math.PI / 180)) + lengthTwo * Math.cos((angleOne + angleTwo) * (Math.PI / 180)) + lengthThree * Math.cos((angleOne + angleTwo + angleThree) * (Math.PI / 180));
  configX = configX.toFixed(2);
  var configY = lengthOne * Math.sin((angleOne) * (Math.PI / 180)) + lengthTwo * Math.sin((angleOne + angleTwo) * (Math.PI / 180)) + lengthThree * Math.sin((angleOne + angleTwo + angleThree) * (Math.PI / 180));
  configY = configY.toFixed(2);
  var configTheta = ((angleOne + angleTwo + angleThree) % 360).toFixed(2);

  //Calculate velocity
  var velX = -lengthOne * velocityOne * Math.sin((angleOne) * (Math.PI / 180)) - lengthTwo * (velocityOne + velocityTwo) * (Math.sin((angleOne + angleTwo) * (Math.PI / 180))) - lengthThree * (velocityOne + velocityTwo + velocityThree) * (Math.sin((angleOne + angleTwo + angleThree) * (Math.PI / 180)));
  velX = velX.toFixed(2);
  var velY = lengthOne * velocityOne * Math.cos((angleOne) * (Math.PI / 180)) + lengthTwo * (velocityOne + velocityTwo) * (Math.cos((angleOne + angleTwo) * (Math.PI / 180))) + lengthThree * (velocityOne + velocityTwo + velocityThree) * (Math.cos((angleOne + angleTwo + angleThree) * (Math.PI / 180)));
  velY = velY.toFixed(2);
  var velTheta = (velocityOne + velocityTwo + velocityThree);
  velTheta = velTheta.toFixed(2);

  //Set values
  document.getElementById("finalConfig").innerHTML = "<b>Configuration: </b>(" + configX + " m, " + configY + " m, " + configTheta + "°)"
  document.getElementById("finalVel").innerHTML = "<b>Velocity: </b>(" + velX + " m/s, " + velY + " m/s, " + velTheta + " rad/s)"
}
