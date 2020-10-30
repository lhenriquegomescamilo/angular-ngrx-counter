import {createFeatureSelector, createSelector} from '@ngrx/store';
import {counterFeatureKey} from './counter.reducer';

export interface Counter {
  value: number;
}

export interface CounterState {
  counter: Counter;
  message?: string;
}


const counterFeatureSelector = createFeatureSelector<CounterState>(counterFeatureKey);


export const counterSelector = createSelector(counterFeatureSelector, (state: CounterState) => state.counter);
export const messageSelector = createSelector(counterFeatureSelector, (state: CounterState) => state.message);
