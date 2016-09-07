import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MovieService } from '../services/movie.service';


@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: 'movie.component.html',
  directives:[ ROUTER_DIRECTIVES ]
})
export class MovieComponent {

  popularList: Array<Object>;
  theatersList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieService: MovieService){
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

    this._movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }

  searchMovies(){
    this._movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }
}
