let elem=document.getElementById('firstcontainer');
console.log(elem);
let elemClass=document.getElementsByClassName('container');
console.log(elemClass)
// elemClass[0].style.background="green";
// 0 index: first element

elemClass[0].classList.add("bg-primary")
// adds class bg-primary to elemclass[0]
// it will still b added even if not defined
// first remove green from above

elemClass[0].classList.add('color')
// changes color of p in elemclass[0]

// elemClass[0].classList.remove('color')
// would remove color

let elemClass1=elemClass[0].innerHTML;
console.log(elemClass1);
// gives html

let elemClass2=elemClass[0].innerText;
console.log(elemClass2);
// gives text only

// CREATE AN ELEMENT
tn=document.getElementsByTagName('div')
console.log(tn);
createdElement=document.createElement('p')
createdElement.innerText="this is a created para"
tn[0].appendChild(createdElement)
// /////

// REPLACES CREATED ELEMENT BY NEWLY CREATED ONE
createdElement2=document.createElement('b')
// b makes it bold
createdElement2.innerText="this is a created and then replaced para"
tn[0].replaceChild(createdElement2,createdElement)

// removeChild(Element)
// removes an element

// another DOM methods
console.log(document.location);
console.log(document.title);
console.log(document.scripts);
console.log(document.links);
console.log(document.images);

// SELECTING USING QUERY
sel=document.querySelector('.container')
console.log(sel);
// selects by css selector(only first elemnt)
// different from getelementbyid or class as it is used to select more complex selectors

sel=document.querySelectorAll('.container')
console.log(sel);
// selects all container elements


// EVENTS IN JS
function clicked(){
    console.log("button was clicked");
}
window.onload=function(){
    console.log("document was loaded");
}
// can b used to do something when document is loaded..as BELOW

firstcontainer.addEventListener('click',function(){
    console.log("click hua");
})
// on event 'click, apply this function

// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse in");
// })
// mouseover: event to hover on it

// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out");
// })

firstcontainer.addEventListener('mouseup',function(){
    console.log("mouse up when clicked on container");
})
// when a button is released on an element
firstcontainer.addEventListener('mousedown',function(){
    console.log("mouse held when clicked on container");
})
// mouse button is hold on a container

// TO GET TEXT ON CLICKING ON AN ELEMENT
firstcontainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>this is text after clicking</b>"
    // innerhtml replaces the original
    console.log("click hua");
})
// TO RETAIN ORIGINAL TEXT AFTER RELEASING THE MOUSE
var prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// original html stored
firstcontainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML= prevHTML
    console.log("mouse held when clicked on container");
})


// LOCAL STORAGE
// every domain has its own local storage
localStorage.setItem('name','ifrah');
// key name has ifrah stored
console.log(localStorage);
l=localStorage.getItem('name')
// value for key name will b acquired
console.log(l);

localStorage.removeItem('name')
// removes an item
localStorage.clear();
// clears entire local storage
// don't store large or important and sensitive data in local storage


// JSON
obj= {name:"ifra",length:1, a:{this:"that"}}
// JSON doesn't support single quote..it will use backslash to escape it..to make 'this' inside quotes
j=JSON.stringify(obj)
console.log(j);
// strings are easily transferable

parsed=JSON.parse(j)
// parse converts string to object,,so takes string
console.log(parsed);