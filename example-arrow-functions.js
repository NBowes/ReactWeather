var names = ["nate", "vic", "perry", "liam"];

var person = {
    name: "Nathen",
    greet: function(){
        names.forEach((name) =>{
            console.log(this.name + " says what's up " + name)
        })
    }
}
person.greet();

//challenge - make add an arrow function

function add(a,b){
    return a + b
}

var addExpression = (a,b) => a+b;
console.log(addExpression(1,2));

var addArrow = (a,b) => {
    return a + b;
}
console.log(addArrow(2,5));