import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent  {

  message: string = '';
  rating: number = 1;
  poster: File | null = null;
  groupName: string = '';
  groupId: string = '';
  movieId: string = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.poster = input.files[0];
    }
  }

  onSubmit() {

    console.log('Poster:', this.poster);
    console.log('Mesaj:', this.message);
    console.log('Rating:', this.rating);
  }

  onCreateGroup() {

    console.log('Nume Grup:', this.groupName);
  }

  onShareMovie() {

    console.log('ID Grup:', this.groupId);
    console.log('ID Film:', this.movieId);
  }

}
