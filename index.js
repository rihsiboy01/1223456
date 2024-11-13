
// let a = document.querySelector('h1');  
// let l = document.querySelector('h2');  
// let s = document.querySelector('h3');  


// let b = prompt('Ismingizni kiriting');        
// let g = prompt('Familiyangizni kiriting');    
// let d = prompt('Yoshingizni kiriting');       

// a.innerHTML = b;  
// l.innerHTML = g;  
// s.innerHTML = d; 



let a = document.querySelector('h1');

let randomNum = Math.round(Math.random() * 100);


a.innerHTML = randomNum;


a.style.marginLeft = '900px';
a.style.marginTop = '500px';
a.style.width = '100px';
a.style.fontSize = '100px';


if (randomNum > 50) {
    a.style.background = 'blue';
} else {
    a.style.background = 'yellow';
}
