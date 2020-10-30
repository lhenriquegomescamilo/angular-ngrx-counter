import {CounterActionType, decrementAction, incrementAction, logMessageAction} from './counter.action';
import {CounterState} from './counter.selector';
import {createReducer, on} from '@ngrx/store';

export const counterFeatureKey = 'counter';
export const initialState: CounterState = {
  counter: {value: 0}
};
// tslint:disable-next-line:variable-name
const _counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CounterActionType.COUNTER_INCREMENT:
      return {...state, counter: {value: state.counter.value + action.num}};
    case CounterActionType.COUNTER_DECREMENT:
      return {...state, counter: {value: state.counter.value - action.num}};
    default :
      return state;
  }
};

// export const counterReducer = (state: any, action: Action) => _counterReducer(state, action);
export const counterReducer = createReducer(
  initialState,
  on(incrementAction, (stateCounter: CounterState, action) =>
    ({...stateCounter, counter: {...stateCounter.counter, value: (action.num + stateCounter.counter.value)}})),
  on(decrementAction, (stateCounter: CounterState, action) =>
    ({...stateCounter, counter: {...stateCounter.counter, value: (stateCounter.counter.value - action.num)}})),
  on(logMessageAction, (stateCounter: CounterState, action) =>
    ({...stateCounter, message: action.message}))
  )
;
