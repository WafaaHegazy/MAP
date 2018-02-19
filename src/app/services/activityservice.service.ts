import { Injectable } from '@angular/core';
import {Activity} from '../models/activity.model'
import {SAVED_ACTIVITIES} from '../models/activities'
@Injectable()
export class ActivityService {

  constructor() { }
  
getActivities():Activity[] {
  return SAVED_ACTIVITIES.slice(0);
}
getToatalActivities (activities:Activity[]) {
  return activities.length;
}

getTotalDistance(activities:Activity[]){
  let totalDistance=0;
  for(let i=0;i<activities.length;i++){
    totalDistance+=activities[i].distance;
  }
  return totalDistance;
}

getFirstDate(allActivities: Activity[]):Date{
  var earliestDate = new Date("01/01/9999");
  for(var i = 0; i < allActivities.length; i++){
    var currentDate = allActivities[i].date;
    if(currentDate < earliestDate){
      earliestDate = currentDate;
    }
  }
  return earliestDate;
}
}
