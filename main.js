// V0.4.8

var money = 0
var energy = 100
var food = 5


// amounts
var vendingMachines = 0
var cornerStores = 0
var restaurants = 0
var workers = 0



// costs
var vendingMachineCost = 50
var cornerStoreCost = 20000
var restaurantCost = 100
var workerCost = 100



// per second values
var vendingMachineProfitPerSec = 1
var cornerStoreProfitPerSec = 25



// second company
var restaurantFoodPerSec = 5
var workerProfitPerSec = 100



// upgrades
var gamblingUpgrade       = false
var cornerStoreUpgrade    = false
var sellEverythingUpgrade = false

// marketing for vending machines
var marketing2upgrade = false
var marketing3upgrade = false
var marketing4upgrade = false
var marketing5upgrade = false

// marketing for corner stores
var storeMarketing2upgrade = false
var storeMarketing3upgrade = false
var storeMarketing4upgrade = false
var storeMarketing5upgrade = false

// second company upgrades
var workerUpgrade     = false
var restaurantUpgrade = false



// visibility variables
var automationDivVisible     = false
var vendingMachineDivVisible = false
var eatDivVisible            = false
var actionsDivVisible        = false
var upgradesDivVisible       = false
var cornerStoreDivVisible    = false
var gamblingDivVisible       = false
var statsDivVisible          = false
var energyDivVisible         = false
var restaurantDivVisible     = false
var foodPerSecondDivVisible  = false
var foodDivVisible           = false
var workerDivVisible         = false
var moneyPerSecondDivVisible = false



// bought upgrades variables
var secondCompany = false

// other variables
var updatesBeforeGambleMesssageReset = 0


function getListFromCookie(cookieName) {
    const name = cookieName + '='
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim()
      if (cookie.indexOf(name) === 0) {
        const jsonString = decodeURIComponent(cookie.substring(name.length))
        return JSON.parse(jsonString)
      }
    }
    return null;
}


function load(){
    save = getListFromCookie('save1')
    if (save == null){
        console.log('Save file not found!')
        return
    }
    money                      = save[0]
    energy                     = save[1]
    food                       = save[2]
    vendingMachines            = save[3]
    cornerStores               = save[4]
    restaurants                = save[5]
    workers                    = save[6]
    vendingMachineCost         = save[7]
    cornerStoreCost            = save[8]
    restaurantCost             = save[9]
    workerCost                 = save[10]
    vendingMachineProfitPerSec = save[11]
    cornerStoreProfitPerSec    = save[12]
    restaurantFoodPerSec       = save[13]
    workerProfitPerSec         = save[14]
    gamblingUpgrade            = save[15]
    cornerStoreUpgrade         = save[16]
    sellEverythingUpgrade      = save[17]
    marketing2upgrade          = save[18]
    marketing3upgrade          = save[19]
    marketing4upgrade          = save[20]
    marketing5upgrade          = save[21]
    storeMarketing2upgrade     = save[22]
    storeMarketing3upgrade     = save[23]
    storeMarketing4upgrade     = save[24]
    storeMarketing5upgrade     = save[25]
    workerUpgrade              = save[26]
    restaurantUpgrade          = save[27]
    automationDivVisible       = save[28]
    vendingMachineDivVisible   = save[29]
    eatDivVisible              = save[30]
    actionsDivVisible          = save[31]
    upgradesDivVisible         = save[32]
    cornerStoreDivVisible      = save[33]
    gamblingDivVisible         = save[34]
    statsDivVisible            = save[35]
    energyDivVisible           = save[36]
    restaurantDivVisible       = save[37]
    foodPerSecondDivVisible    = save[38]
    foodDivVisible             = save[39]
    workerDivVisible           = save[40]
    moneyPerSecondDivVisible   = save[41]
    secondCompany              = save[42]
}

load()

function updateVisibility(id, visibilityStatus){
    if (visibilityStatus){
        document.getElementById(id).style.display = 'block'
    } else{
        document.getElementById(id).style.display = 'none'
    }
}

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
        }else{
            document.getElementById('eat').removeAttribute("disabled") // disable it
        }

        if (money > 20){
            eatDivVisible = true // show eating button and cost
            actionsDivVisible = true // show actions div 
        }

        if (money >= 50){
            automationDivVisible = true // show automation div
            vendingMachineDivVisible = true // show vending machine buy
        }
        
        if (money >= 100){
            upgradesDivVisible = true // show upgrades
            marketing2upgrade = true // show the 1st upgrade
        }

        if (money < vendingMachineCost){
            document.getElementById('vendingMachine').setAttribute("disabled", "disabled") // disable vending machine button
        }else{
            document.getElementById('vendingMachine').removeAttribute('disabled') // enable it
        }

        if (money < cornerStoreCost){
            document.getElementById('cornerStore').setAttribute("disabled", "disabled") // disable corner store button
        }else{
            document.getElementById('cornerStore').removeAttribute('disabled') // enable it
        }

        if (cornerStores >= 5){
            sellEverythingUpgrade = true // enable the sell everything upgrade if you got at least 5 corner stores
        }


        // VISIBILITY UPDATES

        updateVisibility('eatDiv', eatDivVisible)
        updateVisibility('cornerStoreDiv', cornerStoreDivVisible)
        updateVisibility('vendingMachineDiv', vendingMachineDivVisible)
        updateVisibility('energyDiv', energyDivVisible)

    }else{
        document.getElementById('foodPerSec').textContent  = restaurants * restaurantFoodPerSec

        if (restaurants != 0){document.getElementById('restaurants').textContent = restaurants}
        else{document.getElementById('restaurants').textContent = ''}

        if (workers != 0){document.getElementById('workers').textContent = workers}
        else{document.getElementById('workers').textContent = ''}

        if (money >= restaurantCost){
            document.getElementById('restaurantButton').removeAttribute('disabled')
        }else{
            document.getElementById('restaurantButton').setAttribute('disabled', 'disabled')
        }

        if (money >= workerCost){
            document.getElementById('workerButton').removeAttribute('disabled')
        }else{
            document.getElementById('workerButton').setAttribute('disabled', 'disabled')
        }
    }

    updateVisibility('automationDiv', automationDivVisible)
    updateVisibility('actionsDiv', actionsDivVisible)
    updateVisibility('upgradesDiv', upgradesDivVisible)
    updateVisibility('gamblingDiv', gamblingDivVisible)
    updateVisibility('statsDiv', statsDivVisible)
    updateVisibility('restaurantDiv', restaurantDivVisible)
    updateVisibility('foodPerSecDiv', foodPerSecondDivVisible)
    updateVisibility('foodDiv', foodDivVisible)
    updateVisibility('workerDiv', workerDivVisible)
    updateVisibility('moneyPerSecDiv', moneyPerSecondDivVisible)

    // GAMBLING 

    if (document.getElementById('betAmount').value <= money){ // if the bet amount not is too high
        document.getElementById('gambleButton').removeAttribute('disabled') // turn on the gamble button
    }else{
        document.getElementById('gambleButton').setAttribute('disabled', 'disabled') // else turn it off
    }
    
    if (Math.floor(document.getElementById('betAmount').value) == document.getElementById('betAmount').value){
        document.getElementById('gambleButton').setAttribute('disabled', 'disabled') // disable the gambling button
    }


    // UPGRADES


    if (vendingMachines >= 10 & !cornerStoreDivVisible){
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
        if (money >= 20000){
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
        if (money >= 15000){
            document.getElementById('marketing5').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('marketing5').style.display = 'none'
    }

    // MARKETING UPGRADES FOR CORNER STORES

    if (storeMarketing2upgrade){
        document.getElementById('storeMarketing2').style.display = 'block'
        document.getElementById('storeMarketing2').setAttribute('disabled', 'disabled') // disable store marketing 2 upgrade
        if (money >= 50000){
            document.getElementById('storeMarketing2').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing2').style.display = 'none'
    }

    if (storeMarketing3upgrade){
        document.getElementById('storeMarketing3').style.display = 'block'
        document.getElementById('storeMarketing3').setAttribute('disabled', 'disabled') // disable store marketing 3 upgrade
        if (money >= 100000){
            document.getElementById('storeMarketing3').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing3').style.display = 'none'
    }

    if (storeMarketing4upgrade){
        document.getElementById('storeMarketing4').style.display = 'block'
        document.getElementById('storeMarketing4').setAttribute('disabled', 'disabled') // disable store marketing 4 upgrade
        if (money >= 200000){
            document.getElementById('storeMarketing4').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing4').style.display = 'none'
    }

    if (storeMarketing5upgrade){
        document.getElementById('storeMarketing5').style.display = 'block'
        document.getElementById('storeMarketing5').setAttribute('disabled', 'disabled') // disable store marketing 5 upgrade
        if (money >= 500000){
            document.getElementById('storeMarketing5').removeAttribute('disabled') // enable it
        } 
    }else{
        document.getElementById('storeMarketing5').style.display = 'none'
    }

    //  SECOND COMPANY UPGRADES

    if (workerUpgrade){
        document.getElementById('worker').style.display = 'block'
    }else{
        document.getElementById('worker').style.display = 'none'
    }

    if (restaurantUpgrade){
        document.getElementById('restaurant').style.display = 'block'
    }else{
        document.getElementById('restaurant').style.display = 'none'
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
            vendingMachineProfitPerSec *= 5
            marketing4upgrade = false
            marketing5upgrade = true
            break
        case 4:
            money -= 15000
            vendingMachineProfitPerSec *= 5
            marketing5upgrade = false
            break
        case 5:
            money -= 2500
            gamblingUpgrade = false
            gamblingDivVisible = true
            break
        case 6:
            money -= 10000
            cornerStoreDivVisible = true
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
            cornerStoreProfitPerSec *= 2
            storeMarketing3upgrade = false
            storeMarketing4upgrade = true
            break
        case 9:
            money -= 100000
            cornerStoreProfitPerSec *= 2
            storeMarketing4upgrade = false
            storeMarketing5upgrade = true
            break
        case 10:
            money -= 500000
            cornerStoreProfitPerSec *= 2
            storeMarketing5upgrade = false
            break
        case 11:
            money -= 1000000

            money += cornerStores * cornerStoreCost
            money += vendingMachines * vendingMachineCost

            vendingMachines = 0
            cornerStores = 0

            secondCompany = true
            sellEverythingUpgrade = false

            cornerStoreDivVisible = false

            eatDivVisible = false
            actionsDivVisible = false

            automationDivVisible = false
            cornerStoreDivVisible = false
            vendingMachineDivVisible = false

            statsDivVisible = false
            energyDivVisible = false

            restaurantUpgrade = true
            workerUpgrade = true
            break
        case 12:
            automationDivVisible = true
            restaurantDivVisible = true
            statsDivVisible = true
            foodPerSecondDivVisible = true
            foodDivVisible = true
            restaurantDivVisible = true
            restaurantUpgrade = false
            break
        case 13:
            automationDivVisible = true
            workerDivVisible = true
            statsDivVisible = true
            moneyPerSecondDivVisible = true
            workerDivVisible = true
            workerUpgrade = false
            break
    }
    refreshGame()
}

function gamble(){
    money -= Math.abs(document.getElementById('betAmount').value)

    var valueRolled = Math.floor(Math.random() * 24) + 1

    if (valueRolled == document.getElementById('bet').value){
        money += document.getElementById('betAmount').value * 24
        updatesBeforeGambleMesssageReset = 10
        document.getElementById('gambleMessage').textContent = 'Your Bet Was Right!!! you made ' + (document.getElementById('betAmount').value) * 23 + '$'
    }else{
        updatesBeforeGambleMesssageReset = 10
        document.getElementById('gambleMessage').textContent = 'Your bet was not right. You lost ' + (document.getElementById('betAmount').value) + '$. The number rolled was ' + valueRolled
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

function restaurant(){
    restaurants += 1
    money = money - restaurantCost
    restaurantCost *= 2
    document.getElementById('restaurantCost').textContent = restaurantCost
    refreshGame()
}

function worker(){
    workers += 1
    money = money - restaurantCost
    workerCost *= 2
    document.getElementById('workerCost').textContent = workerCost
    refreshGame()
}

function saveListToCookie(list, cookieName) {
    const jsonString = JSON.stringify(list)
    const cookieValue = encodeURIComponent(jsonString)
    document.cookie = cookieName + '=' + cookieValue + ';'
}

function saveGame(){
    valuesToSave = [
        money,
        energy,
        food,
        vendingMachines,
        cornerStores,
        restaurants,
        workers,
        vendingMachineCost,
        cornerStoreCost,
        restaurantCost,
        workerCost,
        vendingMachineProfitPerSec,
        cornerStoreProfitPerSec,
        restaurantFoodPerSec,
        workerProfitPerSec,
        gamblingUpgrade,
        cornerStoreUpgrade,
        sellEverythingUpgrade,
        marketing2upgrade,
        marketing3upgrade,
        marketing4upgrade,
        marketing5upgrade,
        storeMarketing2upgrade,
        storeMarketing3upgrade,
        storeMarketing4upgrade,
        storeMarketing5upgrade,
        workerUpgrade,
        restaurantUpgrade,
        automationDivVisible,
        vendingMachineDivVisible,
        eatDivVisible,
        actionsDivVisible,
        upgradesDivVisible,
        cornerStoreDivVisible,
        gamblingDivVisible,
        statsDivVisible,
        energyDivVisible,
        restaurantDivVisible,
        foodPerSecondDivVisible,
        foodDivVisible,
        workerDivVisible,
        moneyPerSecondDivVisible,
        secondCompany
    ]
    saveListToCookie(valuesToSave, 'save1')
}

refreshGame()

function secondUpdate(){
    if (!secondCompany){
        if (energy > vendingMachines){
            money += vendingMachines * vendingMachineProfitPerSec
            energy = energy - vendingMachines
        }
        if (energy > cornerStores){
            money += cornerStores * cornerStoreProfitPerSec
            energy = energy - cornerStores
        }
    }else{
        food += restaurants * restaurantFoodPerSec
        if (food > workers){
            food = food - workers
            money += workers * workerProfitPerSec
            document.getElementById('moneyPerSec').textContent = workers * workerProfitPerSec
        }
        document.getElementById('food').textContent = food
        
    }

    if (updatesBeforeGambleMesssageReset == 0){document.getElementById('gambleMessage').textContent = ''}
    else{updatesBeforeGambleMesssageReset--}

    refreshGame()
}

setInterval(secondUpdate, 1000)

function minuteUpdate(){
    saveGame()
}

setInterval(minuteUpdate, 60000)