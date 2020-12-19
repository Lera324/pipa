/*
let a = [1, 2, 3, 1, 2, 3];
let b = 2;
bababoy (a, b);

function bababoy (a, b) {
    let res = [];
    let j = 0;
    let k = 0;
    for (let i = 0; i < a.length; i++) {
        if (k === -1) {
            break;
        }
        res.push(a.indexOf(b, j));
        j = a.indexOf(b,j)+1;
        k= a.indexOf(b,j);

    }
    console.log(res);
    return res;
}
*/
function palindrome(str) {

    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {

        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            return false;
        }

    }
    return true;
}
palindrome('');

/*
class Animal {
    constructor (color, legs, blood, tail){
        this.color = color
        this.legs = legs
        this.blood = blood
        this.tail = tail
    }
    getFullName(){
        return this.color + ' ' + this.legs + ' ' + this.blood + ' ' + this.tail
    }
}

class Dog extends Animal {
    constructor (fidelity, color, legs, blood, tail) {
        super(color, legs, blood, tail)
        this.fidelity = fidelity
    }
    getFullName(){
        return this.fidelity
    }
}

let dog = new Dog ('yes', 'white', '4', 'red', 'yes')
dog.getFullName()


class Cat extends Animal {
    constructor (tigidick, color, legs, blood, tail) {
        super (color, legs, blood, tail)
        this.tigidick = tigidick
    }
    getFullName(){
        return this.tigidick
    }

}
let cat = new Cat('yes', 'black', '4', 'red', 'yes')
 cat.getFullName()
 */

function pow (x, n) {
    let result = x;

    for (let i=1; i<n; i++){
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n<1){
    alert('Степень ${n} не поддерживается');
} else {
    alert (pow(x, n));
}
