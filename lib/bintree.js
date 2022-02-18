import {TreeBase} from './treebase.js';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  get_child(dir) {
    return dir ? this.right : this.left;
  }
  set_child(dir, val) {
    if (dir) {
      this.right = val;
    } else {
      this.left = val;
    }
  }
}

export class BinTree extends TreeBase {
  // returns true if inserted, false if duplicate
  insert(data) {
    if (this._root === null) {
      // empty tree
      this._root = new Node(data);
      this.size++;
      return true;
    }

    /** @type {number | boolean} */
    var dir = 0;

    // setup
    var p = null; // parent
    var node = this._root;

    // search down
    while (true) {
      if (node === null) {
        // insert new node at the bottom
        node = new Node(data);
        p.set_child(dir, node);
        this.size++;
        return true;
      }

      // stop if found
      if (this._comparator(node.data, data) === 0) {
        return false;
      }

      dir = this._comparator(node.data, data) < 0;

      // update helpers
      p = node;
      node = node.get_child(dir);
    }
  }
  // returns true if removed, false if not found
  remove(data) {
    if (this._root === null) {
      return false;
    }

    var head = new Node(undefined); // fake tree root
    var node = head;
    node.right = this._root;
    var p = null; // parent
    var found = null; // found item
    /** @type {number | boolean} */
    var dir = 1;

    while (node.get_child(dir) !== null) {
      p = node;
      node = node.get_child(dir);
      var cmp = this._comparator(data, node.data);
      dir = cmp > 0;

      if (cmp === 0) {
        found = node;
      }
    }

    if (found !== null) {
      found.data = node.data;
      p.set_child(p.right === node, node.get_child(node.left === null));

      this._root = head.right;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}
