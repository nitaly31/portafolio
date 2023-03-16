import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpened: boolean = false;

  toggelMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
