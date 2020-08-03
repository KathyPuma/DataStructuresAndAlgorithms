// Design a HashSet without using any built-in hash table libraries.

// To be specific, your design should include these functions:

// add(value): Insert a value into the HashSet. 
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

var MyHashSet = function() {
   this.hash = {}
};

MyHashSet.prototype.add = function(key) {
    return this.hash[key] = true
};

MyHashSet.prototype.remove = function(key) {
    delete this.hash[key]
};

//  * Returns true if this set contains the specified element 
MyHashSet.prototype.contains = function(key) {
    return this.hash[key] !== undefined
};



let hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);  
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);       
hashSet.contains(2);    // returns true
hashSet.remove(2);          
hashSet.contains(2);    // returns false (already removed)
