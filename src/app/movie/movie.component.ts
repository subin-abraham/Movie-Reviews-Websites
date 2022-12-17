import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any
  movie: any;
image: any;
  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = this.router.snapshot.params['type'];
    this.id = this.router.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/Data/trending-movies.json';

    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/Data/popular-movies.json';

    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/Data/theatre-movies.json';

    }

    this.getMovie();
  }
  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie:{id:string})=>movie.id==this.id
      );
      if (index>-1){
        this.movie=this.movies[index];
      }
    });
  }

}
