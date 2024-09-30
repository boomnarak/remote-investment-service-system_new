import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Error404Component } from '../pages/error/error404/error404.component';
import { LayoutComponent } from '../layouts/layout.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' }),
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
