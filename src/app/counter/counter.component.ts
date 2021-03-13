import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private strore: Store<{ count: number }>) {
    this.count$ = this.strore.select('count');
  }

  ngOnInit(): void {}

  increment() {
    this.strore.dispatch(increment());
  }

  decrement() {
    this.strore.dispatch(decrement());
  }
}
