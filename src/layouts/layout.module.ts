import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent, SublevelMenuComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [SidenavComponent, SublevelMenuComponent],
})
export class LayoutModule { }
