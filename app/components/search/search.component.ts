import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SpotifyService } from '../../services/spotify.service';
import { TArtist } from '../../models/artist.interface';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    artists : TArtist[];
    searchString : string;
    
    constructor(private _spotifyService : SpotifyService) { 
    }

    ngOnInit() { 
    }

    searchMusic() {
        console.log('Searching Spotify for (' + this.searchString + ')');

        this._spotifyService.searchArtists(this.searchString)
            .subscribe(
                res => { console.log(res); this.artists = res.artists.items; },
                err => { console.log(err) }
            )        
    }
}