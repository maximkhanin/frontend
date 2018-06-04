import { user } from './user.js';

function showMessage() {
    alert('Hello ' + user.name);
}

export function confirmAge(){
    var age = prompt("What is your age?");
    
    if(age==="18"){
        showMessage();
    }
    else{
        location.href = 'https://www.youtube.com/watch?v=OK03o3BHafk';
    }
}