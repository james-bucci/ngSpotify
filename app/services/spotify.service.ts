import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

const  SPOTIFY_API_URL = 'https://api.spotify.com/v1';

@Injectable()
export class SpotifyService {

    constructor(private _http: Http) {
        console.log('Spotify Service Started...')
     }

     searchArtists(searchString: string) : Observable<any> {
         return this._http.get(SPOTIFY_API_URL+'/search?q='+searchString+'&offset=0&limit=20&type=artist&market=US')
            .map( res => res = res.json())
            .catch(this._handleError);
     }

     getArtist(id: string) : Observable<any> {
         return this._http.get(SPOTIFY_API_URL+'/artists/'+ id)
            .map( res => res = res.json())
            .catch(this._handleError);
     }

     _handleError(err: any, caught: any) {
        console.log(err); 
        return Observable.throw(err);
     }
}