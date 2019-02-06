//O()
//start looping from with a variable called i the end of the array to the beginning
//start an inner loop with a variable called j from the beginning until i - 1
//if arr[j] is greater than arr[j + 1], swap those two values
//return sorted array

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => { [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] }
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j+1)
                noSwaps = false;
            }
        }
        if(noSwaps) break
    }
    return arr;
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]))