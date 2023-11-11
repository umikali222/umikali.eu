var money = 0
var food = 5


// amounts
var vendingMachines = 0
var cornerStores = 0
var restaurants = 0
var workers = 0



// Prices
var vendingMachinePrice = 20
var cornerStorePrice = 100
var restaurantPrice = 50000
var workerPrice = 10000
var clockPrice = 50000000


// per second values
var vendingMachineProfitPerSec = 1
var cornerStoreProfitPerSec = 5



// second company
var restaurantFoodMadePerSec = 5
var workerProfitPerSec = 10000

var clockEfficiency = 1

var clocks = 1
var gold = 0
var copper = 0



// upgrades
var gamblingUpgrade       = false
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
var goldUpgrade       = false
var copperUpgrade     = false

// marketing upgrades
var c2MarketingLevel = 1
var clockEfficiencyLevel = 1



// visibility variables
var statsDivVisible          = false
var buyDivVisible            = false
var vendingMachineDivVisible = false
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
var makeCopperButtonVisible  = false



// bought upgrades variables
var secondCompany = false
var goldUpgradeBought = false


function gameReset(){
    money = 0
    food = 5
    vendingMachines = 0
    cornerStores = 0
    restaurants = 0
    workers = 0
    vendingMachinePrice = 20
    cornerStorePrice = 100
    restaurantPrice = 50000
    workerPrice = 10000
    clockPrice = 50000000
    vendingMachineProfitPerSec = 1
    cornerStoreProfitPerSec = 5
    restaurantFoodMadePerSec = 5
    workerProfitPerSec = 10000
    clockEfficiency = 1
    clocks = 1
    gold = 0
    copper = 0
    gamblingUpgrade       = false
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
    goldUpgrade       = false
    copperUpgrade     = false
    c2MarketingLevel = 1
    clockEfficiencyLevel = 1
    statsDivVisible          = false
    buyDivVisible            = false
    vendingMachineDivVisible = false
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
    makeCopperButtonVisible  = false
    secondCompany = false
    goldUpgradeBought = false
}

// variables, that don't need to be in the save
var secondsBeforeGambleMesssageReset = 0
var state = 'game'
var FPS = 100


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
    // EMPTY
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
    // EMPTY
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
    // EMPTY
    actionsDivVisible           = save[31]
    upgradesDivVisible          = save[32]
    cornerStoreDivVisible       = save[33]
    gamblingDivVisible          = save[34]
    statsDivVisible             = save[35]
    // empty
    restaurantDivVisible        = save[37]
    foodMadePerSecDivVisible    = save[38]
    foodDivVisible              = save[39]
    workerDivVisible            = save[40]
    moneyPerSecondDivVisible    = save[41]
    secondCompany               = save[42]
    clocks                      = save[43]
    clockDivVisible             = save[44]
    clockPrice                  = save[45]
    clockUpgrade                = save[46]
    gold                        = save[47]
    goldUpgrade                 = save[48]
    goldUpgradeBought           = save[49]
    copper                      = save[50]
    copperUpgrade               = save[51]
    makeCopperButtonVisible     = save[52]
    c2MarketingLevel            = save[53]
    clockEfficiency             = save[54]
    clockEfficiencyLevel        = save[55]
}

load('save1')

function enableButton(id){
    document.getElementById(id).removeAttribute('disabled')
}

function disableButton(id){
    document.getElementById(id).setAttribute('disabled', 'disabled')
}

function show(id){
    document.getElementById(id).style.display = 'block'
}

function hide(id){
    document.getElementById(id).style.display = 'none'
}

function valueOf(id){
    return document.getElementById(id).value
}

function makeNumberReadable(number) {
    if (typeof number != 'number') {
        return number
    }
    
    var numStr = String(number)
    var result = ''

    for (var i = numStr.length - 1, count = 0; i >= 0; i--, count++) {
        if (count === 3) {
            result = "`" + result
            count = 0
        }
        result = numStr[i] + result
    }
  
    return result
}

function updateVisibility(id, visibilityStatus){
    if (visibilityStatus){
        show(id)
    }else{
        hide(id)
    }
}

function updateTextContent(id, value, floor=true){
    if(floor){
        document.getElementById(id).textContent = makeNumberReadable(Math.floor(value))
    }else{
        document.getElementById(id).textContent = makeNumberReadable(value)
    }
}

function updateVisibilityAndButton(id, visibility, buttonCondition){
    if (visibility){
        show(id)

        if (buttonCondition){
            enableButton(id)
        }else{
            disableButton(id)
        }
    }else{
        hide(id)
    }
}

function disableEnableButton(id, enabled){
    if (enabled){
        enableButton(id)
    }else{
        disableButton(id)
    }
}

function updateTextContentOrPutNothing(id, number){
    if (number != 0){
        updateTextContent(id, number)
    }else{
        updateTextContent(id, '')
    }
}

function refreshGame(){
    updateTextContent('money', money)

    if (!secondCompany){
        updateTextContent('vendingMachinePrice', vendingMachinePrice)
        updateTextContent('cornerStorePrice', cornerStorePrice)
        updateTextContent('vendingMachineProfitPerSec', vendingMachineProfitPerSec, false)
        updateTextContent('cornerStoreProfitPerSec', cornerStoreProfitPerSec)

        updateTextContentOrPutNothing('vendingMachines', vendingMachines)
        updateTextContentOrPutNothing('cornerStores', cornerStores)

        disableEnableButton('vendingMachine', money >= vendingMachinePrice)
        disableEnableButton('cornerStore', money >= cornerStorePrice)

        if (cornerStores >= 20){
            sellEverythingUpgrade = true
        }

        if (money >= vendingMachinePrice){
            buyDivVisible = true // show buy div
            vendingMachineDivVisible = true // show vending machine buy
        }

        if (money >= 200){
            upgradesDivVisible = true // show upgrades
        }

        if (vendingMachinePrice > 100){
            cornerStoreDivVisible = true
            storeMarketing2upgrade = true
        }
    }else{
        disableEnableButton('restaurantButton', money >= restaurantPrice)
        disableEnableButton('workerButton', money >= workerPrice)
        disableEnableButton('clockButton', money >= clockPrice)
        disableEnableButton('makeCopperButton', food > 0)

        updateTextContent('foodMadePerSec', restaurants * restaurantFoodMadePerSec)
        updateTextContent('clocks', clocks)
        updateTextContent('clockPrice', clockPrice)
        updateTextContent('restaurantPrice', restaurantPrice)
        updateTextContent('workerPrice', workerPrice)
        updateTextContent('gold', gold)
        updateTextContent('copper', copper)
        updateTextContent('food', food)

        updateTextContentOrPutNothing('restaurants', restaurants)
        updateTextContentOrPutNothing('workers', workers)
    }

    // VISIBILITY UPDATES

    updateVisibility('cornerStoreDiv', cornerStoreDivVisible)
    updateVisibility('vendingMachineDiv', vendingMachineDivVisible)
    updateVisibility('buyDiv', buyDivVisible)
    updateVisibility('actionsDiv', actionsDivVisible)
    updateVisibility('upgradesDiv', upgradesDivVisible)
    //updateVisibility('gamblingDiv', gamblingDivVisible)
    updateVisibility('statsDiv', statsDivVisible)
    updateVisibility('restaurantDiv', restaurantDivVisible)
    updateVisibility('foodMadePerSecDiv', foodMadePerSecDivVisible)
    updateVisibility('foodDiv', foodDivVisible)
    updateVisibility('workerDiv', workerDivVisible)
    updateVisibility('moneyPerSecDiv', moneyPerSecondDivVisible)
    updateVisibility('clockDiv', clockDivVisible)
    updateVisibility('goldDiv', goldUpgradeBought)
    updateVisibility('copperDiv', makeCopperButtonVisible)
    updateVisibility('makeCopperButton', makeCopperButtonVisible)

    // GAMBLING

    //disableEnableButton('gambleButton', valueOf('betAmount') <= money)

    //if (Math.abs(valueOf('betAmount')) != valueOf('betAmount')){
    //    disableButton('gambleButton')
    //}


    // UPGRADES

    //updateVisibilityAndButton('gambling', gamblingUpgrade, money >= 2500)
    updateVisibilityAndButton('sellEverything', sellEverythingUpgrade, money >= 1000000)

    // MARKETING UPGRADES FOR VENDING MACHINES

    updateVisibilityAndButton('marketing2', marketing2upgrade, money >= 500)
    updateVisibilityAndButton('marketing3', marketing3upgrade, money >= 2000)
    updateVisibilityAndButton('marketing4', marketing4upgrade, money >= 15000)
    updateVisibilityAndButton('marketing5', marketing5upgrade, money >= 40000)

    // MARKETING UPGRADES FOR CORNER STORES

    updateVisibilityAndButton('storeMarketing2', storeMarketing2upgrade, money >= 50000)
    updateVisibilityAndButton('storeMarketing3', storeMarketing3upgrade, money >= 100000)
    updateVisibilityAndButton('storeMarketing4', storeMarketing4upgrade, money >= 200000)
    updateVisibilityAndButton('storeMarketing5', storeMarketing5upgrade, money >= 500000)

    //  SECOND COMPANY UPGRADES

    updateVisibility('worker', workerUpgrade)
    updateVisibility('restaurant', restaurantUpgrade)
    updateVisibilityAndButton('clockUpgrade', clockUpgrade, money >= 1000000)
    updateVisibilityAndButton('goldUpgrade', goldUpgrade, money >= 100000)
    updateVisibilityAndButton('copperUpgrade', copperUpgrade, gold >= 100)

    // MARKETING

    updateVisibilityAndButton('c2Marketing2', c2MarketingLevel == 2, money >= 10000000)
    updateVisibilityAndButton('c2Marketing3', c2MarketingLevel == 3, money >= 25000000)
    updateVisibilityAndButton('c2Marketing4', c2MarketingLevel == 4, money >= 50000000)
    updateVisibilityAndButton('c2Marketing5', c2MarketingLevel == 5, money >= 100000000)


    // CLOCK EFFICIENCY
    updateVisibilityAndButton('clockEfficiency2', clockEfficiencyLevel == 2, copper > 10000)
    updateVisibilityAndButton('clockEfficiency3', clockEfficiencyLevel == 3, copper > 10000)

    // updating the tab opened

    if (state == 'game'){
        show('game')
        hide('settings')

        enableButton('settingsButton')
        disableButton('gameButton')
    }else{
        show('settings')
        hide('game')

        enableButton('gameButton')
        disableButton('settingsButton')
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

            actionsDivVisible = false

            buyDivVisible = false
            cornerStoreDivVisible = false
            vendingMachineDivVisible = false

            statsDivVisible  = false

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
            goldUpgrade       = true
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
            c2MarketingLevel = 2
            break
        case 14:
            money -= 1000000
            clockDivVisible = true
            clockUpgrade = false
            break
        case 15:
            money -= 100000
            goldUpgradeBought = true
            goldUpgrade = false
            statsDivVisible = true
            copperUpgrade = true
            clockEfficiency = 2
            break
        case 16:
            gold -= 100
            makeCopperButtonVisible = true
            copperUpgrade = false
            actionsDivVisible = true
            break
        case 17:
            money -= 10000000
            workerProfitPerSec = workerProfitPerSec * 2
            c2MarketingLevel = 3
            break
        case 18:
            money -= 25000000
            workerProfitPerSec = workerProfitPerSec * 2
            c2MarketingLevel = 4
            break
        case 19:
            money -= 50000000
            workerProfitPerSec = workerProfitPerSec * 2
            c2MarketingLevel = 5
            break
        case 20:
            money -= 100000000
            workerProfitPerSec = workerProfitPerSec * 5
            c2MarketingLevel = 6
            break
        case 21:
            copper -= 10000
            clockEfficiency = clockEfficiency * 10
            clockEfficiencyLevel += 1
            break
    }
    refreshGame()
}

function gamble(){
    money -= Math.abs(valueOf('betAmount'))

    var valueRolled = Math.floor(Math.random() * 24) + 1

    if (valueRolled == valueOf('bet')){
        money += valueOf('betAmount') * 24
        secondsBeforeGambleMesssageReset = 10
        updateTextContent('gambleMessage', 'Your Bet Was Right!!! you made ' + (valueOf('betAmount') * 23) + '$')
    }else{
        secondsBeforeGambleMesssageReset = 10
        var message = 'Your bet was not right. You lost ' + valueOf('betAmount')
        var message = message + '$. The number rolled was ' + valueRolled
        updateTextContent('gambleMessage', message)
    }
    refreshGame()
}

function vendingMachine(){
    money -= vendingMachinePrice
    vendingMachines += 1
    vendingMachinePrice = Math.round(vendingMachinePrice * 1.5)
    refreshGame()
}

function cornerStore(){
    money -= cornerStorePrice
    cornerStores += 1
    cornerStorePrice = Math.round(cornerStorePrice * 1.5)
    refreshGame()
}

function makeMoney(){
    money++

    refreshGame()
}

function restaurant(){
    restaurants += 1
    money = money - restaurantPrice
    restaurantPrice = Math.round(restaurantPrice * 1.5)
    refreshGame()
}

function worker(){
    workers += 1
    money = money - workerPrice
    workerPrice = Math.round(workerPrice * 1.5)
    refreshGame()
}

refreshGame()

function clockUpdateFPS(){
    if (!secondCompany){
        money += (vendingMachines * vendingMachineProfitPerSec) / FPS

        money += (cornerStores * cornerStoreProfitPerSec) / FPS
    }else{
        if (food > workers){
            money += (workers * workerProfitPerSec) / FPS
            updateTextContent('moneyPerSec', workers * workerProfitPerSec)
        }
    }
    refreshGame()
}

setInterval(clockUpdateFPS, (1000 / FPS) / (clocks * clockEfficiency))

function clockUpdate(){
    if (secondCompany){
        if (food > workers){
            food = food - workers
        }
        food += restaurants * restaurantFoodMadePerSec
    }
}

setInterval(clockUpdate, 1000 / (clocks * clockEfficiency))

function secondUpdate(){
    if (secondsBeforeGambleMesssageReset == 0){
        updateTextContent('gambleMessage', '')
    }else{
        secondsBeforeGambleMesssageReset--
    }
}

function saveListToCookie(list, cookieName) {
    const jsonString = JSON.stringify(list)
    const cookieValue = encodeURIComponent(jsonString)
    document.cookie = cookieName + '=' + cookieValue + ';'
}

function saveGame(saveName){
    valuesToSave = [
        money,
        0, // EMPTY
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
        0, // EMPTY
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
        0, // EMPTY
        actionsDivVisible,
        upgradesDivVisible,
        cornerStoreDivVisible,
        gamblingDivVisible,
        statsDivVisible,
        0, // EMPTY
        restaurantDivVisible,
        foodMadePerSecDivVisible,
        foodDivVisible,
        workerDivVisible,
        moneyPerSecondDivVisible,
        secondCompany,
        clocks,
        clockDivVisible,
        clockPrice,
        clockUpgrade,
        gold,
        goldUpgrade,
        goldUpgradeBought,
        copper,
        copperUpgrade,
        makeCopperButtonVisible,
        c2MarketingLevel,
        clockEfficiency,
        clockEfficiencyLevel
    ]
    saveListToCookie(valuesToSave, saveName)
}

function minuteUpdate(){
    saveGame('save1')
}

setInterval(minuteUpdate, 60000)

function minuteClockUpdate(){
    if (goldUpgradeBought){
        gold += workers
    }
}

setInterval(minuteClockUpdate, 60000 / (clocks * clockEfficiency))

function gameTab(){
    state = 'game'
    refreshGame()
}

function settingsTab(){
    state = 'settings'
    refreshGame()
}

function applyCss(){
    document.querySelector('style').innerHTML = valueOf('cssCode')
}

applyCss()

function resetCustomCss(){
    document.getElementById('cssCode').value = `.button{

}

.text{
    /* not all textboxes work (working on adding more) */
}`
    applyCss()
}

function clock(){
    clocks++
    money = money - clockPrice
    clockPrice = clockPrice * 2
    setInterval(clockUpdateFPS, 1000 / FPS)
    refreshGame()
}

function makeCopper(){
    copper++
    food--
}

function setSimpleCss(){
    document.getElementById('cssCode').value = `::backdrop,:root{--sans-font:-apple-system,BlinkMacSystemFont,"Avenir Next",Avenir,"Nimbus Sans L",Roboto,"Noto Sans","Segoe UI",Arial,Helvetica,"Helvetica Neue",sans-serif;
    --mono-font:Consolas,Menlo,Monaco,"Andale Mono","Ubuntu Mono",monospace;--standard-border-radius:5px;
    --bg:#fff;--accent-bg:#f5f7ff;--text:#212121;--text-light:#585858;--border:#898EA4;--accent:#0d47a1;
    --code:#d81b60;--preformatted:#444;--marked:#ffdd33;--disabled:#efefef}@media (prefers-color-scheme:dark){::backdrop,:root{color-scheme:dark;
    --bg:#212121;--accent-bg:#2b2b2b;--text:#dcdcdc;--text-light:#ababab;--accent:#ffb300;--code:#f06292;--preformatted:#ccc;
    --disabled:#111}img,video{opacity:.8}}*,::after,::before{box-sizing:border-box}input,progress,select,textarea{appearance:none;
    -webkit-appearance:none;-moz-appearance:none}html{font-family:var(--sans-font);scroll-behavior:smooth}body{color:var(--text);
    background-color:var(--bg);font-size:1.15rem;line-height:1.5;display:grid;grid-template-columns:1fr min(45rem,90%) 1fr;margin:0}body>*{grid-column:2}body>header{background-color:var(--accent-bg);
    border-bottom:1px solid var(--border);text-align:center;padding:0 .5rem 2rem .5rem;grid-column:1/-1}body>header h1{max-width:1200px;
    margin:1rem auto}body>header p{max-width:40rem;margin:1rem auto}main{padding-top:1.5rem}body>footer{margin-top:4rem;padding:2rem 1rem 1.5rem 1rem;
    color:var(--text-light);font-size:.9rem;text-align:center;border-top:1px solid var(--border)}h1{font-size:3rem}h2{font-size:2.6rem;
    margin-top:3rem}h3{font-size:2rem;
    margin-top:3rem}h4{font-size:1.44rem}h5{font-size:1.15rem}h6{font-size:.96rem}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}h1,h2,h3{line-height:1.1}@media only screen and (max-width:720px){h1{font-size:2.5rem}h2{font-size:2.1rem}h3{font-size:1.75rem}h4{font-size:1.25rem}}a,a:visited{color:var(--accent)}a:hover{text-decoration:none}.button,a.button,button,input[type=button],input[type=reset],input[type=submit],label[type=button]{border:none;
    border-radius:var(--standard-border-radius);background-color:var(--accent);font-size:1rem;color:var(--bg);padding:.7rem .9rem;margin:.5rem 0;
    text-decoration:none;font-family:inherit;line-height:normal}.button[aria-disabled=true],button[disabled],input:disabled,select:disabled,textarea:disabled{cursor:not-allowed;background-color:var(--disabled);
    color:var(--text-light)}input[type=range]{padding:0}abbr[title]{cursor:help;text-decoration-line:underline;text-decoration-style:dotted}.button:not([aria-disabled=true]):hover,button:enabled:hover,input[type=button]:enabled:hover,input[type=reset]:enabled:hover,input[type=submit]:enabled:hover,label[type=button]:hover{filter:brightness(1.4)
    cursor:pointer}.button:focus-visible,button:focus-visible:where(:enabled),input:enabled:focus-visible:where([type=submit],[type=reset],[type=button]){outline:2px solid var(--accent);
    outline-offset:1px}header>nav{font-size:1rem;line-height:2;padding:1rem 0 0 0}header>nav ol,header>nav ul{align-content:space-around;align-items:center;display:flex;
    flex-direction:row;flex-wrap:wrap;justify-content:center;list-style-type:none;margin:0;padding:0}header>nav ol li,header>nav ul li{display:inline-block}header>nav a,header>nav a:visited{margin:0 .5rem 1rem .5rem;
    border:1px solid var(--border);border-radius:var(--standard-border-radius);color:var(--text);display:inline-block;padding:.1rem 1rem;
    text-decoration:none}header>nav a.current,header>nav a:hover,header>nav a[aria-current=page]{border-color:var(--accent);color:var(--accent);cursor:pointer}@media only screen and (max-width:720px){header>nav a{border:none;
    padding:0;text-decoration:underline;line-height:1}}aside,details,pre,progress{background-color:var(--accent-bg);border:1px solid var(--border);border-radius:var(--standard-border-radius);
    margin-bottom:1rem}aside{font-size:1rem;width:30%;padding:0 15px;margin-inline-start:15px;float:right}[dir=rtl] aside{float:left}@media only screen and (max-width:720px){aside{width:100%;float:none;
    margin-inline-start:0}}article,dialog,fieldset{border:1px solid var(--border);padding:1rem;border-radius:var(--standard-border-radius);
    margin-bottom:1rem}article h2:first-child,section h2:first-child{margin-top:1rem}section{border-top:1px solid var(--border);border-bottom:1px solid var(--border);
    padding:2rem 1rem;margin:3rem 0}section+section,section:first-child{border-top:0;padding-top:0}section:last-child{border-bottom:0;
    padding-bottom:0}details{padding:.7rem 1rem}summary{cursor:pointer;font-weight:700;padding:.7rem 1rem;margin:-.7rem -1rem;
    word-break:break-all}details[open]>summary+*{margin-top:0}details[open]>summary{margin-bottom:.5rem}details[open]>:last-child{margin-bottom:0}table{border-collapse:collapse;
    margin:1.5rem 0}td,th{border:1px solid var(--border);text-align:start;padding:.5rem}th{background-color:var(--accent-bg);font-weight:700}tr:nth-child(even){background-color:var(--accent-bg)}table caption{font-weight:700;
    margin-bottom:.5rem}input,select,textarea{font-size:inherit;font-family:inherit;padding:.5rem;margin-bottom:.5rem;color:var(--text);background-color:var(--bg);border:1px solid var(--border);border-radius:var(--standard-border-radius);
    box-shadow:none;max-width:100%;
    display:inline-block}label{display:block}textarea:not([cols]){width:100%}select:not([multiple]){background-image:linear-gradient(45deg,transparent 49%,var(--text) 51%),linear-gradient(135deg,var(--text) 51%,transparent 49%);
    background-position:calc(100% - 15px),calc(100% - 10px);background-size:5px 5px,5px 5px;background-repeat:no-repeat;
    padding-inline-end:25px}[dir=rtl] select:not([multiple]){background-position:10px,15px}input[type=checkbox],input[type=radio]{vertical-align:middle;position:relative;
    width:min-content}input[type=checkbox]+label,input[type=radio]+label{display:inline-block}input[type=radio]{border-radius:100%}input[type=checkbox]:checked,input[type=radio]:checked{background-color:var(--accent)}input[type=checkbox]:checked::after{content:" ";
    width:.18em;height:.32em;border-radius:0;position:absolute;top:.05em;left:.17em;background-color:transparent;border-right:solid var(--bg) .08em;border-bottom:solid var(--bg) .08em;font-size:1.8em;
    transform:rotate(45deg)}input[type=radio]:checked::after{content:" ";width:.25em;height:.25em;border-radius:100%;position:absolute;top:.125em;background-color:var(--bg);left:.125em;
    font-size:32px}@media only screen and (max-width:720px){input,select,textarea{width:100%}}input[type=color]{height:2.5rem;padding:.2rem}input[type=file]{border:0}hr{border:none;height:1px;
    background:var(--border);margin:1rem auto}mark{padding:2px 5px;border-radius:var(--standard-border-radius);background-color:var(--marked);color:#000}mark a{color:#0d47a1}img,video{max-width:100%;height:auto;
    border-radius:var(--standard-border-radius)}figure{margin:0;display:block;overflow-x:auto}figcaption{text-align:center;font-size:.9rem;color:var(--text-light);margin-bottom:1rem}blockquote{margin-inline-start:2rem;
    margin-inline-end:0;margin-block:2rem;padding:.4rem .8rem;border-inline-start:.35rem solid var(--accent);color:var(--text-light);font-style:italic}cite{font-size:.9rem;color:var(--text-light);
    font-style:normal}dt{color:var(--text-light)}code,kbd,pre,pre span,samp{font-family:var(--mono-font);color:var(--code)}kbd{color:var(--preformatted);border:1px solid var(--preformatted);
    border-bottom:3px solid var(--preformatted);border-radius:var(--standard-border-radius);padding:.1rem .4rem}pre{padding:1rem 1.4rem;max-width:100%;overflow:auto;color:var(--preformatted)}pre code{color:var(--preformatted);background:0 0;margin:0;
    padding:0}progress{width:100%}progress:indeterminate{background-color:var(--accent-bg)}progress::-webkit-progress-bar{border-radius:var(--standard-border-radius);
    background-color:var(--accent-bg)}progress::-webkit-progress-value{border-radius:var(--standard-border-radius);background-color:var(--accent)}progress::-moz-progress-bar{border-radius:var(--standard-border-radius);
    background-color:var(--accent);transition-property:width;transition-duration:.3s}progress:indeterminate::-moz-progress-bar{background-color:var(--accent-bg)}dialog{max-width:40rem;margin:auto}dialog::backdrop{background-color:var(--bg);
    opacity:.8}@media only screen and (max-width:720px){dialog{max-width:100%;margin:auto 1em}}sub,sup{vertical-align:baseline;position:relative}sup{top:-.4em}sub{top:.3em}.notice{background:var(--accent-bg);border:2px solid var(--border);border-radius:5px;padding:1.5rem;margin:2rem 0}`

    applyCss()
}

console.log('finished config')