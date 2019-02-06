//O(n)
//Loop over the longer string
//Loop over the shorter string
//if chars DONT match, break out of inner loop
//if chars DO match, keep going
//if you complete inner loop and find a match, ++ the counter
//return counter

function naiveSearch(long, short) {
    let count = 0;
    for(let i=0; i<long.length; i++){
        for(let j=0; j<short.length; j++){
            if(short[j] !== long[i + j]) break
            if(j === short.length - 1) count++
        }
    }
    return count;
}

console.log(naiveSearch('lorie loled', 'lo'))