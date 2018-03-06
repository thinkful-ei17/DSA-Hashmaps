class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let current = this.head;

      while(current.next !== null){
        current = current.next;
      }
      current.next = new _Node(item, null);
    }
  }

  insertBefore(match, newValue){
    if (!this.head) {
      return null;
    }

    if(this.head.value === match){
      this.insertFirst(newValue);
      return;
    }

    let current = this.head;
    let previous = this.head;


    while(current !== null){

      if(current.value === match){
        previous.next = new _Node(newValue, current);
        return;
      }
      previous = current;
      current = current.next;
    }

    console.log('Item to insert before was not found');
    return;
  }

  insertAfter(match, newValue){
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === match) {
        const tempNext = current.next;
        current.next = new _Node(newValue, tempNext);
        return;
      }
      current = current.next;
    }

    console.log('Item to insert after was not found');
    return;
  }

  insertAt(position, newValue){
    if(!this.head){
      return null;
    }

    if (position === 0) {
      this.insertFirst(newValue);
      return;
    }

    let counter = 0;
    let current = this.head;
    let previous = this.head;

    while(current !== null){
      if(counter === position){
        previous.next = new _Node(newValue, current);
        return;
      }
      previous = current;
      current = current.next;
      counter++;
    }
    console.log('Position was invalid');
    return;
  }

  find(item){
    let current = this.head;

    if(!this.head){
      return null;
    }

    while (current.next !== null) {

      if (current.value === item) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  remove(item){
    if(!this.head){
      return null;
    }

    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = this.head;

    while(current !== null){

      if (current.value === item){
        previous.next = current.next;
        return;
      }

      previous = current;
      current = current.next;
    }

    console.log('Item not found');
    return;
  }

  printList(){
    if(!this.head){
      return null;
    }
    let current = this.head;
    while (current !== null){
      console.log(current.value);
      current = current.next;
    }
    return;
  }

}

class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

function display(linkedList){
  if (!linkedList.head) {
    return null;
  }

  const list =[];
  let current = linkedList.head;

  while (current !== null) {
    list.push(current.value);
    current = current.next;
  }
  console.log(list);
  return;
}

function size(linkedList){
  if (!linkedList.head) {
    return null;
  }

  let counter = 0;
  let current = linkedList.head;

  while (current !== null) {
    counter++;
    current = current.next;
  }
  console.log('Number of items in list:', counter);
  return;
}

function isEmpty(linkedList){
  if (!linkedList.head){
    console.log('List is empty');
    return;
  }
  console.log('List is not empty');
  return;
}

function findPrevious(linkedList, item){
  if (!linkedList.head) {
    return null;
  }
  let current = linkedList.head;
  let previous= linkedList.head;

  while(current !== null){
    if(current.value === item){
      console.log('Previous node is:', previous);
      return previous;
    }
    previous = current;
    current = current.next;
  }
  console.log('Invalid item');
  return;
}

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

    return this._slots[index];
  }

  set(key, value) {
    console.log('set key', key);
    const loadRatio = (this.length + 1) / this._capacity;

    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key);

    if (!this._slots[index]) {
      console.log('added a new one!');
      const linkedList = new LinkedList();
      linkedList.insertFirst({key, value});

      this._slots[index] = linkedList;
    }

    else {
      console.log('added another!');
      this._slots[index].insertFirst({key, value});
    }

    console.log('incremented length');
    this.length++;
  }

  _findSlot(key) {
    console.log('key',key);
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i=start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      if (slot === undefined || slot.head.value.key == key) {
        return index;
      }
    }
  }

  _setLinkedList(linkedList) {
    const { key, value } = linkedList.head.value;

    const index = this._findSlot(key);
    console.log('readded!');

    console.log('added linkedList!');
    this._slots[index] = linkedList;

    console.log('incremented length');
    this.length++;
  }

  _resize(size) {
    console.log('resizing!');
    const oldSlots = this._slots;
    this._capacity = size;
    this.length = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      console.log('=====PRINTING SLOT====');
      console.log(slot);
      console.log('=====PRINTING SLOT====');
      if (slot !== undefined) {
        this._setLinkedList(slot);
      }
    }
  }
}


HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

const map = new HashMap();
for(let i = 0; i < 55; i++){
  console.log('for', '' + i);
  map.set('' + i, '' + i);
  map.set('' + i, '' + i+2);
  map.set('' + i, '' + i+3);
  map.set('' + i, '' + i+4);
  console.log('==========START MAP============');
  console.log(map);
  console.log('========== OLD MAP=============');
}

console.log(display(map.get('2')));



module.exports = HashMap;
