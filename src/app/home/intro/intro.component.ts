import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonComponent } from '@app/components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { environment } from '../../../environments/environment';
import { Movie } from '../../../types/movie.type';

@Component({
  selector: 'app-home-intro',
  standalone: true,
  imports: [ButtonModule, CarouselModule, ButtonComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  cdnTmdb = environment.cdnTmdb;

  movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.apiDataCenter}/movies/now-playing`).subscribe({
      next: (response: any) => {
        const movies = response.results as Movie[];
        this.movies = movies;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }
}
