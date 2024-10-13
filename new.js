const newValue = document.getElementById("player-container");

newValue.getAttribute("class");

newValue.classList.add("newClass");
console.log(newValue);

const title = document.getElementById("shanto");
title.setAttribute('title', 'shanto rer dekhete chai')

console.log(title.innerText);

const title = document.getElementById('cricket-team');
title.innerHTML = `
<ul>
    <li>this is form js</li>
    <li>this is second form js</li>    
    <li>this is third form js</li>    

</ul>
`
console.log(title.innerHTML)

const newVariable = docuemnt.getElementById("shanto")

newVariable.classList.add('first-list')

const dynamicStyle = docuemnt.getElementById("mayer-dowa");
console.log(dynamicStyle);

dynamicStyle.style.color = "red";
dynamicStyle.style.backgroundColor = "pink" ; 
dynamicStyle.style.backgroundColor = "yellow";
dynamicStyle.style.padding = "50px";
dynamicStyle.style.maring = "0 50px";
dynamicStyle.style.border = "50px solid green";

// console.log(dynamicStyle);

const para = document.createElement('p');
console.log(para);