// V0.5.6

var money = 0
var energy = 100
var food = 5


// amounts
var vendingMachines = 0
var cornerStores = 0
var restaurants = 0
var workers = 0



// Prices
var vendingMachinePrice = 50
var cornerStorePrice = 20000
var restaurantPrice = 50000
var workerPrice = 10000
var clockPrice = 10000000


// per second values
var vendingMachineProfitPerSec = 1
var cornerStoreProfitPerSec = 25



// second company
var restaurantFoodMadePerSec = 5
var workerProfitPerSec = 100

var clocks = 1
var secondUpdatesPerSec = 1



// upgrades
var gamblingUpgrade       = false
var cornerStoreUpgrade    = false
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

// second company upgrades
var workerUpgrade     = false
var restaurantUpgrade = false
var clockUpgrade      = false



// visibility variables
var energyDivVisible         = false
var statsDivVisible          = false
var buyDivVisible            = false
var vendingMachineDivVisible = false
var eatDivVisible            = false
var actionsDivVisible        = false
var upgradesDivVisible       = false
var cornerStoreDivVisible    = false
var gamblingDivVisible       = false
var restaurantDivVisible     = false
var foodMadePerSecDivVisible = false
var foodDivVisible           = false
var workerDivVisible         = false
var moneyPerSecondDivVisible = false
var clockDivVisible          = false



// bought upgrades variables
var secondCompany = false


function gameReset(){
    money = 0
    energy = 100
    food = 5
    vendingMachines = 0
    cornerStores = 0
    restaurants = 0
    workers = 0
    vendingMachinePrice = 50
    cornerStorePrice = 20000
    restaurantPrice = 10000
    workerPrice = 10000
    clockPrice = 10000000
    vendingMachineProfitPerSec = 1
    cornerStoreProfitPerSec = 25
    restaurantFoodMadePerSec = 5
    workerProfitPerSec = 100
    clocks = 1
    secondUpdatesPerSec = 1
    gamblingUpgrade       = false
    cornerStoreUpgrade    = false
    sellEverythingUpgrade = false
    marketing2upgrade = true
    marketing3upgrade = false
    marketing4upgrade = false
    marketing5upgrade = false
    storeMarketing2upgrade = false
    storeMarketing3upgrade = false
    storeMarketing4upgrade = false
    storeMarketing5upgrade = false
    workerUpgrade     = false
    restaurantUpgrade = false
    clockUpgrade      = false
    energyDivVisible         = false
    statsDivVisible          = false
    buyDivVisible            = false
    vendingMachineDivVisible = false
    eatDivVisible            = false
    actionsDivVisible        = false
    upgradesDivVisible       = false
    cornerStoreDivVisible    = false
    gamblingDivVisible       = false
    restaurantDivVisible     = false
    foodMadePerSecDivVisible = false
    foodDivVisible           = false
    workerDivVisible         = false
    moneyPerSecondDivVisible = false
    clockDivVisible          = false
    secondCompany = false
}

// variables, that don't need to be in the save
var secondsBeforeGambleMesssageReset = 0
var state = 'game'


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


function load(saveName){
    save = getListFromCookie(saveName)
    if (save == null){
        console.log('Save file not found!')
        gameReset()
        return
    }
    money                       = save[0]
    energy                      = save[1]
    food                        = save[2]
    vendingMachines             = save[3]
    cornerStores                = save[4]
    restaurants                 = save[5]
    workers                     = save[6]
    vendingMachinePrice         = save[7]
    cornerStorePrice            = save[8]
    restaurantPrice             = save[9]
    workerPrice                 = save[10]
    vendingMachineProfitPerSec  = save[11]
    cornerStoreProfitPerSec     = save[12]
    restaurantFoodMadePerSec    = save[13]
    workerProfitPerSec          = save[14]
    gamblingUpgrade             = save[15]
    cornerStoreUpgrade          = save[16]
    sellEverythingUpgrade       = save[17]
    marketing2upgrade           = save[18]
    marketing3upgrade           = save[19]
    marketing4upgrade           = save[20]
    marketing5upgrade           = save[21]
    storeMarketing2upgrade      = save[22]
    storeMarketing3upgrade      = save[23]
    storeMarketing4upgrade      = save[24]
    storeMarketing5upgrade      = save[25]
    workerUpgrade               = save[26]
    restaurantUpgrade           = save[27]
    buyDivVisible               = save[28]
    vendingMachineDivVisible    = save[29]
    eatDivVisible               = save[30]
    actionsDivVisible           = save[31]
    upgradesDivVisible          = save[32]
    cornerStoreDivVisible       = save[33]
    gamblingDivVisible          = save[34]
    statsDivVisible             = save[35]
    energyDivVisible            = save[36]
    restaurantDivVisible        = save[37]
    foodMadePerSecondDivVisible = save[38]
    foodDivVisible              = save[39]
    workerDivVisible            = save[40]
    moneyPerSecondDivVisible    = save[41]
    secondCompany               = save[42]
}

load('save1')

function updateVisibility(id, visibilityStatus){
    if (visibilityStatus){
        document.getElementById(id).style.display = 'block'
    } else{
        document.getElementById(id).style.display = 'none'
    }
}

function updateTextContent(id, value){
    document.getElementById(id).textContent = value
}

function updateVisibilityAndButton(id, visibility, buttonCondition){
    if (visibility){
        document.getElementById(id).style.display = 'block'

        if (buttonCondition){
            document.getElementById(id).removeAttribute('disabled')
        }else{
            document.getElementById(id).setAttribute('disabled', 'disabled')
        }
    }else{
        document.getElementById(id).style.display = 'none'
    }
}

function disableEnableButton(id, enabled){
    if (enabled){
        document.getElementById(id).removeAttribute('disabled')
    }else{
        document.getElementById(id).setAttribute('disabled', 'disabled')
    }
}

function updateTextContentOrPutNothing(id, number){
    if (number != 0){
        document.getElementById(id).textContent = number
    }else{
        document.getElementById(id).textContent = ''
    }
}

function refreshGame(){
    updateTextContent('money', money)

    if (!secondCompany){
        updateTextContent('energy', energy)
        updateTextContent('vendingMachinePrice', vendingMachinePrice)
        updateTextContent('cornerStorePrice', cornerStorePrice)

        updateTextContentOrPutNothing('vendingMachines', vendingMachines)
        updateTextContentOrPutNothing('cornerStores', cornerStores)

        disableEnableButton('makeMoneyButton', energy > 0)
        disableEnableButton('eat', money >= 20)
        disableEnableButton('vendingMachine', money >= vendingMachinePrice)
        disableEnableButton('cornerStore', money >= cornerStorePrice)

        if (cornerStores >= 5){
            sellEverythingUpgrade = true
        }

        if (vendingMachines >= 10 & !cornerStoreDivVisible){
            cornerStoreUpgrade = true
        }


    }else{
        disableEnableButton('makeMoneyButton', food > 0)
        disableEnableButton('restaurantButton', money >= restaurantPrice)
        disableEnableButton('workerButton', money >= workerPrice)

        updateTextContent('foodMadePerSec', restaurants * restaurantFoodMadePerSec)
        updateTextContent('clocks', clocks)
        updateTextContent('clockPrice', clockPrice)
        updateTextContent('restaurantPrice', restaurantPrice)
        updateTextContent('workerPrice', workerPrice)

        updateTextContentOrPutNothing('restaurants', restaurants)
        updateTextContentOrPutNothing('workers', workers)
    }

    // VISIBILITY UPDATES

    updateVisibility('eatDiv', eatDivVisible)
    updateVisibility('cornerStoreDiv', cornerStoreDivVisible)
    updateVisibility('vendingMachineDiv', vendingMachineDivVisible)
    updateVisibility('energyDiv', energyDivVisible)
    updateVisibility('buyDiv', buyDivVisible)
    updateVisibility('actionsDiv', actionsDivVisible)
    updateVisibility('upgradesDiv', upgradesDivVisible)
    updateVisibility('gamblingDiv', gamblingDivVisible)
    updateVisibility('statsDiv', statsDivVisible)
    updateVisibility('restaurantDiv', restaurantDivVisible)
    updateVisibility('foodMadePerSecDiv', foodMadePerSecDivVisible)
    updateVisibility('foodDiv', foodDivVisible)
    updateVisibility('workerDiv', workerDivVisible)
    updateVisibility('moneyPerSecDiv', moneyPerSecondDivVisible)
    updateVisibility('clockDiv', clockDivVisible)

    // GAMBLING

    disableEnableButton('gambleButton', document.getElementById('betAmount').value <= money)

    if (Math.abs(document.getElementById('betAmount').value) != document.getElementById('betAmount').value){
        document.getElementById('gambleButton').setAttribute('disabled', 'disabled') // disable the gambling button
    }


    // UPGRADES

    updateVisibilityAndButton('gambling', gamblingUpgrade, money >= 2500)
    updateVisibilityAndButton('cornerStoreUpgrade', cornerStoreUpgrade, money >= 20000)
    updateVisibilityAndButton('sellEverything', sellEverythingUpgrade, money >= 1000000)

    // MARKETING UPGRADES FOR VENDING MACHINES

    updateVisibilityAndButton('marketing2', marketing2upgrade, money >= 100)
    updateVisibilityAndButton('marketing3', marketing3upgrade, money >= 500)
    updateVisibilityAndButton('marketing4', marketing4upgrade, money >= 2000)
    updateVisibilityAndButton('marketing5', marketing5upgrade, money >= 15000)

    // MARKETING UPGRADES FOR CORNER STORES

    updateVisibilityAndButton('storeMarketing2', storeMarketing2upgrade, money >= 50000)
    updateVisibilityAndButton('storeMarketing3', storeMarketing3upgrade, money >= 100000)
    updateVisibilityAndButton('storeMarketing4', storeMarketing4upgrade, money >= 200000)
    updateVisibilityAndButton('storeMarketing5', storeMarketing5upgrade, money >= 500000)

    //  SECOND COMPANY UPGRADES

    updateVisibility('worker', workerUpgrade)
    updateVisibility('restaurant', restaurantUpgrade)
    updateVisibilityAndButton('clockUpgrade', clockUpgrade)


    // updating the tab opened

    if (state == 'game'){
        document.getElementById('game').style.display = 'block'
        document.getElementById('settings').style.display = 'none'

        document.getElementById('gameButton').setAttribute('disabled', 'disabled')
        document.getElementById('settingsButton').removeAttribute('disabled')
    }else{
        document.getElementById('game').style.display = 'none'
        document.getElementById('settings').style.display = 'block'

        document.getElementById('gameButton').removeAttribute('disabled')
        document.getElementById('settingsButton').setAttribute('disabled', 'disabled')
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

            money += cornerStores * cornerStorePrice
            money += vendingMachines * vendingMachinePrice

            vendingMachines = 0
            cornerStores = 0

            secondCompany = true
            sellEverythingUpgrade = false

            cornerStoreDivVisible = false

            eatDivVisible = false
            actionsDivVisible = false

            buyDivVisible = false
            cornerStoreDivVisible = false
            vendingMachineDivVisible = false

            statsDivVisible = false
            energyDivVisible = false

            cornerStoreUpgrade = false

            marketing2upgrade = false
            marketing3upgrade = false
            marketing4upgrade = false
            marketing5upgrade = false

            storeMarketing2upgrade = false
            storeMarketing3upgrade = false
            storeMarketing4upgrade = false
            storeMarketing5upgrade = false

            restaurantUpgrade = true
            workerUpgrade     = true
            clockUpgrade      = true
            break
        case 12:
            buyDivVisible = true
            restaurantDivVisible = true
            statsDivVisible = true
            foodMadePerSecDivVisible = true
            foodDivVisible = true
            restaurantDivVisible = true
            restaurantUpgrade = false
            break
        case 13:
            buyDivVisible = true
            workerDivVisible = true
            statsDivVisible = true
            moneyPerSecondDivVisible = true
            workerDivVisible = true
            workerUpgrade = false
            break
        case 14:
            clockDivVisible = true
            clockUpgrade = false
    }
    refreshGame()
}

function gamble(){
    money -= Math.abs(document.getElementById('betAmount').value)

    var valueRolled = Math.floor(Math.random() * 24) + 1

    if (valueRolled == document.getElementById('bet').value){
        money += document.getElementById('betAmount').value * 24
        secondsBeforeGambleMesssageReset = 10
        document.getElementById('gambleMessage').textContent = 'Your Bet Was Right!!! you made ' + (document.getElementById('betAmount').value) * 23 + '$'
    }else{
        secondsBeforeGambleMesssageReset = 10
        document.getElementById('gambleMessage').textContent = 'Your bet was not right. You lost ' + (document.getElementById('betAmount').value) + '$. The number rolled was ' + valueRolled
    }
    refreshGame()
}

function vendingMachine(){
    money -= vendingMachinePrice
    vendingMachines += 1
    vendingMachinePrice = Math.round(vendingMachinePrice * 2)
    refreshGame()
}

function cornerStore(){
    money -= cornerStorePrice
    cornerStores += 1
    cornerStorePrice = Math.round(cornerStorePrice * 2)
    refreshGame()
}

function makeMoney(){
    money++
    if (!secondCompany){
        energy--

        if (money > 0){
            energyDivVisible = true
            statsDivVisible = true
        }

        if (money > 20){
            eatDivVisible = true // show eating button and Price
            actionsDivVisible = true // show actions div 
        }

        if (money >= 50){
            buyDivVisible = true // show buy div
            vendingMachineDivVisible = true // show vending machine buy
        }

        if (money >= 100){
            upgradesDivVisible = true // show upgrades
        }
    }else{
        food--
    }


    refreshGame()
}

function eat(){
    energy += 100
    money -= 20
    refreshGame()
}

function restaurant(){
    restaurants += 1
    money = money - restaurantPrice
    restaurantPrice *= 2
    refreshGame()
}

function worker(){
    workers += 1
    money = money - workerPrice
    workerPrice *= 2
    refreshGame()
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
        food += restaurants * restaurantFoodMadePerSec
        if (food > workers){
            food = food - workers
            money += workers * workerProfitPerSec
            document.getElementById('moneyPerSec').textContent = workers * workerProfitPerSec
        }
        updateTextContent('food', food)
    }

    if (secondsBeforeGambleMesssageReset == 0){
        updateTextContent('gambleMessage', '')
    }else{
        secondsBeforeGambleMesssageReset--
    }

    refreshGame()
}

setInterval(secondUpdate, 1000)

function saveListToCookie(list, cookieName) {
    const jsonString = JSON.stringify(list)
    const cookieValue = encodeURIComponent(jsonString)
    document.cookie = cookieName + '=' + cookieValue + ';'
}

function saveGame(saveName){
    valuesToSave = [
        money,
        energy,
        food,
        vendingMachines,
        cornerStores,
        restaurants,
        workers,
        vendingMachinePrice,
        cornerStorePrice,
        restaurantPrice,
        workerPrice,
        vendingMachineProfitPerSec,
        cornerStoreProfitPerSec,
        restaurantFoodMadePerSec,
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
        buyDivVisible,
        vendingMachineDivVisible,
        eatDivVisible,
        actionsDivVisible,
        upgradesDivVisible,
        cornerStoreDivVisible,
        gamblingDivVisible,
        statsDivVisible,
        energyDivVisible,
        restaurantDivVisible,
        foodMadePerSecDivVisible,
        foodDivVisible,
        workerDivVisible,
        moneyPerSecondDivVisible,
        secondCompany
    ]
    saveListToCookie(valuesToSave, saveName)
}

function minuteUpdate(){
    saveGame('save1')
}

setInterval(minuteUpdate, 60000)

function gameTab(){
    state = 'game'
    refreshGame()
}

function settingsTab(){
    state = 'settings'
    refreshGame()
}

function applyCss(){
    document.querySelector('style').innerHTML = document.getElementById('cssCode').value
}

applyCss()

function resetCustomCss(){
    document.getElementById('cssCode').value = `.button{

}

.text{
    /* not all textboxes work (working on adding more) */
}
    `
}

function clock(){
    clocks++
    money -= clockPrice

    refreshGame()
}

console.log('finished config')