import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@wf/app/shared';
import { DailyCityWeatherTableComponent, HourlyCityWeatherTableComponent, SearchCityComponent } from './components';
import { DashboardPageComponent } from './containers';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpService } from './services';
import { WeatherForecastEffect } from './state/effects';
import { wheatherForecastReducer } from './state/reducers';
import { WeatherForecastStateService } from './state/services';

const COMPONENTS = [
  DashboardPageComponent,
  SearchCityComponent,
  HourlyCityWeatherTableComponent,
  DailyCityWeatherTableComponent,
];

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('weather', wheatherForecastReducer),
    EffectsModule.forFeature([WeatherForecastEffect]),
  ],
  exports: [],
  declarations: [...COMPONENTS],
  providers: [WeatherForecastStateService, HttpService],
})
export class DashboardModule {}
