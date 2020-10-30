import {createReducer} from '@ngrx/store';

export const appFeatureKey = 'app';

export interface AppState {
  app: string;
}

export const initialState: AppState = {
  app: ''
};

export const reducer = createReducer(
  initialState
);
