document.body.onkeyup = function(e) {
    if(e.code == "Space"){
      document.body.classList.toggle
      ("dark");

      var messages = new Array();
      messages[0] = "Drink lots of water!"
      messages[1] = "Eat healthy food!"
      messages[2] = "Get lots of sleep!"
      messages[3] = "You can do this!"
      messages[4] = "Don't forget to keep active!"
      
      var message = messages[Math.floor(Math.random()*messages.length)];
    }
  }