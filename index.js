// Code your solutions in this file
   
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy brithday to me!`);
}

function writeCards(nameList,eventName) {
    var arrMessages = [];
    for (let i = 0; i < nameList.length; i++) {
        arrMessages[i] = `Thank you, ${nameList[i]}, for the wonderful ${eventName} gift!` ;
    }
    return arrMessages;
}

function countDown (provideNumber) {
    let i = provideNumber;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}