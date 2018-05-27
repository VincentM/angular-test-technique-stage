import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LignesComponent }      from './lignes/lignes.component';

import { GererMesStationsComponent }   from './gerer-mes-stations/gerer-mes-stations.component';

const routes: Routes = [
  { path: 'lignes', component: LignesComponent },
  { path: 'gerer-mes-stations', component: GererMesStationsComponent },
  { path: '', redirectTo: '/lignes', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}