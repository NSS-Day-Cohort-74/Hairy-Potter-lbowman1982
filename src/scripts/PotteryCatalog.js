

// 1.  define potteryAry
// 2.  set it = [] an empty array
export const potteryArry = []

// 3.  define and export a function toSellOrNotToSell (should a piece of pottery be sold or not?)

export const toSellOrNotToSell = (toSellObj)=> {
         if (toSellObj.weight >= 6 && toSellObj.cracked === false) {
            toSellObj.price = 40
        potteryArry.push(toSellObj)
    }
      else if (toSellObj.weight < 6 && toSellObj.cracked === false) {
          toSellObj.price = 20
          potteryArry.push(toSellObj)
        }
        return toSellOrNotToSell
    }
export const usePottery = () => {
  const sliceArry = potteryArry.slice()  
return sliceArry
}

// 4.  if weight is more or equal to 6 (add price property with value of 40)
// 5.  if the weight is is less than 6 (the price value is 20)
// 6.  if the piece of pottery is cracked, do not add a price property
// 7.  if the pottery is not cracked, add the object to the module level array of items to be sold
// 8.  return the altered object 
// 9.  define and export a function names usePottery that returns a copy of the array of items to be sold






























