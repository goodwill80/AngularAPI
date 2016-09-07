import { Injectable } from '@angular/core';
//this will help bypass cross origin
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
  apiKey: string;

  constructor(private _jsonp:Jsonp){
    this.apiKey = '24b67c3e9ea06ca916092ededbe7ab96';
    console.log('MovieService Started!!!');
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie/?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=24b67c3e9ea06ca916092ededbe7ab96')
    .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie/?callback=JSONP_CALLBACK&primary_release_date.gte=2016-08-03&primary_release_date.lte=2016-09-05&sort_by=popolarity.desc&api_key=24b67c3e9ea06ca916092ededbe7ab96')
    .map(res => res.json());
  }

  searchMovies(){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
    .map(res => res.json());
  }

}
