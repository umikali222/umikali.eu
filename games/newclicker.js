function setup(){
    hide('settingsdiv')
    show('gamediv')

    game = loadCookie()

    if (game == null){
        game = defaultgamestate
    }

    setconstants()
    refreshgame()
}

function action(requestedaction){
    switch (requestedaction){
        case 'mine':
            game.ores += game.oresperclick // mining
            break
        case 'melt':
            game.ores -= game.oresperclick
            game.moltengold += game.oresperclick // melting
            break
        case 'makebars':
            game.moltengold -= game.barsperclick // making bars
            game.goldbars += game.barsperclick
            break
        case 'upgradeorestorage':
            game.money -= game.orestorageupgradecost
            game.orestorage *= 2
            game.orestorageupgradecost *= 1.2 // upgrade ore storage
            break
        case 'upgrademoltengoldstorage':
            game.money -= game.moltengoldstorageupgradecost
            game.moltengoldstorage *= 2
            game.moltengoldstorageupgradecost *= 1.2 // upgrade molten gold storage
            break
        case 'upgradegoldbarstorage':
            game.money -= game.goldbarstorageupgradecost
            game.goldbarstorage *= 2
            game.goldbarstorageupgradecost *= 1.2 // upgrade gold bar storage
            break
        case 'upgradepickaxe':
            game.money -= game.pickaxeupgradecost
            game.oresperclick = Math.round(game.oresperclick * 1.5)
            game.pickaxeupgradecost *= 2 // upgrade pickaxe
            break
        case 'upgradefurnace':
            game.money -= game.furnaceupgradecost
            game.moltengoldperclick = Math.round(game.moltengoldperclick * 1.5) // upgrade furnace
            game.furnaceupgradecost *= 2
            break
        case 'upgrademold':
            game.money -= game.moldupgradecost
            game.barsperclick = Math.round(game.barsperclick * 1.5)
            game.moldupgradecost *= 2 // upgrade mold
            break
        case 'buyautominer':
            game.money -= game.autominercost
            game.autominers += 1
            game.autominercost *= 1.2
            break
        case 'buyautofurnace':
            game.money -= game.autofurnacecost
            game.autofurnaces += 1
            game.autofurnacecost *= 1.2
            break
        case 'buyautomold':
            game.money -= game.automoldcost
            game.automolds += 1
            game.automoldcost *= 1.2
            break
    }

    refreshgame()
}

function makeNumberReadable(number) {
    if (typeof number != 'number') {
        return number
    }
    
    var numStr = String(number)
    var result = ''

    for (var i = numStr.length - 1, count = 0; i >= 0; i--, count++) {
        if (count === 3) {
            result = "'" + result
            count = 0
        }
        result = numStr[i] + result
    }
  
    return result
}

function updatetextcontent(id, value, floor=true){
    if(floor){
        document.getElementById(id).textContent = makeNumberReadable(Math.floor(value))
    }else{
        document.getElementById(id).textContent = makeNumberReadable(value)
    }
}

function enablebutton(id){
    document.getElementById(id).removeAttribute('disabled')
}

function disablebutton(id){
    document.getElementById(id).setAttribute('disabled', 'disabled')
}

function disableenablebutton(id, enabled){
    if (enabled){
        enablebutton(id)
    }else{
        disablebutton(id)
    }
}

function show(id){
    document.getElementById(id).style.display = 'block'
}

function hide(id){
    document.getElementById(id).style.display = 'none'
}

function showhide(id, condition){
    if (condition){
        show(id)
    }else{
        hide(id)
    }
}

function refreshgame(){
    // update main variables
    updatetextcontent('ores', game.ores)
    updatetextcontent('moltengold', game.moltengold)
    updatetextcontent('goldbars', game.goldbars)

    updatetextcontent('money', game.money)

    updatetextcontent('goldprice', game.goldprice)

    // update storage
    updatetextcontent('orestorage', game.orestorage)
    updatetextcontent('moltengoldstorage', game.moltengoldstorage)
    updatetextcontent('goldbarstorage', game.goldbarstorage)

    // update storage upgrade costs
    updatetextcontent('orestorageupgradecost', game.orestorageupgradecost)
    updatetextcontent('moltengoldstorageupgradecost', game.moltengoldstorageupgradecost)
    updatetextcontent('goldbarstorageupgradecost', game.goldbarstorageupgradecost)

    // update values per click upgrade costs
    updatetextcontent('pickaxeupgradecost', game.pickaxeupgradecost)
    updatetextcontent('furnaceupgradecost', game.furnaceupgradecost)
    updatetextcontent('moldupgradecost', game.moldupgradecost)

    // update other amounts
    updatetextcontent('autominers', game.autominers)
    updatetextcontent('autofurnaces', game.autofurnaces)
    updatetextcontent('automolds', game.automolds)

    updatetextcontent('autominercost', game.autominercost)
    updatetextcontent('autofurnacecost', game.autofurnacecost)
    updatetextcontent('automoldcost', game.automoldcost)


    // update values per click
    updatetextcontent('oresperclick', game.oresperclick)
    updatetextcontent('moltengoldperclick', game.moltengoldperclick)
    updatetextcontent('goldbarsperclick', game.barsperclick)


    // enable or disable manufacturing buttons
    disableenablebutton('minebutton', game.ores + game.oresperclick <= game.orestorage)
    disableenablebutton('meltbutton', game.ores - game.moltengoldperclick >= 0 & game.moltengold + game.moltengoldperclick <= game.moltengoldstorage)
    disableenablebutton('makebarsbutton', game.moltengold - game.barsperclick >= 0 & game.goldbars + game.barsperclick <= game.goldbarstorage)

    // disable or enable per click upgrade buttons
    disableenablebutton('pickaxeupgradebutton', game.money >= game.pickaxeupgradecost)
    disableenablebutton('furnaceupgradebutton', game.money >= game.furnaceupgradecost)
    disableenablebutton('moldupgradebutton', game.money >= game.moldupgradecost)

    // enable or disable sell gold buttons
    disableenablebutton('sell1goldbarbutton', game.goldbars >= 1)
    disableenablebutton('sell10goldbarbutton', game.goldbars >= 10)
    disableenablebutton('sell100goldbarbutton', game.goldbars >= 100)
    disableenablebutton('sellallgoldbarbutton', game.goldbars > 0)

    // enable or disable storage upgrade buttons
    disableenablebutton('orestorageupgradebutton', game.money >= game.orestorageupgradecost)
    disableenablebutton('moltengoldstorageupgradebutton', game.money >= game.moltengoldstorageupgradecost)
    disableenablebutton('goldbarstorageupgradebutton', game.money >= game.goldbarstorageupgradecost)

    disableenablebutton('buyautominerbutton', game.money >= game.autominercost)
    disableenablebutton('buyautofurnacebutton', game.money >= game.autofurnacecost)
    disableenablebutton('buyautomoldbutton', game.money >= game.automoldcost)


    // update upgrade buttons
    updatebutton('autominerupgradebutton', game.autominerupgradebuttonvisible, game.money >= gameconstants.autominerupgradecost)
    updatebutton('autofurnaceupgradebutton', game.autofurnaceupgradebuttonvisible, game.money >= gameconstants.autofurnaceupgradecost)
    updatebutton('automoldupgradebutton', game.automoldupgradebuttonvisible, game.money >= gameconstants.automoldupgradecost)


    // show or hide divs
    showhide('moneydiv', game.moneydivvisible)
    showhide('automationdiv', game.automationdivvisible)
    showhide('upgradesdiv', game.upgradesdivvisible)

    showhide('autominerdiv', game.autominerdivvisible)
    showhide('autofurnacediv', game.autofurnacedivvisible)
    showhide('automolddiv', game.automolddivvisible)
}

function sellgoldbars(amount){
    if (amount != 'all'){
        game.goldbars -= amount
        game.money += game.goldprice * amount
    }else{
        game.money += game.goldprice * game.goldbars
        game.goldbars = 0
    }

    refreshgame()
}

function loadCookie() {
    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=')
        if (name === 'newclickersave') {
            return JSON.parse(decodeURIComponent(value))
        }
    }
    return null
}

function saveCookie(jsonString) {
    document.cookie = `newclickersave=${encodeURIComponent(jsonString)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`
}

function switchtogame(){
    hide('settingsdiv')
    show('gamediv')
}

function switchtosettings(){
    hide('gamediv')
    show('settingsdiv')
}

function resetgame(){
    game = defaultgamestate

    refreshgame()
}

function upgrade(id){
    switch (id){
        case 'autominerupgrade':
            game.money -= gameconstants.autominerupgradecost
            game.automationdivvisible = true
            game.autominerdivvisible = true
            game.autominerupgradebuttonvisible = false
            break
        case 'autofurnaceupgrade':
            game.money -= gameconstants.autofurnaceupgradecost
            game.automationdivvisible = true
            game.autofurnacedivvisible = true
            game.autofurnaceupgradebuttonvisible = false
            break
        case 'automoldupgrade':
            game.money -= gameconstants.automoldupgradecost
            game.automationdivvisible = true
            game.automolddivvisible = true
            game.automoldupgradebuttonvisible = false
            break
    }

    draw()
}

function updatebutton(id, visibility, buttonstate){
    if (visibility){
        show(id)

        if (buttonstate){
            enablebutton(id)
        }else{
            disablebutton(id)
        }
    }else{
        hide(id)
    }
}


function minuteinterval(){
    game.goldprice = (Math.random() * (game.goldpricehigh - game.goldpricelow)) + game.goldpricelow

    saveCookie(JSON.stringify(game))

    refreshgame()
}

function framerateinterval(){
    for (i=0;i<game.autominers;i++){
        if (game.ores + (game.autominerorespersecond / FPS) <= game.orestorage){
            game.ores += game.autominerorespersecond / FPS
        }else{
            break
        }
    }

    for (i=0;i<game.autofurnaces;i++){
        if (game.moltengold + (game.autofurnacemoltengoldpersecond / FPS) <= game.moltengoldstorage){
            game.moltengold += game.autofurnacemoltengoldpersecond / FPS
            game.ores -= game.autofurnacemoltengoldpersecond / FPS
        }else{
            break
        }
    }

    for (i=0;i<game.automolds;i++){
        if (game.goldbars + (game.automoldbarspersecond / FPS) <= game.goldbarstorage){
            game.goldbars += game.automoldbarspersecond / FPS
            game.moltengold -= game.automoldbarspersecond / FPS
        }else{
            break
        }
    }


    // check for conditions
    if (game.goldbars > 0){
        game.moneydivvisible = true
    }

    if (game.money >= gameconstants.autominerupgradecost & !game.autominerdivvisible){
        game.autominerupgradebuttonvisible = true
        game.upgradesdivvisible = true
    }

    if (game.money >= gameconstants.autofurnaceupgradecost & !game.autofurnacedivvisible){
        game.autofurnaceupgradebuttonvisible = true
        game.upgradesdivvisible = true
    }

    if (game.money >= gameconstants.automoldupgradecost & !game.automolddivvisible){
        game.automoldupgradebuttonvisible = true
        game.upgradesdivvisible = true
    }


    refreshgame()
}


function setconstants(){
    updatetextcontent('autominerupgradecost', gameconstants.autominerupgradecost)
    updatetextcontent('autofurnaceupgradecost', gameconstants.autofurnaceupgradecost)
    updatetextcontent('automoldupgradecost', gameconstants.automoldupgradecost)
}













// setup the game

const gameconstants = {
    autominerupgradecost: 500,
    autofurnaceupgradecost: 1000,
    automoldupgradecost: 5000
}

const defaultgamestate = {
    ores: 0,
    moltengold: 0,
    goldbars: 0,
    oresperclick: 1,
    moltengoldperclick: 1,
    barsperclick: 1,
    orestorage: 100,
    moltengoldstorage: 100,
    goldbarstorage: 100,
    goldpricehigh: 35,
    goldpricelow: 10,
    goldprice: 20,
    money: 0,
    orestorageupgradecost: 500,
    moltengoldstorageupgradecost: 500,
    goldbarstorageupgradecost: 500,
    pickaxeupgradecost: 1000,
    furnaceupgradecost: 1000,
    moldupgradecost: 1000,
    automationdivvisible: false,
    moneydivvisible: false,
    upgradesdivvisible: false,

    // autominers
    autominers: 0,
    autominercost: 500,
    autominerdivvisible: false,
    autominerorespersecond: 1,
    autominerupgradebuttonvisible: false,

    // autofurnaces
    autofurnaces: 0,
    autofurnacecost: 1000,
    autofurnacedivvisible: false,
    autofurnacemoltengoldpersecond: 1,
    autofurnaceupgradebuttonvisible: false,

    // automolds
    automolds: 0,
    automoldcost: 5000,
    automolddivvisible: false,
    automoldbarspersecond: 1,
    automoldupgradebuttonvisible: false
}

let game = defaultgamestate

const FPS = 60

setup()


setInterval(framerateinterval, 1000/FPS);

setInterval(minuteinterval, 60000)