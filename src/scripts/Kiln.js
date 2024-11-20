

export const firePottery = (potteryObj, firedTemp) => { 
     potteryObj.fired = true
     if (firedTemp > 2200) {
         potteryObj.cracked = true
     } else {
         potteryObj.cracked = false
     }
    return potteryObj   
     }
    

    


    
    

