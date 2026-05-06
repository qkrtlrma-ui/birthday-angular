import { Routes } from '@angular/router';
import { Gift } from './pages/gift/gift';
import { Letter } from './pages/letter/letter';
import { Photo } from './pages/photo/photo';
import { Cake } from './pages/cake/cake';

export const routes: Routes = [
  { path: '', redirectTo: 'gift', pathMatch: 'full' },
  { path: 'gift', component: Gift },
  { path: 'letter', component: Letter },
  { path: 'photo', component: Photo },
  { path: 'cake', component: Cake },
];