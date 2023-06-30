var money = 0
var energy = 1000

function refreshGame(){
    document.getElementById('money').textContent = 'money : ' + money + '$'
    document.getElementById('energy').textContent = 'energy : ' + energy
    if (energy < 1){
        document.getElementById('makeMoneyButton').setAttribute("disabled", "disabled");
    }else{
        document.getElementById('makeMoneyButton').removeAttribute("disabled");
    }
    if (money < 20){
        document.getElementById('eat').setAttribute("disabled", "disabled");
    } else{
        document.getElementById('eat').removeAttribute("disabled");
    }
}

function makeMoney(){
    money++
    energy--
    refreshGame()
}

function eat(){
    energy += 1000
    money -= 20
    refreshGame()
}

refreshGame()