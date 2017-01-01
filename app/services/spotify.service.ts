import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { TArtist } from '../models/artist.interface';
import { TAlbum } from '../models/album.interface';

const  SPOTIFY_API_URL = 'https://api.spotify.com/v1';

@Injectable()
export class SpotifyService {

    constructor(private _http: Http) {
        console.log('Spotify Service Started...')
     }

     searchArtists(searchString: string) : Observable<TArtist[]> {
         return this._http.get(SPOTIFY_API_URL+'/search?q='+searchString+'&offset=0&limit=20&type=artist&market=US')
            .map( res => <TArtist[]> res.json().artists.items)
            .do( responseData => { console.log('SEARCH ARTISTS DATA...'); console.log(responseData) } )
            .catch(this._handleError);
     }

     getArtist(id: string) : Observable<TArtist> {
         return this._http.get(SPOTIFY_API_URL+'/artists/'+ id)
            .map( res => <TArtist> res.json())
            .do( responseData => { console.log('GET ARTIST DATA...'); console.log(responseData) } )           
            .catch(this._handleError);
     }
     
     getAlbums(id: string) : Observable<TAlbum[]> {
         return this._http.get(SPOTIFY_API_URL+'/artists/' + id + '/albums')
            .map( res => <TAlbum[]> res.json().items)
            .do( responseData => { console.log('GET ALBUM DATA...'); console.log(responseData) } )           
            .catch(this._handleError);
     }

    getAlbum(id: string) : Observable<TAlbum> {
         return this._http.get(SPOTIFY_API_URL+'/albums/'+ id)
            .map( res => <TAlbum> res.json())
            .do( responseData => { console.log('GET ALBUM DATA...'); console.log(responseData) } )           
            .catch(this._handleError);
     }

     _handleError(err: any, caught: any) {
        console.log('Spotify Service:', err); 
        return Observable.throw(err);
     }
}