let boxes = document.querySelectorAll('.box');
let reset = document.getElementById("reset");
let p1 = document.getElementsByClassName('p1-flag')[0]
let p2 = document.getElementsByClassName('p2-flag')[0]
let player1 =  true;
let winMsg = document.getElementsByClassName("win-msg")[0];
let playerDiv = document.querySelector("Playerdtl");
let P1Name;
let P2Name;
function formUp(){
    setTimeout(() => {
        gsap.to("#Playedtl",{
            transform:"translateY(-100%)"
        })
    }, 500);
}
let Playerform  = document.querySelector(".playerForm");
Playerform.addEventListener("submit",(e)=>{
    e.preventDefault();
    P1Name = e.target[0].value;
    P2Name = e.target[1].value;
    formUp();
})

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
let winnerPage = ()=>{
    let hei = document.querySelector(".winner-pop-con");
    gsap.to(".winner-pop-con",{
        transform:"translateY(0)",
        duration:1
    })
}
let winnerPageDown = ()=>{
    let hei = document.querySelector(".winner-pop-con");
    gsap.to(".winner-pop-con",{
        transform:"translateY(100%  )",
        duration:1
    })
}
let DisableAllBtn = ()=>{
    boxes.forEach((bx)=>{
        (bx.disabled == true)?"":bx.disabled=true;
    })
}
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
        // window.location.reload();
    })
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("Button was clicked!");
        if(player1){
            box.innerText= "O";
            player1 =false;
            document.getElementsByClassName("p1-flag")[0].style.color = 'red';
            document.getElementsByClassName("p2-flag")[0].style.color = '#00ff00';
        }
        else{
            box.innerText= "X";
            box.innerText.color = "#00ff00"
            player1 = true;
            document.getElementsByClassName("p2-flag")[0].style.color = 'red';
            document.getElementsByClassName("p1-flag")[0].style.color = '#00ff00';
        }
        box.disabled = true;
        for (let patterns of WinPatterns) {
            if (boxes[patterns[0]].innerText != ""&&boxes[patterns[0]].innerText !=""&& boxes[patterns[0]].innerText!="") {
                if (boxes[patterns[0]].innerText===boxes[patterns[1]].innerText&&boxes[patterns[1]].innerText===boxes[patterns[2]].innerText) {
                    console.log("Winner"+boxes[patterns[0]].innerText);

                    // using classlist
                    // document.getElementsByClassName("winner-pop-con")[0].classList = 'active';

                    // using height 
                    winnerPage();
                    DisableAllBtn();
                    if (boxes[patterns[0]].innerText === 'O') {
                        winMsg.innerText = `${P1Name} Wins`;
                    }
                    else{
                        winMsg.innerText = `${P2Name} Wins`;
                    }
                }
            }  
        }
    })
})
reset.addEventListener('click',()=>{
    resetbtn();
})
let PA =  document.querySelector(".playAgain");
PA.addEventListener("click",()=>{
    winnerPageDown();
    resetbtn();
})