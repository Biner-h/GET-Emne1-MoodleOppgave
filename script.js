let ShowNum = document.getElementById("numberShown");

let CurrentNumber = 1;

function GåNed(){
    CurrentNumber --;
    updateNumber();
}

function GåOpp(){
    CurrentNumber ++;
    updateNumber();
}

function updateNumber(){
    ShowNum.textContent = CurrentNumber;
}
