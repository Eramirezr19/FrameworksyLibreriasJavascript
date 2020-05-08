$(document).ready(function(){

// el juego se carga con los dulces y corre la función inicial
  dulcesTablero();







function dulcesTablero(){
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-1").append("<img id='dulce-1' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-2").append("<img id='dulce-2' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-3").append("<img id='dulce-3' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-4").append("<img id='dulce-4' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-5").append("<img id='dulce-5' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-6").append("<img id='dulce-6' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-7").append("<img id='dulce-7' src=image/"+ numero +".png>");
  };

};

$(".btn-reinicio").on ("click",function(){
  var twoMinutes = 60 * 2,
      display = document.querySelector('#times');
  startTimer(twoMinutes, display);
});

$(".btn-reinicio").on("click", function(){
  $("img#dulce-1").remove();
  $("img#dulce-2").remove();
  $("img#dulce-3").remove();
  $("img#dulce-4").remove();
  $("img#dulce-5").remove();
  $("img#dulce-6").remove();
  $("img#dulce-7").remove();
});
$(".btn-reinicio").click(dulcesTablero);





function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}











});
