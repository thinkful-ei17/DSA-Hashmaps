const hashMap = require('./hashMap');

const palPerm = new hashMap();

const palPermFinder = (string) => {
  string.split('').forEach((letter) => {
    try {
      palPerm.set(letter, palPerm.get(letter)+1);
    }
    catch(err) {
      console.log('error thrown');
      palPerm.set(letter, 1);
    }
  });
};

palPermFinder('racecar');
console.log(palPerm);


// can never have more than 1 odd number
// odd number cant be greater than 1

// if num > 1 {
// return num % 2 === 0;
//} 



//a: 1
//a: 2

// a: 2
// c: 2
// e: 1
// r: 2