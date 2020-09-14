'use strict'

function  myFunction() {
  
  if (document.getElementById("myVideo-b").style.display == "none") {
        document.getElementById('myVideo-b').style.display = "block";
        document.getElementById('myVideo-n').style.display = "none";
        document.getElementById("clickBt").style.background='#8c7663';
  } else {
        document.getElementById('myVideo-b').style.display = "none";
        document.getElementById('myVideo-n').style.display = "block";
        document.getElementById("clickBt").style.background='#312366';
  }
}


