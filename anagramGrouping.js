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
  const keys = [];
  const hashMap = new HashMap();

  for(const index in words) {
    const word = words[index];
    console.log('the word:', words[index]);
    const sorted = words[index].split('').sort().join('');

    try {
      //if it exists
      //  push the word
      //hashMap.get(sorted) = []
      console.log('the key: ', sorted);
      console.log('whats in hash for each key', hashMap.get(sorted));
      console.log('array that is returned', hashMap.get(sorted));
      console.log('type of', typeof(hashMap.get(sorted)));

      const oldArr =  hashMap.get(sorted);
      const newArr = [...oldArr, word];
      hashMap.set(sorted, hashMap.get(sorted).push('1'));
    }
    catch(err) {
      //if it doesnt exist
      //  create key, add word to arr
      console.log('key doesnt exist, add it!');
      const arr = [];
      arr.push(words[index]);
      hashMap.set(sorted, arr);

      keys.push(sorted);
    }
  }

  console.log(hashMap);

  const outputArr = [];
  //.get() = [word, word]
  //push(.get())
  console.log('keys', keys);
  // for(let index in keys) {
  //   outputArr.push();
  // }
  //
  // return outputArr;
}

function anotherOne(words) {
  return words.map(word => word.sort());
}

console.log(anything(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
//anotherOne(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);
