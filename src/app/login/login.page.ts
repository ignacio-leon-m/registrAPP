import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formIngresarUsuario: FormGroup; //Declarando formulario reactivo
  
  usuario1: Usuario = {
    nombre: 'Jose',
    password: '1234'
  }


  constructor(private fb: FormBuilder, private router: Router) {
    this.formIngresarUsuario = this.fb.group(
      {
        nombre: [""],
        password: [""]
      }
    )
   }

  ngOnInit() {
  }

  ingresarUsuario(){
    this.router.navigate(['home']);
  }

  irARecuperar() {
    this.router.navigate(['recupera-pass']);
  }

}
