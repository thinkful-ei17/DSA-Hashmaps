/*

*/

class HashMap {
  constructor(initialCapacity=8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
  }


  static _hashString(string) {
    let hash = 5381;
    for (let i=0; i<string.length; i++) {
        hash = (hash << 5) + hash + string.charCodeAt(i);
        hash = hash & hash;
    }
    return hash >>> 0;



  }

  get(key) {
      const index = this._findSlot(key);
      if (this._slots[index] === undefined) {
          throw new Error('Key error');
      }
      return this._slots[index].value;
  }

  set(key, value) {
      //console.log('Setting!');
      const loadRatio = (this.length + 1) / this._capacity;
      //console.log('boolean statement:', loadRatio, '>', HashMap.MAX_LOAD_RATIO);

      if (loadRatio > HashMap.MAX_LOAD_RATIO) {
          this._resize(this._capacity * HashMap.SIZE_RATIO);
      }

      const index = this._findSlot(key);
      this._slots[index] = {
          key,
          value
      };
      this.length++;
  }

  _findSlot(key) {
      const hash = HashMap._hashString(key);
      const start = hash % this._capacity;

      for (let i=start; i<start + this._capacity; i++) {
          const index = i % this._capacity;
          const slot = this._slots[index];
          if (slot === undefined || slot.key == key) {
              return index;
          }
      }
  }

  _resize(size) {
      //console.log('Its resizing');
      const oldSlots = this._slots;
      this._capacity = size;
      // Reset the length - it will get rebuilt as you add the items back
      this.length = 0;
      this._slots = [];

      for (const slot of oldSlots) {
          if (slot !== undefined) {
              this.set(slot.key, slot.value);
          }
      }
  }


}

/*
  [SETTING]
  - given key & value
  - look for that key & thats done in findSlot
  -> key was already taken

  -> key wasnt taken
  ---
*/



HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;



const lor = new HashMap();


// lor.set('Hobbit', 'Bilbo');
// lor.set('Hobbit','Frodo');
// lor.set('Wizard','Gandolf');
// lor.set('Human','Aragon');
// lor.set('Elf','Legolas');
lor.set('Maiar','The Necromancer');
lor.set('Maiar','Sauron');
// lor.set('RingBearer','Gollum');
// lor.set('LadyOfLight','Galadriel');
// lor.set('HalfElven','Arwen');
// lor.set('Ent','Treebeard');

//console.log(lor.get('Maiar'));
//console.log(lor);



module.exports = HashMap;
