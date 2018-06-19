function filterArray(numbers, min, max){
    let result = [];
    if(isNaN(min) || isNaN(max) || min > max){
        return "Invalid Data"
    }
    for (let i = 0; i < numbers.length; i++) {
        if(!isNaN(numbers[i]) && parseFloat(numbers[i]) > parseFloat(min) && parseFloat(numbers[i]) < parseFloat(max)){
            result.push(numbers[i])
        }
    }
    return result
}

let result = filterArray([1, 5, 9, 21, 105,-5, 5], 1, 100);

console.log(result);

function isEmpty(str) {
    return (!str || 0 === str.length);
}

console.log(isEmpty());
console.log(isEmpty(1));

function arrayOfKeys(value){
    let result = [];
    
    for(key in value){
        result.push(key);
    }

    return result;
}

let anotherPerson = {
    firstName: 'Karl',
    lastName: 'Ericsson',
};

console.log(arrayOfKeys(anotherPerson));
console.log(arrayOfKeys([1, 5, 9, 21, 105,-5, 5]));
