import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false; 
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router){
   this.form = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]

   })  
  }

ngOnInit():void{

}

ingresar(){
const usuario = this.form.value.usuario;
const password = this.form.value.password;

if(usuario == 'ADSO' && password == 'adso5'){
// PODRA INGRESAR Y SE REDIRECCIONA A LA OTRA PESTAÑA
this.fakeLoading();
} else{
//SI NO  SE MOSTRARA UN MENSAJE DE ERROR
this.error();
this.form.reset();
 }
}

error(){
  this._snackBar.open('Usuario o Contraseña son invalidos','',{
    duration: 2000,
    horizontalPosition:'center',
    verticalPosition:'bottom'
  })
}

fakeLoading(){
this.loading = true;
setTimeout(()  =>{
this.router.navigate(['dashboard']) ;
},1500);
}




}
