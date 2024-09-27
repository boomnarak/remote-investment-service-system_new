import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  title = 'remote-invesment-service-system';
  isCollapsed = false;
  isSideNavCollapsed = false;
  screenWidhth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidhth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
