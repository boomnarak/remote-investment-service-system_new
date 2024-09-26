import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remote-invesment-service-system';

  isSideNavCollapsed = false;
  screenWidhth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidhth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
