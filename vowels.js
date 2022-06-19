const text = document.getElementById('text');
const btn = document.getElementById('btn');
const display = document.getElementById('display');
let count = 0;
let vowels =['a','e','i','ı','o','ö','u','ü'];


btn.addEventListener('click', () =>{
    const wordChar = text.value.toLowerCase().split('');
    console.log(wordChar);
    count = wordChar.filter(i => vowels.includes(i)).length ;
    display.innerHTML = `There are ${count} vowels in <span>${text.value}</span>`;

    });