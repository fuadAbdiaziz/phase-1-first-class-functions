const callBack=function(){
    return "Hi there";
};
const receivesAFunction=function(callBack){
    return  callBack();
};
function receivesAFunction(){
    function namedFunction(){
        console.log('Named function');
    }
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    let x= function(){
        return 'anonymous function';
    };
    return x;
}