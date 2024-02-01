import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor() {}

  sayHello() {
    return ['Hello from service', 'Hi', 'damay khole reikeuh ndax baxna'];
  }
}
