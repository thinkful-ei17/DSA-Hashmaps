const hashMap = require('./hashMap');

const palPerm = new hashMap();

const palPermFinder = (string) => {
  string.split('').sort().map((letter) =>{
    console.log(letter);
  });
};

palPermFinder('dad');
