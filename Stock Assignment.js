function maxProfit(arr) {
	let minIdx = 0;
    let maxIdx = 1;
    let currMin = 0;
    let maxProfit = 0;

    if(arr.length < 2) {
        throw new Error("2 Time periods needed minimum to buy and sell the stocks");
    }
    
    for(let i = 1; i < arr.length; i++) {

        // Calculating the new current minimum 
        if(arr[i] < arr[currMin]) { 
        	currMin = i;
        }
        
        // Calculating the new best profit
        if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }

    }

    maxProfit  = arr[maxIdx] - arr[minIdx];
    return maxProfit;
}
