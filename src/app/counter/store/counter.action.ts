import {createAction, props} from '@ngrx/store';

export enum CounterActionType {
  COUNTER_INCREMENT = '@counter/increment',
  COUNTER_DECREMENT = '@counter/decrement',
  LOG_MESSAGE = '@counter/logMessage',
}

export const incrementAction = createAction(
  CounterActionType.COUNTER_INCREMENT,
  props<{ num: number }>()
);

export const decrementAction = createAction(
  CounterActionType.COUNTER_DECREMENT,
  props<{ num: number }>()
);

export const logMessageAction = createAction(
  CounterActionType.LOG_MESSAGE,
  props<{ message: string }>()
);
