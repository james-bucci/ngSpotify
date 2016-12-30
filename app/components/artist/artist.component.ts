import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TArtist } from '../../models/artist.interface';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist : TArtist;

  constructor(
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit() { 
    this._route.params
      .map( params => params["id"])
      .subscribe( 
        (id) => {
          console.log('Geeting Artist : ' + id);
          this._spotifyService.getArtist(id)
            .subscribe( res => this.artist = res );
        }
      )
  }

}