import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout.component';
import { LayoutModule } from './layouts/layout.module';
import { AppRoutingModule } from './router/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { NgZorroAntdModule } from './plugins/ng-zorro-antd-module.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
