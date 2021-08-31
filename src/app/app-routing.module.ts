import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'Search', pathMatch:'full'},
  { path: 'Search', component: SearchComponent },
  { path: 'Results', component: ResultsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
