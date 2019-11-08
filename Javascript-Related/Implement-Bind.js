//Implement .bind()

console.log('hello')

Function.prototype.bind = function(whoIsCallingMe, ...args){
  console.log(args)
  const self = this;
  return function(){
    return self.apply(whoIsCallingMe, args);
  };
}



