import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { RecentComponent } from './components/recent/recent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'recent', component: RecentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
