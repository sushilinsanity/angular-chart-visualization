import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

const { datatraining } = require("../shared/data/datatraining.json");

export class DashboardHelper {
  data: BehaviorSubject<any> = new BehaviorSubject<any>(datatraining);

  getChartData() {
    let addCustomDate;
    this.data.subscribe(response => {
      addCustomDate = response.map(data => {
        let customDate: string;
        const day = new Date(data.date).getDate();
        const month = new Date(data.date).getMonth() + 1;
        const year = new Date(data.date).getFullYear();
        customDate = `${month}/${day}/${year}`
        data.customDate = customDate;
        data.groupedData = [];
        return data;
      });
    })

    const unique: any[] = _.uniqBy(addCustomDate, 'customDate');
    addCustomDate.map(eachDateData => {
      const index = unique.findIndex(eachData => eachData.customDate === eachDateData.customDate);
      if (index > -1) {
        unique[index]['groupedData'].push(eachDateData);
      }
    });
    return unique;
  }
}