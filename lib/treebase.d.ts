export class TreeBase {
  constructor(comparator: any);
  _root: any;
  size: number;
  _comparator: any;
  clear(): void;
  find(data: any): any;
  findIter(data: any): Iterator;
  lowerBound(item: any): Iterator;
  upperBound(item: any): Iterator;
  min(): any;
  max(): any;
  iterator(): Iterator;
  each(cb: any): void;
  reach(cb: any): void;
}
declare class Iterator {
  constructor(tree: any);
  _tree: any;
  _ancestors: any[];
  _cursor: any;
  data(): any;
  next(): any;
  prev(): any;
  _minNode(start: any): void;
  _maxNode(start: any): void;
}
export {};
