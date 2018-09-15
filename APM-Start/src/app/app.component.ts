import { Component } from '@angular/core';

@Component({
  selector: 'pm-root', // pm == Product Management
  template: `
   <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
    </ul>
   </nav>
   <div class='container'>
    <router-outlet></router-outlet>
    <!-- the component's view is injected here -->
   </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
