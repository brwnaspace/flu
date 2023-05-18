import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  submitClicked = false;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    terms: new FormControl(false)
  })
  
  constructor(private router: Router,
    private userService: UsersService ) {}

  ngOnInit(): void{
    // this.userForm.controls.name.setValue('oiiiiiiiii')
  }

  onSubmit() {
    console.log(this.userForm);
    this.submitClicked = true;
    
  }
  
}
