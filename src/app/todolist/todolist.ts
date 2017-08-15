import {Item} from './Item';

export class Todolist {

  private _items: Item[];

  constructor() {
    this._items = [];
  }

  get items(): Item[] {
    return this._items;
  }

  public addItems(title: string) {

    this.items.push(new Item(title));
    console.log(`added ${title}`);
  }
}
