import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesComponent} from './exercises/exercises.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'list', component:ExercisesComponent},
  {path:'nested',component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
