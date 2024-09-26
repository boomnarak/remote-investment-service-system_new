import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './@theme/layouts/sidenav/sidenav.component';
import { SublevelMenuComponent } from './@theme/layouts/sidenav/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
