let arr = [1,4,8,9,4,23,6,82,76,34,78,31,75,21,56,34]

// we will search 6 element from this list in which index it is.
let temp = 6
for(let index = 0; index < arr.length; index++){
    if(arr[index] == temp){
        console.log('The element of ' + index + ' ' + 'index')
    }
}




// we will search 100 element from this list which is not there
let arr = [1,4,8,9,4,23,6,82,76,34,78,31,75,21,56,34]
let temp = 100
let varx = 0
for(let index = 0; index < arr.length; index++){
    if(arr[index] == temp){
        varx = varx + 1
    }
}

// if 100 element is not there it should be give msg to us element not found
if(varx == 0){
    console.log('Element not found')
}
