
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pageOne', component: PageOneComponent},
  {path: 'pageTwo', component: PageTwoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
