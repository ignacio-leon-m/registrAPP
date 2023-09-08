import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recupera-pass',
  templateUrl: './recupera-pass.page.html',
  styleUrls: ['./recupera-pass.page.scss'],
})
export class RecuperaPassPage implements OnInit {

  formularioRecuperacion: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.formularioRecuperacion = this.fb.group(
      {
        nombre: [""]
      }
    )
  }

  ngOnInit() {
  }

  recuperar() {
    this.router.navigate(['home']);
  }

}
