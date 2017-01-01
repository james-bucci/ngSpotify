import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { AboutComponent }  from './components/about/about.component';
import { SearchComponent }  from './components/search/search.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { AlbumComponent }  from './components/album/album.component';

import { SpotifyService }  from './services/spotify.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'search', component: SearchComponent},
      {path: 'artist/:id', component: ArtistComponent},
      {path: 'album/:id', component: AlbumComponent},
      {path: 'about', component: AboutComponent},
      {path: '', redirectTo : 'search', pathMatch : 'full'},
      {path: '**', redirectTo : 'about', pathMatch: 'full'}
    ])
  ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent,
    SearchComponent
  ],
  providers: [
    SpotifyService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
