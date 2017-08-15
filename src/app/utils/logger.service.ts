import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  public log(value: string): void {
    console.log(value);
  }

}
