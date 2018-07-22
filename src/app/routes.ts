import { Routes } from "@angular/router";
import { PaintingsListComponent } from "./paintings/paintings-list.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";

export const appRoutes:Routes = [
    { path: 'paintings', component: PaintingsListComponent},
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'login', component: LoginComponent}
    
]