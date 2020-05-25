import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule, DateTimeService, AreaSeriesService, ZoomService, ScrollBarService, LineSeriesService, DateTimeCategoryService, TooltipService, DataLabelService, LegendService, MultiLevelLabelService } from '@syncfusion/ej2-angular-charts';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    DropDownListModule
  ],
  providers: [DateTimeService, AreaSeriesService, ZoomService, ScrollBarService, LineSeriesService, DateTimeCategoryService,
    TooltipService, DataLabelService, LegendService, MultiLevelLabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
