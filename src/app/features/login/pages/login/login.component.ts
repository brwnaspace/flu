import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  error = false;

  constructor(private usersService: UsersService,
    private router: Router) { }

  authenticate() {
    const user = this.usersService.getUserByEmailAndPassword(this.email, this.password)

    if (user) {
      this.router.navigateByUrl('opening');
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      this.error = true;
    }
  }

}
