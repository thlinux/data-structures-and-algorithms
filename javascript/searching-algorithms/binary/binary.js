//O(log n)
//accepts a sorted array and a value
//create a start pointer at start of array, and a end pointer at end of array
//while the left pointer comes before the right pointer
    //create a middle pointer
    //if you find the value wanted, return index
    //if value is too small, move start pointer up
    //if value is too big, move end pointer down
//if value never found, return -1

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== val && start <= end) {
        if(val < arr[middle]) end = middle - 1; 
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([2,5,6,7,8,9], 9))