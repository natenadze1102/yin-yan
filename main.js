'use strict'

function  myFunction () {
  
  if(document.getElementById("myVideo-b").style.display == "none") {
    document.getElementById('myVideo-b').style.display = "block";
    document.getElementById('myVideo-n').style.display = "none";
  } else {
    document.getElementById('myVideo-b').style.display = "none";
    document.getElementById('myVideo-n').style.display = "block";
  }
}

console.log(document.getElementById("myVideo-b").style.display == "none")