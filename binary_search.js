let array = [40, 100, 1, 5, 25, 10];

// Before applying binary search we will sort the array.
let sorted_array = array.sort(function(a,b) {
    return a-b
});
console.log(sorted_array)

// after sort the array we will apply binary search 
function binary_search(arr, value){
    let high = arr.length-1
    let low = 0
    let mid = 0

    while(low <= high){
        mid = Math.floor((high +low) /2)
        if(arr[mid] == value){
            return arr[mid]
        }else if(value > arr[mid]){
            low = mid + 1
        }else{
            high = mid-1
        }
    }
    return -1;
}

// we will find 7 number from the sorted array. (if that number is not available in this list it should be return -1)
let data = binary_search(sorted_array, 40);
console.log(data)


