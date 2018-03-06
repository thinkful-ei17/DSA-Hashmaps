const hashMap = require('./hashMap');

const palPerm = new hashMap();

const palPermFinder = (string) => {
  const arr = [];
  string.toLowerCase().replace(/[^a-z0-9]/g, '').split('').forEach((letter) => {
    try {
      palPerm.set(letter, palPerm.get(letter)+1);
    }
    catch(err) {
      palPerm.set(letter, 1);
      arr.push(letter);
      //{letter: value}
    }
  });

  let oddOcc = 0;
  for (index in arr) {
    if (palPerm.get(arr[index]) % 2 !== 0){
      oddOcc++;
    }
    if (oddOcc > 1){
      return false;
    }
  }
  return true;
};

console.log(palPermFinder('race      C.ar'));
//console.log(palPerm);


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
