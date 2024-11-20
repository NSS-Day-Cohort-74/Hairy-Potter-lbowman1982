import {  makePottery  } from "./PotteryWheel.js"
 import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"// Imports go first



// Make 5 pieces of pottery at the wheel

let greenMug = makePottery("mug", 2, 3)
let greenPlate = makePottery("plate", 4, 5)
let greenBowl = makePottery("bowl", 6, 7)
let greenVase = makePottery("vase", 8, 9)
let greenCup = makePottery("cup", 10, 11)

console.log(greenBowl, greenCup, greenMug, greenPlate, greenVase)
debugger
console.log(firePottery(greenPlate, 1100))
console.log(firePottery(greenMug, 3000))
console.log(firePottery(greenBowl, 4000))
console.log(firePottery(greenVase, 5000))
console.log(firePottery(greenCup, 1500))


// Fire each piece of pottery in the kiln
greenPlate = firePottery(greenPlate, 1100)
greenMug = firePottery(greenMug, 1000)
greenBowl = firePottery(greenBowl, 4000)
greenVase = firePottery(greenVase, 5000)
greenCup = firePottery(greenCup, 1500)
// Determine which ones should be sold, and their price
toSellOrNotToSell(greenPlate)
toSellOrNotToSell(greenMug)
toSellOrNotToSell(greenBowl)
toSellOrNotToSell(greenVase)
toSellOrNotToSell(greenCup)

console.log(greenPlate)
console.log(greenMug)
console.log(greenBowl)
console.log(greenVase)
console.log(greenCup)

console.log(usePottery())
// Invoke the component function that renders the HTML list
console.log(potteryList(usePottery()))


const potteryListHTML = potteryList(usePottery())
const thePottery = document.getElementsByClassName("potteryList")[0]
    thePottery.innerHTML = potteryListHTML



// In the `main.js` module, invoke the `PotteryList` component function. Take its return value and update the inner HTML of the article element you created above. When you start your web server, you should see your non-cracked pottery list appear (_example below_).
