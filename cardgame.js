const cards = document.querySelectorAll('.memory-cards');
var scorevalue=document.getElementById("score");
var newgame=document.getElementById("newgame");
var background=document.querySelectorAll(".default");
var answercard=document.querySelectorAll(".answer")

var hasFlippedCard = false;
var lockcards=false;



var cardfirst, cardsecond;
 var score=0;
var elements=[]
 cards.forEach(card => card.addEventListener('click', flipCard));
 

function flipCard()
{if(lockcards) return
    this.classList.add('flip')
if (!hasFlippedCard)
{
    hasFlippedCard=true;
    cardfirst=this;
    //console.log(hasFlippedCard ,card1) //this refer to the element I click on
    
}
else{ hasFlippedCard=false;
 cardsecond=this; 
matchcards()
 
}

//checking result 

}

function matchcards(){
    if ( cardfirst.dataset.flower===cardsecond.dataset.flower)
    {
       win()
    }
     else
    {  lose()
    }}


function win()
{    score=score+1;
     scorevalue.textContent=score
    PlaySound()

    cardfirst.removeEventListener('click', flipCard);
    cardsecond.removeEventListener('click', flipCard);
    
    if (score==9){
        Swal.fire(
            'Gongartualtions!',
            'Every plant save our planet ,Keep it green🌎🌼🌳 '
          )}
      

}
function lose(){
    lockcards=true;
    PlaySoundfail()
    setTimeout(()=>{
        cardfirst.classList.remove('flip')
        cardsecond.classList.remove('flip')
       
    lockcards=false;
    },1500)
}

 newgame.addEventListener("click", newGame)
 function newGame(){
    score=0;
    scorevalue.textContent=score;
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    

    cards.forEach(card => {
        setTimeout(()=>{
            card.classList.add('flip')},100)
      let randomPos = Math.floor(Math.random() * 18);
      card.style.order = randomPos;
      
    
    })
    cards.forEach(card => {
        setTimeout(()=>{
            card.classList.remove('flip')},1500)
      
    })


}

PlaySound = function () {
    var audio = new Audio('./success-1-6297.mp3');
    audio.loop = false;
    audio.play(); 
}
PlaySoundfail = function () {
    var audio = new Audio('./sound-effect-system-error-sound-117733.mp3');
    audio.loop = false;
    audio.play(); 
} 

