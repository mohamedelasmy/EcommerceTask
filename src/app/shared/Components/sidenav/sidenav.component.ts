import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  franceFlag = '../../../../assets/images/flag-france.png'
  ukFlag = '../../../../assets/images/flag-uk.png'
  toggleIcon = '../../../../assets/images/toggle-icon.png'
  isSidenavOpen = false;
  constructor() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.style.width = '0';
    }
  }

  openNav() {
    this.isSidenavOpen = true;
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.style.width = '250px';
    }
  }

  closeNav() {
    this.isSidenavOpen = false;
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.style.width = '0';
    }
  }
}
