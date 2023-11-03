var arr = [3,2,6];
push(9);
console.log(arr);
function push(element) {
    arr[arr.length] = element; 
    
}


console.log(arr)
arr = pop()
console.log(arr)
function pop() {
    const poppin = []

    for(let i = 0; i < arr.length - 1; i++){
        poppin[i] = arr[i]
    }
    
    return poppin

   
}
    
    toString()

function toString() { 
    let result = ''; 
    for (let i = 0; i < arr.length; i++) {
       result += arr[i]+",";
    }
    console.log(result)
}
    
join("+")

function join(separator) {
    let result = ''; 
    for (let i = 0; i < arr.length; i++) {
        
        result += arr[i]+ separator;
    }
   console.log(result);

}

let merged = concat([1, 2, 3], [4, 5, 134 ])
console.log(merged)
function concat(arr1, arr2) {
    const concatenatedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        concatenatedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        concatenatedArray.push(arr2[i]);
    
         
    }

    return concatenatedArray;
}

