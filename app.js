let game_board = document.querySelector("#game-board");
let cards_array = [
                    {name:"cat",icon:'<i class="fa-solid fa-cat"></i>'},
                    {name:"dog",icon:'<i class="fa-solid fa-dog"></i>'},
                    {name:"spider",icon:'<i class="fa-solid fa-spider"></i>'},
                    {name:"hippo",icon:'<i class="fa-solid fa-hippo"></i>'},
                    {name:"dragon",icon:'<i class="fa-solid fa-dragon"></i>'},
                    {name:"paw",icon:'<i class="fa-solid fa-paw"></i>'},
                    {name:"cat",icon:'<i class="fa-solid fa-cat"></i>'},
                    {name:"dog",icon:'<i class="fa-solid fa-dog"></i>'},
                    {name:"spider",icon:'<i class="fa-solid fa-spider"></i>'},
                    {name:"hippo",icon:'<i class="fa-solid fa-hippo"></i>'},
                    {name:"dragon",icon:'<i class="fa-solid fa-dragon"></i>'},
                    {name:"paw",icon:'<i class="fa-solid fa-paw"></i>'}
] ;

let flipped_array = [];
let chance = 5;
let win = 0;

shuffle_card();




function shuffle_card(){
    for(let i=cards_array.length-1;i>=0;i--){
        let rand_index = Math.floor(Math.random()*i+1);

        [cards_array[i],cards_array[rand_index]]=[cards_array[rand_index],cards_array[i]];
    }

    

}


diplay_cards();








function diplay_cards(){
    cards_array.forEach((obj,index)=>{
        let card = document.createElement('div');
        card.setAttribute("id",index);

        card.classList.add('card-back')
        card.classList.add('active')


        card.addEventListener("click",card_flip)

        game_board.appendChild(card)

        
    })
}
function card_flip(){
    if(flipped_array.length<2 && this.classList.contains("active")){
        let card_index = this.getAttribute("id")
        this.classList.add('flip')
        this.innerHTML = cards_array[card_index].icon
        this.classList.remove("card-back");
        this.classList.remove("active");
        flipped_array.push(this);
        console.log(flipped_array);
        setTimeout(checkmatch,500)
    }
    
    
}


function checkmatch(){
    if(flipped_array.length==2){
        card1_id = flipped_array[0].getAttribute('id')
        card2_id = flipped_array[1].getAttribute('id')
        
        if(cards_array[card1_id].name == cards_array[card2_id].name){
            flipped_array[0].innerHTML = ""
            flipped_array[1].innerHTML = ""
            flipped_array[0].style.border = "none";
            flipped_array[1].style.border = "none"
             
            win++;

            console.log(win);
            

        }
        else{
            maintaine_chance()
             flipped_array[0].innerHTML = ""
            flipped_array[1].innerHTML = ""
            flipped_array[1].classList.add("card-back")
            flipped_array[0].classList.add("card-back")
            flipped_array[1].classList.add("active")
            flipped_array[0].classList.add("active")
            flipped_array[1].classList.remove("flip")
            flipped_array[0].classList.remove("flip")
        }
        flipped_array = []
        checkGame_over();
    }


}


function maintaine_chance(){
    chance--;
    document.getElementById('chance').innerHTML = chance
}


function checkGame_over(){
    if(chance<=0){
        game_board.innerHTML = ''
        game_board.classList.remove("game-board1");
        game_board.classList.add("game-board2");

        let word = document.createElement("h1")
        word.innerHTML = "GameOver Press f5 to Restart";

        game_board.appendChild(word)
    }

    if(win==6){

        game_board.innerHTML = ''
        game_board.classList.remove("game-board1");
        game_board.classList.add("game-board2");

        let word = document.createElement("h1")
        let word1 = document.createElement("h1")

        word1.innerHTML= "game won"
        word.innerHTML = "Press f5 to next game";
        game_board.appendChild(word1)
        game_board.appendChild(word)




    }
}
console.log(cards_array);
