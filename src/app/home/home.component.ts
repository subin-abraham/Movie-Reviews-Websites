import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: any
  popularMovies: any
  theatresmovies:any

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatresMovies();
    this.getPopularMovies();
  }
  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/Data/trending-movies.json').subscribe((movies) => 
    { this.trendingMovies = movies; 
    console.log(this.trendingMovies);
    });

  } 

  getTheatresMovies() {
    this.http.get('http://localhost:4200/assets/Data/theatre-movies.json').subscribe((movies) => 
    { this.theatresmovies = movies; 
    console.log(this.theatresmovies);
    });

  }
  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/Data/popular-movies.json').subscribe((movies) => 
    { this.popularMovies = movies; 
    console.log(this.popularMovies);
    });

  }
}
