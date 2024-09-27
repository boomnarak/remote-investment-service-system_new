import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [SidenavComponent, ContentComponent, AppFooterComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [SidenavComponent, ContentComponent, AppFooterComponent],
})
export class LayoutModule { }
