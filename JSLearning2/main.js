function myPrint(n){
    for(var i=0; i<n; i++){
        document.write("hello world! <br />");
    }
}

function myAdd(num1, num2){
    alert(num1+num2);
}

function mySum(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    alert(sum);
}

myPrint(3);

myAdd(9,5);

mySum(1,2,3,4,5,6,7);
