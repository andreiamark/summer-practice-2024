import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],


})
export class LoginComponent  implements OnInit {

  showLoginForm: boolean = true;



  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    console.log('Auth Popup Initialized');
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user);

    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  async signup(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('User signed up:', userCredential.user);
  
    } catch (error) {
      console.error('Signup failed:', error);
    }
  }



  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
  
  }
  

