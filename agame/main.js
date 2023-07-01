var money = 0
var energy = 100

var eatCost = 20
var vendingMachineCost = 60

var vendingMachines = 0

var vendingMachineProfitPerSec = 1

var marketing2upgrade = true
var marketing3upgrade = false
var gamblingUpgrade = false

var gamblingEngine = false

var updatesBeforeGambleMesssageReset = 0

function refreshGame(){
    document.getElementById('money').textContent = money // update money
    document.getElementById('energy').textContent = energy // update energy
    document.getElementById('eatCost').textContent = eatCost // update eating cost
    document.getElementById('vendingMachineCost').textContent = vendingMachineCost // update vending machine cost
    if (updatesBeforeGambleMesssageReset == 0){document.getElementById('gambleMessage').textContent = ''}
    else{updatesBeforeGambleMesssageReset--}
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
    if (money >= 100){
        document.getElementById('upgrades').style.display = 'block'
    }
    if (document.getElementById('betAmount').value <= money){
        document.getElementById('gambleButton').removeAttribute('disabled')
    }else{
        document.getElementById('gambleButton').setAttribute('disabled', 'disabled')
    }
    var x = document.getElementById('betAmount').value
    if (Math.abs(x) != x){
        document.getElementById('gambleButton').setAttribute('disabled', 'disabled')
    }
    if (gamblingEngine){
        document.getElementById('gamblingDiv').style.display = 'block'
    }else{
        document.getElementById('gamblingDiv').style.display = 'none'
    }


    // UPGRADES


    if (marketing2upgrade){
        document.getElementById('marketing2').style.display = 'block'
        document.getElementById('marketing2').setAttribute('disabled', 'disabled') // disable marketing 2 upgrade
        if (money >= 100){
            document.getElementById('marketing2').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('marketing2').style.display = 'none'
    }

    if (marketing3upgrade){
        document.getElementById('marketing3').style.display = 'block'
        document.getElementById('marketing3').setAttribute('disabled', 'disabled') // disable marketing 3 upgrade
        if (money >= 500){
            document.getElementById('marketing3').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('marketing3').style.display = 'none'
    }

    if (gamblingUpgrade){
        document.getElementById('gambling').style.display = 'block'
        document.getElementById('gambling').setAttribute('disabled', 'disabled') // disable marketing 3 upgrade
        if (money >= 2500){
            document.getElementById('gambling').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('gambling').style.display = 'none'
    }
}

function upgrade(identifier){
    switch (identifier){
        case 1:
            money -= 100
            vendingMachineProfitPerSec *= 5
            marketing2upgrade = false
            marketing3upgrade = true
            gamblingUpgrade = true
            break
        case 2:
            money -= 500
            vendingMachineProfitPerSec *= 5
            marketing3upgrade = false
            break
        case 3:
            money -= 2500
            gamblingUpgrade = false
            gamblingEngine = true
            break
    }
    refreshGame()
}

function gamble(){
    money -= Math.abs(document.getElementById('betAmount').value)
    if (Math.floor(Math.random() * 24) + 1 == document.getElementById('bet').value){
        money += document.getElementById('betAmount').value * 24
        updatesBeforeGambleMesssageReset = 10
        document.getElementById('gambleMessage').textContent = 'Your Bet Was Right!!! you made ' + (document.getElementById('betAmount').value) * 23 + '$'
    }
    refreshGame()
}

function vendingMachine(){
    money -= vendingMachineCost
    vendingMachines += 1
    vendingMachineCost = Math.round(vendingMachineCost * 2)
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