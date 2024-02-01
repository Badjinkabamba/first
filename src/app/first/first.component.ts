import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent implements OnInit {
  hello: string[] = [];
  title = '';
  private setTitle = () => {
    const timetemp = new Date().getMilliseconds();
    this.title = 'new title ';
  };

  private changeTiltle(callback: { (): void; (): void }) {
    setTimeout(() => {
      callback();
    }, 200);
  }

  private onComplete() {
    return new Promise<void>((resolve, rejects) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor(private firstService: FirstService) {
    this.title$.subscribe(this.setTitle);
  }
  ngOnInit(): void {
    this.hello = this.firstService.sayHello();
    //this.title$.subscribe(this.setTitle);
  }
}
