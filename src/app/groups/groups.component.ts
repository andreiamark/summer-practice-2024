import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface Movie {
  title: string;
  director: string;
  releaseYear: number;

} 
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})


export class GroupsComponent  implements OnInit {


  movieForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseYear: ['', Validators.required],
    });
  }

  addMovie() {
    if (this.movieForm.valid) {
      const movieData: Movie = this.movieForm.value;
      this.firestore.collection('movies').add(movieData)
        .then(() => {
          console.log('Movie added successfully!');
          this.movieForm.reset();
        })
        .catch(error => {
          console.error('Error adding movie:', error);
        });
    } else {
      console.error('Invalid form data. Please check your inputs.');
    }
  }

}
