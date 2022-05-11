
function printResult(val){
    console.log("This is the result of the value:", val);
}

function myAdder (num1, num2, callBack=printResult) {            //callBack is a function
    const result = num1 + num2
    callBack(result)
};

myAdder(4,4)
myAdder(20, 5, function (val){                            //passes a function
console.log ('This is the result again:', val)
});

myAdder(10, 5, function (val) {                            //passes a function
    console.log('This is the result:', val)
});