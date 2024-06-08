// @ts-nocheck
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  
})
export class MoviesPageComponent   {

  message: string = '';
  rating: number = 1;
  poster: File | null = null;
  groupName: string = '';
  groupId: string = '';
  movieId: string = '';
// @ts-nocheck
  constructor(private firestore: AngularFirestore ) {
    this.movies$ = this.getMovieRecommendations();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.poster = input.files[0];
    }
  }

  async onSubmit() {
  
    try {
      // let posterUrl = '';
      // if (this.poster) {
      //   const posterRef = this.storage.ref(`posters/${this.poster.name}`);
      //   await posterRef.put(this.poster);
      //   posterUrl = await posterRef.getDownloadURL().toPromise();
      // }
      
      const recommendation = {
         message: this.message,
        rating: this.rating,
        posterUrl: posterUrl,
        createdAt: new Date()
      };
      
      await this.firestore.collection('recommendations').add(recommendation);
      console.log('Recommendation posted successfully');
    } catch (error) {
      console.error('Error posting recommendation:', error);
    }
  }

  async onCreateGroup() {
    // Logic to create a group
    try {
      const group = {
        name: this.groupName,
        createdAt: new Date()
      };
      
      await this.firestore.collection('groups').add(group);
      console.log('Group created successfully');
    } catch (error) {
      console.error('Error creating group:', error);
    }
  }

  async onShareMovie() {

    try {
      const sharedMovie = {
        groupId: this.groupId,
        movieId: this.movieId,
        sharedAt: new Date()
      };
      
      await this.firestore.collection('sharedMovies').add(sharedMovie);
      console.log('Movie shared successfully');
    } catch (error) {
      console.error('Error sharing movie:', error);
    }
  }
  movies$: Observable<MovieRecommendation[]>;




  getMovieRecommendations(): Observable<MovieRecommendation[]> {
    return this.firestore.collection<MovieRecommendation>('recommendations', ref => ref.orderBy('createdAt', 'desc')).valueChanges({ idField: 'id' });
  }

}
