import {Item} from './Item';
import {LoggerService} from '../utils/logger.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TodolistService {

  private _items: Item[];
  private _logger;

  constructor(logger: LoggerService ) {
    this._items = [];
    this._logger = logger;
  }

  get items(): Item[] {
    return this._items;
  }

  public addItems(title: string) {

    this.items.push(new Item(title));
    this._logger.log(`added ${title}`);
  }
}
