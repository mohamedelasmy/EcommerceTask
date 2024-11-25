import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ViewModule } from '../view/view.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    RouterModule,
    ViewModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
