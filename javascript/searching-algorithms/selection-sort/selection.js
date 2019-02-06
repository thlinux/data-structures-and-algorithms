//O(n^2)
//store the first element as the smallest value so far
//compare this item to the next item in array until smaller number found
//if smaller number found, designate that smaller number to be the new minimum and continue to end of array
//if minimum is not the value initially bgan with, swap the two values
//repeat until array is sorted

function selectionSort(arr){
    const swap = (arr, idx1, idx2) => { [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] }
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) lowest = j; 
        }
        if(i !== lowest) swap(arr, i, lowest)

    }
    return arr;
}

console.log(selectionSort([8,1,2,3,4,5,6,7]))