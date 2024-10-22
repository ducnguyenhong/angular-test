import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrailerComponent } from './trailer/trailer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trailer', component: TrailerComponent }
];
