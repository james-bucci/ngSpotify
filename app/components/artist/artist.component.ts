import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { TArtist } from '../../models/artist.interface';
import { TAlbum } from '../../models/album.interface';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist : TArtist;
  albums : TAlbum[];

  constructor(
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit() { 

    this._route.params
      .map( params => params["id"])
      .subscribe(
        (artistId) => {

          this._spotifyService.getArtist(artistId)
            .subscribe( 
              (artist) => { this.artist = artist },
              (err) => { console.log('Error (Artist, getArtists):', err) }
          );

          this._spotifyService.getAlbums(artistId)
            .subscribe( 
              (albums) => { this.albums = albums },
              (err) => { console.log('Error (Artist, getAlbums):', err) }
          );

        },
        (err) => { console.log(err) }
      )
  }
}