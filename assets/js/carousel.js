var counter = 2;

setInterval(function(){
  document.getElementById('btn' + counter).click();
  counter++;
  // console.log(counter);
  if (counter == 5){
    counter = 1;
  }
}, 1000);