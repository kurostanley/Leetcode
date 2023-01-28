const isOneWithLowestVision = (number) => {
    const numS = `${number}`
    let result = [];
    // do 2 pointer
    let j = 0;
    while(j < numS.length){
        let sum = 0;
        // look left 
        // the i should between j and j - numS[j] and bigger than 0
        let i = j - 1;
        while(i >= 0 && i >= j - Number(numS[j])){
            //console.log(i, numS[i])
            sum = sum + Number(numS[i])
            i--;
        }
        // look right
        i = j + 1
        while(i < numS.length && i <= j + Number(numS[j])){
            console.log(j + Number(numS[j]))
            console.log(i, numS[i])
            sum = sum + Number(numS[i])
            i++
        }
        result.push(sum);
        j++
    }
    console.log(result);
    return result
}

isOneWithLowestVision(42)