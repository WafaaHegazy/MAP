import { Component, OnInit } from '@angular/core';
import {Activity} from '../../models/activity.model'
import { ActivityService } from '../../services/activityservice.service';
 @Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities : Activity[];
  firstDate :Date;
  TotalDistance:number;
  TotalActivities:number;
  constructor(private activityService :ActivityService) { }

  ngOnInit() {
   this.activities=this.activityService.getActivities();
   this.TotalActivities=this.activityService.getToatalActivities(this.activities);
   this.TotalDistance=this.activityService.getTotalDistance(this.activities);
   this.firstDate=this.activityService.getFirstDate(this.activities)
  
  }

}
