import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component' //now that this is imported, declare it by going into the NgModule section as a provider.

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'menu', component: MenuComponent },
    { path: 'dishdetail/:id', component: DishdetailComponent },
    { path: 'contactus', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
