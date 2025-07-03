import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Output() toggleMenu = new EventEmitter<void>();
  isLoggedIn = true;

  handleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}