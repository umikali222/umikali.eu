var money = 0
var energy = 100

var eatCost = 20
var vendingMachineCost = 60

var vendingMachines = 0

var vendingMachineProfitPerSec = 1

function refreshGame(){
    document.getElementById('money').textContent = money // update money
    document.getElementById('energy').textContent = energy // update energy
    document.getElementById('eatCost').textContent = eatCost // update eating cost
    document.getElementById('vendingMachineCost').textContent = vendingMachineCost // update vending machine cost
    if (vendingMachines != 0) {document.getElementById('vendingMachines').textContent = vendingMachines} // update amount of vending machines
    else {document.getElementById('vendingMachines').textContent = vendingMachines}// or set it to nothing
    if (energy < 1){
        document.getElementById('makeMoneyButton').setAttribute("disabled", "disabled") // disable making money
    }else{
        document.getElementById('makeMoneyButton').removeAttribute("disabled") // enable it
    }
    if (money < eatCost){
        document.getElementById('eat').setAttribute("disabled", "disabled") // enable eating
    } else{
        document.getElementById('eat').removeAttribute("disabled") // disable it
    }
    if (money >= vendingMachineCost){
        document.getElementById('automationDiv').style.display = 'block' // show automation div
        document.getElementById('vendingMachineDiv').style.display = 'block' // show vending machine buy
    }
    if (money > eatCost){
        document.getElementById('eatDiv').style.display = 'block' // show eating button and cost
        document.getElementById('actions').style.display = 'block' // show actions div 
    }
    if (money < vendingMachineCost){
        document.getElementById('vendingMachine').setAttribute("disabled", "disabled") // disable vending machine button
    }else{
        document.getElementById('vendingMachine').removeAttribute('disabled') // enable it
    }
}

function vendingMachine(){
    money -= vendingMachineCost
    vendingMachines += 1
    vendingMachineCost = Math.round(vendingMachineCost * 1.5)
    refreshGame()
}

function makeMoney(){
    money++
    energy--
    refreshGame()
}

function eat(){
    energy += 100
    money -= eatCost
    //eatCost = Math.round(eatCost * 1.5)
    refreshGame()
}

refreshGame()

function secondUpdate(){
    if (energy >= vendingMachines){
        money += vendingMachines * vendingMachineProfitPerSec
        energy -= vendingMachines
    }
    refreshGame()
}

setInterval(secondUpdate, 1000)