/*
Write an algorithm to group a list of words into anagrams.
For example, if the input was
['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
the output should be:
[['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
*/
//
/*

let words = []
for ()
- [1] sort
- aest
- [2] insert key
---> key exists
just push word
---> key doesnt exist
add key & push word


let mainkeys;
for (loop through keys)
---> for EACH key, push the keysay in value in the mainkeys
n = []
 O(n) + O(n)

*/
const HashMap = require('./hashMap');


function anything(words) {
  let keys = [];
  let hashMap = new HashMap();

  for(let index in words) {
    let word = words[index];
    console.log('the word:', words[index]);
    let sorted = words[index].split('').sort().join('');

    try {
      //if it exists
      //  push the word
      //hashMap.get(sorted) = []
      console.log('the key: ', sorted);
      console.log('whats in hash for each key', hashMap.get(sorted));
      console.log('array that is returned', hashMap.get(sorted));
      console.log('type of', typeof(hashMap.get(sorted)));

      let oldArr =  hashMap.get(sorted);
      let newArr = [...oldArr, word]
      hashMap.set(sorted, newArr);
    }
    catch(err) {
      //if it doesnt exist
      //  create key, add word to arr
      console.log('key doesnt exist, add it!');
      let arr = [];
      arr.push(words[index]);
      hashMap.set(sorted, arr);

      keys.push(sorted);
    }
  }

  console.log(hashMap);

  let outputArr = [];
  //.get() = [word, word]
  //push(.get())
  console.log('keys', keys);
  for(let index in keys) {
    outputArr.push(hashMap.get(keys[index]));
  }
  //
  return outputArr;
}

function anotherOne(words) {
  return words.map(word => word.sort());
}

console.log(anything(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
//anotherOne(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);
