import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {CounterActionType, decrementAction, incrementAction, logMessageAction} from './counter.action';
import {of} from 'rxjs';

@Injectable()
export class CounterEffects {
  constructor(private readonly actions$: Actions) {
  }

  @Effect()
  increment$ = createEffect(() => this.actions$.pipe(
    ofType(incrementAction),
    switchMap((action) => of(action)
      .pipe(map(() => logMessageAction({message: `estou incrementando ${action.num}`})))
    )
  ));

  @Effect()
  decrement$ = createEffect(() => this.actions$.pipe(
    ofType(decrementAction),
    switchMap((action) => of(action)
      .pipe(map(() => logMessageAction({message: `estou decrementando ${action.num}`})))
    )
  ));
}
