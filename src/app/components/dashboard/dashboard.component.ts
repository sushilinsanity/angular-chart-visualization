import { Component, OnInit } from '@angular/core';
import { SelectEventArgs } from '@syncfusion/ej2-angular-dropdowns';

import * as _ from 'lodash';

import { DashboardHelper } from './dashboard.helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardHelper]
})
export class DashboardComponent implements OnInit {
  public title: string;
  public xAxis: Object;
  public yAxis: Object;
  public zoom: Object;
  public chartData = [];
  public marker: Object;
  public tooltip: Object;

  public availableData: any[] = []
  public availableDates: string[] = []
  public selectedDate: string;

  constructor(private dashboardHelper: DashboardHelper) {
  }

  ngOnInit() {
    this.title = 'Data Chart';
    this.xAxis = {
      title: 'Time',
      valueType: 'DateTime',
      intervalType: 'Seconds',
    };
    this.yAxis = { title: 'Value' };
    this.zoom = {
      enableSelectionZooming: true,
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      toolbarItems: ['Reset'],
      // enablePan: true,
      enableScrollbar: true,
      enableAutoIntervalOnZooming: true
    };
    this.marker = { width: 1, height: 1 };
    this.tooltip = { enable: true };
    this.availableData = this.dashboardHelper.getChartData();
    this.availableDates = this.availableData.map(data => data.customDate);
    this.selectedDate = this.availableDates[0];
    this.applyDate(this.selectedDate);
  }

  onDateSelect(event: SelectEventArgs) {
    this.applyDate(event.itemData.value);
  }

  applyDate(date: string) {
    let data = this.availableData.map(data => {
      if (data.customDate === date) {
        return data.groupedData;
      }
    });
    data = data.filter(data => data)[0];

    const requiredData = _.cloneDeep(data).map(eachRow => {
      delete (eachRow.customDate);
      delete (eachRow.groupedData);
      return eachRow;
    })
    this.chartData = requiredData;
  }
}