
// Create a `scripts/PotteryList.js` module.
// 1. Define and export a `PotteryList` function.
// 1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
// 1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
//    ```html
//    <section class="pottery" id="pottery--1">
//      <h2 class="pottery__shape">Mug</h2>
//      <div class="pottery__properties">
//        Item weighs 3 grams and is 6 cm in height
//      </div>
//      <div class="pottery__price">Price is $20</div>
//    </section>
//    ```
// 1. The `PotteryList` function must then return a single string that contains ALL of the pottery HTML representation.

import { usePottery } from "./PotteryCatalog.js";


  

        export const potteryList = (listObj) => {
            let potteryListHTML = ""
            for (const listObj of usePottery()) {
            potteryListHTML += `
            <section class="pottery" id="${listObj.id}">
            <h2 class="pottery__shape">${listObj.shape}</h2>
            <div class="pottery__properties">
            Item weighs ${listObj.weight} grams and is ${listObj.height} cm in height
            </div>
            <div class="pottery__price">Price is $${listObj.price}</div>
            </section>
              `
    }
      
    return potteryListHTML;
      
}

