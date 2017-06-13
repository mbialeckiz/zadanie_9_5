var buttons = document.getElementsByClassName('btn');
console.log(buttons);

console.log(buttons.length);

for(var i=0; i<buttons.length; i++) {
  console.log(buttons[i].innerText);
}