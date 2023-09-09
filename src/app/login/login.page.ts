import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

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
  nombre:string = '';
  
  // usuario1: Usuario = {
  //   nombre: 'Jose',
  //   password: '1234'
  // }


  constructor(private fb: FormBuilder, private router: Router, private stateService: StateService) {
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
    const usuario = {
      nombre: this.formIngresarUsuario.get('nombre')?.value,
      password: this.formIngresarUsuario.get('password')?.value
    }

    const nombre = usuario.nombre;

    this.stateService.seTitulo = 'Homepage'
    this.stateService.setNombre = nombre;
    this.router.navigate(['home']);
    
  }

  irARecuperar() {
    this.stateService.setNombre = 'invitado'
    this.stateService.seTitulo = 'Recuperar contraseña'
    this.router.navigate(['recupera-pass']);
  }

  recuperarUsuario(){
    
  }

}
