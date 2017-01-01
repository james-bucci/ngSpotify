import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { TAlbum } from '../../models/album.interface';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {

  album : TAlbum;

  constructor(
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit() { 

    this._route.params
      .map( params => params["id"])
      .subscribe(
        (albumId) => {

          this._spotifyService.getAlbum(albumId)
            .subscribe( 
              (album) => { this.album = album },
              (err) => { console.log('Error (Album, getAlbum):', err) }
          );

        },
        (err) => { console.log(err) }
      )
  }
}