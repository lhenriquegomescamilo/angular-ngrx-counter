import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Counter, counterSelector, CounterState, messageSelector} from './store/counter.selector';
import {decrementAction, incrementAction} from './store/counter.action';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  readonly counter$ = this.store.select(counterSelector).pipe(map((counter: Counter) => counter.value));
  readonly message$ = this.store.select(messageSelector);

  constructor(
    private readonly store: Store<CounterState>
  ) {
  }

  ngOnInit(): void {

  }

  increment(): void {
    this.store.dispatch(incrementAction({num: 1}));
  }

  decrement(): void {
    this.store.dispatch(decrementAction({num: 1}));
  }

}
