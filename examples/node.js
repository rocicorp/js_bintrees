import {RBTree as Tree} from '../index.js';

// create a new tree, pass in the compare function
var tree = new Tree((a, b) => a - b);

// do some inserts
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.remove(2);

// get smallest item
tree.min();
