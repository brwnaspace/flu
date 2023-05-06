import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private router: Router) {}

  isCollapsed = true;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  user?: User;

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user')
    if (userSessionStorage) {
      this.user = JSON.parse(userSessionStorage)
    }
  }
  
  exit() {
    sessionStorage.clear()
    this.router.navigateByUrl('')
  }

}
