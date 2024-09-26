import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout.component';
import { LayoutModule } from './layouts/layout.module';
import { Error404Component } from './views/error/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
