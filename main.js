// V 0.3.10

var money = 0
var energy = 100

var vendingMachineCost = 60
var cornerStoreCost = 2000

var vendingMachines = 0
var cornerStores = 0

var vendingMachineProfitPerSec = 1
var cornerStoreProfitPerSec = 25

// upgrades
var gamblingUpgrade = false
var cornerStoreUpgrade = false
var sellEverythingUpgrade = false

// marketing for vending machines
var marketing2upgrade = true
var marketing3upgrade = false
var marketing4upgrade = false
var marketing5upgrade = false

// marketing for corner stores
var storeMarketing2upgrade = false
var storeMarketing3upgrade = false
var storeMarketing4upgrade = false
var storeMarketing5upgrade = false

var gamblingEngine = false
var cornerStoreUpgradeBought = false

var updatesBeforeGambleMesssageReset = 0

var secondCompany = false


function refreshGame(){
    document.getElementById('money').textContent = money // update money

    if (!secondCompany){
        document.getElementById('energy').textContent = energy // update energy
        document.getElementById('vendingMachineCost').textContent = vendingMachineCost // update vending machine cost
        document.getElementById('cornerStoreCost').textContent = cornerStoreCost // update corner store cost
        
        if (vendingMachines != 0) {document.getElementById('vendingMachines').textContent = vendingMachines} // update amount of vending machines
        else {document.getElementById('vendingMachines').textContent = ''}// or set it to nothing
        if (cornerStores != 0) {document.getElementById('cornerStores').textContent = cornerStores} // update amount of corner stores
        else {document.getElementById('cornerStores').textContent = ''}// or set it to nothing
        if (energy < 1){
            document.getElementById('makeMoneyButton').setAttribute("disabled", "disabled") // disable making money
        }else{
            document.getElementById('makeMoneyButton').removeAttribute("disabled") // enable it
        }
        if (money <= 20){
            document.getElementById('eat').setAttribute("disabled", "disabled") // enable eating
        } else{
            document.getElementById('eat').removeAttribute("disabled") // disable it
        }
        if (money >= vendingMachineCost){
            document.getElementById('automationDiv').style.display = 'block' // show automation div
            document.getElementById('vendingMachineDiv').style.display = 'block' // show vending machine buy
        }
        if (money > 20){
            document.getElementById('eatDiv').style.display = 'block' // show eating button and cost
            document.getElementById('actions').style.display = 'block' // show actions div 
        }
        if (money < vendingMachineCost){
            document.getElementById('vendingMachine').setAttribute("disabled", "disabled") // disable vending machine button
        }else{
            document.getElementById('vendingMachine').removeAttribute('disabled') // enable it
        }
        if (money >= 100){
            document.getElementById('upgrades').style.display = 'block' // show upgrades
        }
        
        if (cornerStoreUpgradeBought){
            document.getElementById('cornerStoreDiv').style.display = 'block' // show the corner store div
        }else{
            document.getElementById('cornerStoreDiv').style.display = 'none' // hide it
        }
        if (money < cornerStoreCost){
            document.getElementById('cornerStore').setAttribute("disabled", "disabled") // disable corner store button
        }else{
            document.getElementById('cornerStore').removeAttribute('disabled') // enable it
        }

        if (cornerStores >= 5){
            sellEverythingUpgrade = true // enable the sell everything upgrade if you got at least 5 corner stores
        }

    }else{
        document.getElementById('cornerStoreDiv').style.display = 'none'

        document.getElementById('eatDiv').style.display = 'none' // hide eating button and cost
        document.getElementById('actions').style.display = 'none' // hide actions div (might remove this for obvious reasons)

        document.getElementById('automationDiv').style.display = 'none' // hide automation div
        document.getElementById('vendingMachineDiv').style.display = 'none' // hide vending machine div

        document.getElementById('statsDiv').style.display = 'none'

        vendingMachines = 0
        cornerStores = 0
    }


    // GAMBLING 

    if (updatesBeforeGambleMesssageReset == 0){document.getElementById('gambleMessage').textContent = ''}
    else{updatesBeforeGambleMesssageReset--}

    if (document.getElementById('betAmount').value <= money){ // if the bet amount not is too high
        document.getElementById('gambleButton').removeAttribute('disabled') // turn on the gamble button
    }else{
        document.getElementById('gambleButton').setAttribute('disabled', 'disabled') // else turn it off
    }
    
    if (gamblingEngine){
        document.getElementById('gamblingDiv').style.display = 'block' // turn on the gambling part

        var x = document.getElementById('betAmount').value // get the bet amount

        if (Math.abs(x) != x){
            document.getElementById('gambleButton').setAttribute('disabled', 'disabled') // disable the gambling button
        }
    }else{
        document.getElementById('gamblingDiv').style.display = 'none' // turn off the gambling div
    }


    // UPGRADES


    if (vendingMachines >= 10 & !cornerStoreUpgradeBought){
        cornerStoreUpgrade = true
    }

    if (gamblingUpgrade){
        document.getElementById('gambling').style.display = 'block'
        document.getElementById('gambling').setAttribute('disabled', 'disabled') // disable gambling upgrade
        if (money >= 2500){
            document.getElementById('gambling').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('gambling').style.display = 'none'
    }

    if (cornerStoreUpgrade){
        document.getElementById('cornerStoreUpgrade').style.display = 'block'
        document.getElementById('cornerStoreUpgrade').setAttribute('disabled', 'disabled') // disable corner store upgrade
        if (money >= 1000){
            document.getElementById('cornerStoreUpgrade').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('cornerStoreUpgrade').style.display = 'none'
    }

    if (sellEverythingUpgrade){
        document.getElementById('sellEverything').style.display = 'block'
        document.getElementById('sellEverything').setAttribute('disabled', 'disabled') // disable corner store upgrade
        if (money >= 1000000){
            document.getElementById('sellEverything').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('sellEverything').style.display = 'none'
    }

    // MARKETING UPGRADES FOR VENDING MACHINES

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

    if (marketing4upgrade){
        document.getElementById('marketing4').style.display = 'block'
        document.getElementById('marketing4').setAttribute('disabled', 'disabled') // disable marketing 4 upgrade
        if (money >= 2000){
            document.getElementById('marketing4').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('marketing4').style.display = 'none'
    }

    if (marketing5upgrade){
        document.getElementById('marketing5').style.display = 'block'
        document.getElementById('marketing5').setAttribute('disabled', 'disabled') // disable marketing 5 upgrade
        if (money >= 50000){
            document.getElementById('marketing5').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('marketing5').style.display = 'none'
    }

    // MARKETING UPGRADES FOR CORENR STORES

    if (storeMarketing2upgrade){
        document.getElementById('storeMarketing2').style.display = 'block'
        document.getElementById('storeMarketing2').setAttribute('disabled', 'disabled') // disable store marketing 2 upgrade
        if (money >= 5000){
            document.getElementById('storeMarketing2').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing2').style.display = 'none'
    }

    if (storeMarketing3upgrade){
        document.getElementById('storeMarketing3').style.display = 'block'
        document.getElementById('storeMarketing3').setAttribute('disabled', 'disabled') // disable store marketing 3 upgrade
        if (money >= 25000){
            document.getElementById('storeMarketing3').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing3').style.display = 'none'
    }

    if (storeMarketing4upgrade){
        document.getElementById('storeMarketing4').style.display = 'block'
        document.getElementById('storeMarketing4').setAttribute('disabled', 'disabled') // disable store marketing 3 upgrade
        if (money >= 100000){
            document.getElementById('storeMarketing4').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing4').style.display = 'none'
    }

    if (storeMarketing5upgrade){
        document.getElementById('storeMarketing5').style.display = 'block'
        document.getElementById('storeMarketing5').setAttribute('disabled', 'disabled') // disable store marketing 3 upgrade
        if (money >= 500000){
            document.getElementById('storeMarketing5').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing5').style.display = 'none'
    }
}

function upgrade(identifier){
    switch (identifier){
        case 1:
            money -= 100
            vendingMachineProfitPerSec *= 2
            marketing2upgrade = false
            marketing3upgrade = true
            gamblingUpgrade = true
            break
        case 2:
            money -= 500
            vendingMachineProfitPerSec *= 2
            marketing3upgrade = false
            marketing4upgrade = true
            break
        case 3:
            money -= 2000
            vendingMachineProfitPerSec *= 2
            marketing4upgrade = false
            marketing5upgrade = true
            break
        case 4:
            money -= 50000
            vendingMachineProfitPerSec *= 2
            marketing5upgrade = false
            break
        case 5:
            money -= 2500
            gamblingUpgrade = false
            gamblingEngine = true
            break
        case 6:
            money -= 2000
            cornerStoreUpgradeBought = true
            cornerStoreUpgrade = false
            storeMarketing2upgrade = true
            break
        case 7:
            money -= 5000
            cornerStoreProfitPerSec *= 5
            storeMarketing2upgrade = false
            storeMarketing3upgrade = true
            break
        case 8:
            money -= 25000
            cornerStoreProfitPerSec *= 5
            storeMarketing3upgrade = false
            storeMarketing4upgrade = true
            break
        case 9:
            money -= 100000
            cornerStoreProfitPerSec *= 5
            storeMarketing4upgrade = false
            storeMarketing5upgrade = true
            break
        case 10:
            money -= 500000
            cornerStoreProfitPerSec *= 5
            storeMarketing5upgrade = false
            break
        case 11:
            money -= 1000000
            money += cornerStores * cornerStoreCost
            money += vendingMachines * vendingMachineCost
            secondCompany = true
            sellEverythingUpgrade = false
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

function cornerStore(){
    money -= cornerStoreCost
    cornerStores += 1
    cornerStoreCost = Math.round(cornerStoreCost * 2)
    refreshGame()
}

function makeMoney(){
    money++
    energy--
    refreshGame()
}

function eat(){
    energy += 100
    money -= 20
    refreshGame()
}

refreshGame()

function secondUpdate(){
    if (!secondCompany){
        if (energy >= vendingMachines){
            money += vendingMachines * vendingMachineProfitPerSec
            energy -= vendingMachines
        }
        if (energy >= cornerStores){
            money += cornerStores * cornerStoreProfitPerSec
            energy -= vendingMachines
        }
    }
    refreshGame()
}

setInterval(secondUpdate, 1000)