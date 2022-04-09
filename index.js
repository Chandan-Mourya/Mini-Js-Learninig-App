//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

let scope = [
    {
        def:"Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible.",
        a:" Global Scope : When you execute a script, the JavaScript engine creates a global execution context. It also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables. ",
        b:" Local Scope : Variables that you declare inside a function are local to that function. They are called Local Variables and can’t be accessed in Global Scope.",
        c:" Block Scope : Variables that you declare inside a block {} using let or const are limited only to that block. "
    }
];


let hosting = [
    {
        def:"Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program",
        a:"It doesn't care about variable values. All it wants to know what variables are present in a program."
    }
];

let constructor = [
    {
        def:"The constructor method is a special method of a class for creating and initializing an object instance of that class.",
        a:"A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
        b:"In an object method, this refers to the object.",
        C:"this is not a variable. It is a keyword. You cannot change the value of this."
    }
]

let prototype = [
    {
        def:"Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
        a:"You should use prototypes if you wish to declare a non-static method of the object. var myObject = function () { }; myObject. prototype. getA = function (){ alert(A); }; myObject.",
        b:"A prototype is an early sample, model, or release of a product built to test a concept or process.",
        c:"It is a term used in a variety of contexts, including semantics, design, electronics, and software programming. A prototype is generally used to evaluate a new design to enhance precision by system analysts and users."
    }
]

localStorage.setItem("scope",JSON.stringify(scope))
localStorage.setItem("hosting" , JSON.stringify(hosting))
localStorage.setItem("constructor" , JSON.stringify(constructor))
localStorage.setItem("prototype" , JSON.stringify(prototype))


var scopedata = JSON.parse(localStorage.getItem("scope"));
var hostingdata = JSON.parse(localStorage.getItem("hosting"));
var constructordata = JSON.parse(localStorage.getItem("constructor"));
var prototypedata = JSON.parse(localStorage.getItem("prototype"));

function display(scope){

    document.querySelector("#showdata").innerHTML = " ";

        
    scope.map(function(el){
        console.log(el.def)

        let ul = document.createElement("ul");
        
        let li1 = document.createElement("li");
        li1.innerHTML=el.def;

        let li2 = document.createElement("li");
        li2.innerHTML=el.a;

        let li3 = document.createElement("li");
        li3.innerHTML=el.b;

        let li4 = document.createElement("li");
        li4.innerHTML=el.c;


        ul.append(li1,li2,li3,li4)
        document.querySelector("#showdata").append(ul);
        

    })


}





function scopeFunction(){
   // console.log("Scope")
    display(scopedata)
}

function hostingFun(){
   // console.log("Hosting")
   display(hostingdata)
}

function constructorFun(){
    //console.log("constructor")
    display(constructordata)
}
function prototypeFun(){
    //console.log("prototype")
    display(prototypedata)
}