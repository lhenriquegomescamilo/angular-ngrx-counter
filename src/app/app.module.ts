import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {StoreModule} from '@ngrx/store';
import {counterFeatureKey, counterReducer} from './counter/store/counter.reducer';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CounterEffects} from './counter/store/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducer, {}),
    StoreModule.forFeature(
      counterFeatureKey,
      counterReducer
    ),
    EffectsModule.forFeature([CounterEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
