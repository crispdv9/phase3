

$(document).ready(function() {

  var video1 = document.getElementById("video1");
  var video2 = document.getElementById("video2");
  var video3 = document.getElementById("video3");
  var video4 = document.getElementById("video4");


    var cont1 = document.getElementById("videoContainer1");
    var cont2 = document.getElementById("videoContainer2");
    var cont3 = document.getElementById("videoContainer3");
    var cont4 = document.getElementById("videoContainer4");

  $( "#myVideo4" ).click(function() {
    video4.style.display = "block";
      video4.play();
  });

  video4.onended = function(e) {
      window.location.href = "../index.html";

  }

  video1.onended = function(e) {
    $("#preguntauno").show();
    $( "#yes1" ).click(function() {
      cont1.style.display = "none";
      cont2.style.display = "block";
      video2.play();

      $( "#preguntauno" ).hide();
    });
    $( "#no1" ).click(function() {
      window.location.href = "no.html";
    });
  }

  video2.onended = function(e) {
    $("#preguntados").show();
    $( "#yes2" ).click(function() {
      cont2.style.display = "none";
      cont3.style.display = "block";
      video3.play();

      $( "#preguntados" ).hide();
    });
    $( "#no2" ).click(function() {
      window.location.href = "no.html";
    });
  }



    video3.onended = function(e) {
      $("#preguntatres").show();
      $( "#yes3" ).click(function() {

            window.location.href = "call.html";
        $( "#preguntatres" ).hide();
      });
      $( "#no3" ).click(function() {
        window.location.href = "no.html";
      });
    }


//video2

//vdeo3

//video4

//video5

//video6




});
