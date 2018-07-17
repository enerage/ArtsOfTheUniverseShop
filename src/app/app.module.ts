import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PaintingsListComponent } from './paintings/paintings-list.component';
import { PaintingThumbnailComponent } from './paintings/painting-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaintingDetailsComponent } from './paintings/painting-details/painting-details.component';
import { PaintingService } from './shared/painting.service';
import { appRoutes } from './routes';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PaintingsListComponent,
    PaintingThumbnailComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    PaintingDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PaintingService],
  bootstrap: [AppComponent]
  ,
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
