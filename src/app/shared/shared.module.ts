import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';

@NgModule({
  // Declaring the components that belong to this module.
  declarations: [
    SidenavComponent,
    HeaderComponent,
    NavbarComponent, // Declaring NavbarComponent
    FooterComponent   // Declaring FooterComponent
  ],
  // Specifying the modules that this module depends on.
  imports: [
    CommonModule // Importing CommonModule to use common directives
  ],
  // Specifying the components that can be used in other modules.
  exports: [
    NavbarComponent, // Exporting NavbarComponent for use in other modules
    FooterComponent   // Exporting FooterComponent for use in other modules
  ]
})
// Exporting the SharedModule class so it can be imported in other parts of the application.
export class SharedModule { }
