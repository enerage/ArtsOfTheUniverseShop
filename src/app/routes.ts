import { Routes } from "@angular/router";
import { PaintingsListComponent } from "./paintings/paintings-list.component";
import { PaintingDetailsComponent } from "./paintings/painting-details/painting-details.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

export const appRoutes:Routes = [
    { path: 'paintings', component: PaintingsListComponent},
    { path: 'paintings/:id', component: PaintingDetailsComponent},
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent}
]