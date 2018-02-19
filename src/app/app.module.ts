import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { MapComponent } from './components/map/map.component';
import {ActivityService} from './services/activityservice.service';
import {appRoutes} from './routs';
import { RouterModule } from '@angular/router';
import {MapService} from './services/map.service';
import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
        FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ActivityService,
    MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
