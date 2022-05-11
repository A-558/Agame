function E(){
    //  var a = document.getElementById("NUM").value;
      var N = Math.random()*6
      var B = Math.floor(N)
    //  if(N==a){
      //    document.getElementById('Game').innerHTML = 'You win'
      //}
      //else {
        //  document.getElementById('Game').innerHTML = 'You Lost'
      //}
     // document.write(Math.floor(N))
     document.getElementById('Game').innerHTML = B
     document.getElementById('Game').style.color="yellow"
  
     document.getElementById('Game').style.fontSize= "100px"
      }