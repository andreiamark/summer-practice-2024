import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
export interface UserProfile {
  id?: string;
  email: string;
  displayName: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {}

  getUsers(): Observable<UserProfile[]> {
    return this.firestore.collection<UserProfile>('users').valueChanges({ idField: 'id' });
  }
}
