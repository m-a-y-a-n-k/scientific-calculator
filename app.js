let screen = document.querySelector("#screen");
let btns = document.querySelectorAll(".btn");

const handleBtnClick = (e) => {
  let btnText = e.target.innerText;
  if(isNaN(parseFloat(screen.value))){
    screen.value = '';
  }
  if (btnText === "x") {
    btnText = "*";
  }
  if (btnText === "=") {
    screen.value = eval(screen.value);
    return ;
  }
  if(btnText === "sin"){
    screen.value = Math.sin(screen.value);
    return ;
  }
  if(btnText === "cos"){
    screen.value = Math.cos(screen.value);
    return ;
  }
  if(btnText === "tan"){
    screen.value = Math.tan(screen.value);
    return ;
  }
  if(btnText === "e"){
    screen.value = Math.E;
    return ;
  }
  if(btnText === "π"){
    screen.value = Math.PI;
    return ;
  }
  if(btnText === "√"){
    screen.value = Math.sqrt(screen.value);
    return ;
  }
  if(btnText === "log"){
    screen.value = Math.log(screen.value);
    return ;
  }
  if(btnText === "x!"){
    let num = screen.value, result = 1;
    for(let i = 1; i <= num; i++){
        result = result * i;
    }
    screen.value = result;
    return ;
  }
  if(btnText === "x2"){
    screen.value = Math.pow(parseFloat(screen.value), 2);
    return ;
  }
  if(btnText === "CE"){
    screen.value = screen.value.substr(0, screen.value.length - 1);
    return ;
  }
  if(btnText === "AC"){
    screen.value = "";
    return ;
  }

  screen.value += btnText;
};


for (const btn of btns) {
  btn.addEventListener("click", handleBtnClick);
}
