const cards =document.querySelectorAll(".card");

let matchCard=0;
let cardOne , cardTwo;
let disableDeck = false;

function flipcard(e){
    let clickedCard =e.target;
    if(clickedCard !==cardOne && !disableDeck){
        clickedCard.classList.add("flip")
        if(!cardOne){
            // return the cardOne value  to clickedCard
            return cardOne= clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck= true;
        let cardOneImg =cardOne.querySelector("img").src,
        cardTwoImg =cardTwo.querySelector("img").src;
        matchCards(cardOneImg,cardTwoImg);
    }
}
function matchCards(img1,img2){
    if(img1=== img2){ //Iftow cards img matched
        matchCard++; // increment matched value by 1
        //if matched value is 8 that means user has matched all the cards
        if(matchCard== 8 ){
            setTimeout(()=>{
                return shuffleCard();
            },1000);
        }

        cardOne.removeEventListener("click", flipcard);
        cardTwo.removeEventListener("click", flipcard);
        cardOne = cardTwo =""; 
        return disableDeck=false;
    }
    // if Tow card not matched
    setTimeout(()=>{
        // adding shake class ti both card after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    
    },400);
    setTimeout(()=>{
        // adding shake class ti both card after 400ms
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake","flip");
        cardOne = cardTwo =""; // setting both card value to blank
        disableDeck=false;
    },1200);

   
}
function shuffleCard(){
    matchCard=0; 
    disableDeck=false;
    cardOne=cardTwo = "";
    //creating array of 16 items and each item is repeat twice
    let arr =[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(()=> Math.random() >.5 ?1:-1);
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card .querySelector("img");
        imgTag.src =`Images/img-${arr[index]}.png`
        card.addEventListener("click", flipcard);

    });
}
shuffleCard()
// adding event click on all cards
cards.forEach(card => {
    // card.classList.add("flip");
    card.addEventListener("click", flipcard);
    
});