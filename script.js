let boxes = document.querySelectorAll('.box');
let reset = document.getElementById("reset");
let p1 = document.getElementsByClassName('p1-flag')[0]
let p2 = document.getElementsByClassName('p2-flag')[0]
let player1 =  true;
let winMsg = document.getElementsByClassName("win-msg")[0];
let  resetbtn = ()=>{
    boxes.forEach((box)=>{
        for (let patterns of WinPatterns) {
            boxes[patterns[0]].innerText = "";
            boxes[patterns[1]].innerText = "";
            boxes[patterns[2]].innerText = "";
        }
        // document.getElementsByClassName("winner-pop-con").style = 'height:0px';
        box.disabled = false;   
        console.log("clicked");
        window.location.reload();
    })
}
const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("Button was clicked!");
        if(player1){
            box.innerText= "O";
            player1 =false;
            document.getElementsByClassName("p1-flag")[0].style.color = 'red';
            document.getElementsByClassName("p2-flag")[0].style.color = 'green';
        }
        else{
            box.innerText= "X";
            box.innerText.color = "green"
            player1 = true;
            document.getElementsByClassName("p2-flag")[0].style.color = 'red';
            document.getElementsByClassName("p1-flag")[0].style.color = 'green';
        }
        box.disabled = true;
        for (let patterns of WinPatterns) {
            if (boxes[patterns[0]].innerText != ""&&boxes[patterns[0]].innerText !=""&& boxes[patterns[0]].innerText!="") {
                if (boxes[patterns[0]].innerText===boxes[patterns[1]].innerText&&boxes[patterns[1]].innerText===boxes[patterns[2]].innerText) {
                    console.log("Winner"+boxes[patterns[0]].innerText);

                    // using classlist
                    // document.getElementsByClassName("winner-pop-con")[0].classList = 'active';

                    // using height 
                    document.getElementsByClassName("winner-pop-con")[0].style = 'height:120px';
                    if (boxes[patterns[0]].innerText === 'O') {
                        winMsg.innerText = "Player 1 Wins";
                    }
                    else{
                        winMsg.innerText = "Player 2 Wins";
                    }
                }
            }  
        }
    })
})
reset.addEventListener('click',()=>{
    resetbtn();
})