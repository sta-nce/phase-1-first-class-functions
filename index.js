const { spy } = require("chai");

function receivesAFunction(callback){
   return callback ();
}
function returnsANamedFunction(){
    let function1 = function(){

    }
    return function1;
}
function returnsAnAnonymousFunction (){
    return function () {

    }
}