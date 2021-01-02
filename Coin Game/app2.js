let popped = 0;




var seconds = document.getElementById("timer").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countdown);
      let gallery = document.querySelector('#balloon-gallery');
      gallery.innerHTML = '';
      let failMessage = document.querySelector('#fail');
      failMessage.style.display = 'block';
    }
}, 1000);


document.addEventListener('mouseover', function(e){

    if (e.target.className === "balloon"){

                e.target.style.background = "#ededed";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){

    })
};

function checkAllPopped(){
    if (popped === 49){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
